import useSWR from "swr";
import { BigNumber } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

import useChainId from "hooks/useChainId";
import useTokenDecimals from "hooks/useTokenDecimals";
import { isPonderChain, ponderQuery } from "util/ponder";

const OVERDUE_QUERY = `
  query OverdueAccounts($where: accountFilter, $after: String) {
    accounts(where: $where, limit: 1000, after: $after) {
      items { owed }
      pageInfo { endCursor hasNextPage }
    }
  }
`;

async function fetcher(_, chainId, decimals) {
  let after = null;
  let total = BigNumber.from(0);

  do {
    const { accounts } = await ponderQuery(OVERDUE_QUERY, {
      where: { chainId, isOverdue: true, owed_gt: "0" },
      after,
    });

    for (const item of accounts.items) {
      total = total.add(item.owed);
    }

    after = accounts.pageInfo.hasNextPage ? accounts.pageInfo.endCursor : null;
  } while (after);

  return Number(formatUnits(total, decimals));
}

export default function useTotalDefault() {
  const chainId = useChainId();
  const { data: decimals } = useTokenDecimals();

  const shouldFetch = isPonderChain(chainId) && !!decimals;
  return useSWR(shouldFetch ? ["TotalDefault", chainId, decimals] : null, fetcher);
}
