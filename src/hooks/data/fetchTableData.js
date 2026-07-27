import useSWR from "swr";
import merge from "lodash/merge";

import useChainId from "hooks/useChainId";
import { isPonderChain, ponderQuery } from "util/ponder";

// Maps the legacy members-API field paths (still used by the filter and
// sorting constants) onto ponder `account` columns.
const FIELD_MAP = {
  "contracts.is_member": "isMember",
  "contracts.is_overdue": "isOverdue",
  "contracts.credit_limit": "creditLimit",
  "contracts.total_owed.total": "owed",
  "contracts.vouches.number_received": "voucherCount",
  "contracts.vouches.number_given": "voucheeCount",
  "contracts.vouches.amount_received": "trustReceived",
  "contracts.stake.total": "totalStake",
  "contracts.stake.locked": "totalLockedStake",
  "contracts.stake.frozen": "totalFrozenStake",
};

const RANGE_OPERATORS = { gt: "_gt", gte: "_gte", lt: "_lt", lte: "_lte" };

// Integer columns take GraphQL Ints; everything else numeric is a bigint
// column and must be passed as a string.
const INT_COLUMNS = new Set(["voucherCount", "voucheeCount"]);

const ACCOUNTS_QUERY = `
  query Accounts($where: accountFilter, $orderBy: String, $orderDirection: String, $limit: Int, $after: String) {
    accounts(where: $where, orderBy: $orderBy, orderDirection: $orderDirection, limit: $limit, after: $after) {
      items {
        address
        isMember
        isOverdue
        creditLimit
        owed
        voucherCount
        voucheeCount
        trustReceived
        totalStake
        totalLockedStake
        totalFrozenStake
      }
      pageInfo { endCursor hasNextPage }
      totalCount
    }
  }
`;

const boundValue = (column, value) =>
  INT_COLUMNS.has(column) ? Number(value) : String(value);

// The old API matched addresses and ENS names server side. Ponder only has
// addresses, so .eth searches resolve to an address first (via the same
// service useENS already relies on).
async function resolveSearch(searchQuery) {
  const search = (searchQuery || "").replace(/\*/g, "").trim().toLowerCase();
  if (!search) return {};

  if (search.endsWith(".eth")) {
    try {
      const resp = await fetch(
        `https://api.ensideas.com/ens/resolve/${encodeURIComponent(search)}`
      );
      const json = await resp.json();
      if (json.address) return { address: json.address.toLowerCase() };
    } catch (_) {
      // fall through: an unresolved name matches nothing
    }
    return { address: search };
  }

  return { address_contains: search };
}

function buildWhere(chainId, queries, searchWhere) {
  const parsed = queries.reduce((prev, curr) => merge(prev, curr.query), {});
  const where = { chainId, ...searchWhere };

  for (const [path, value] of Object.entries(parsed)) {
    const column = FIELD_MAP[path];
    if (!column) continue;

    if (value && typeof value === "object") {
      for (const [op, bound] of Object.entries(value)) {
        if (RANGE_OPERATORS[op]) {
          where[column + RANGE_OPERATORS[op]] = boundValue(column, bound);
        }
      }
    } else {
      where[column] = value;
    }
  }

  return where;
}

function buildOrder(sortOptions) {
  const [path, direction] = Object.entries(sortOptions || {})[0] || [];
  return {
    orderBy: FIELD_MAP[path] || "totalStake",
    orderDirection: direction || "desc",
  };
}

// Ponder paginates with cursors, the UI with page numbers. Remember the end
// cursor of every page already visited (per query shape) so revisiting or
// stepping through pages costs one request each; jumping past unvisited pages
// walks forward from the deepest known cursor.
const cursorCache = new Map();

async function fetchPage(where, orderBy, orderDirection, page, size) {
  const cacheKey = JSON.stringify([where, orderBy, orderDirection, size]);
  const cursors = cursorCache.get(cacheKey) || [null];

  let result;
  for (let pageIndex = Math.min(page, cursors.length); pageIndex <= page; pageIndex++) {
    const data = await ponderQuery(ACCOUNTS_QUERY, {
      where,
      orderBy,
      orderDirection,
      limit: size,
      after: cursors[pageIndex - 1] || null,
    });
    result = data.accounts;

    if (result.pageInfo.hasNextPage) {
      cursors[pageIndex] = result.pageInfo.endCursor;
    } else if (pageIndex < page) {
      break;
    }
  }

  cursorCache.set(cacheKey, cursors);
  return result;
}

// Shape rows like the old members API so the table components stay untouched.
// Bigints stay as decimal strings; formatWei/expandToString handle them.
function toLegacyRow(account) {
  return {
    address: account.address,
    data: {
      contracts: {
        is_member: account.isMember,
        is_overdue: account.isOverdue,
        credit_limit: account.creditLimit,
        total_owed: { total: account.owed },
        vouches: {
          number_received: account.voucherCount,
          number_given: account.voucheeCount,
          amount_received: account.trustReceived,
        },
        stake: {
          total: account.totalStake,
          locked: account.totalLockedStake,
          frozen: account.totalFrozenStake,
        },
      },
    },
  };
}

const unionDataFetcher = async (
  _,
  chainId,
  searchQuery,
  queries,
  page,
  size,
  sortOptions
) => {
  if (!chainId) return false;

  if (!isPonderChain(chainId)) {
    return { unsupported: true, items: [], pagination: { total: { value: 0 } } };
  }

  const searchWhere = await resolveSearch(searchQuery);
  const where = buildWhere(chainId, queries, searchWhere);
  const { orderBy, orderDirection } = buildOrder(sortOptions);

  const result = await fetchPage(where, orderBy, orderDirection, page, size);

  return {
    items: result.items.map(toLegacyRow),
    pagination: { total: { value: result.totalCount } },
  };
};

export default function useTableData(filters, pagination, sortQuery) {
  const chainId = useChainId();
  return useSWR(
    [
      "unionData",
      chainId,
      filters.searchQuery,
      filters.queries,
      pagination.page,
      pagination.size,
      sortQuery,
    ],
    unionDataFetcher
  );
}
