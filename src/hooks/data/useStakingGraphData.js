import useSWR from "swr";
import { BigNumber } from "@ethersproject/bignumber";
import { formatUnits, parseUnits } from "@ethersproject/units";

import useChainId from "hooks/useChainId";
import useTokenDecimals from "../useTokenDecimals";
import useTotalStaked from "hooks/stats/userManagerStats/useTotalStaked";
import { isPonderChain, ponderQuery } from "util/ponder";

const EVENTS_QUERY = `
  query StakeEvents($where: activityEventFilter, $after: String) {
    activityEvents(where: $where, orderBy: "timestamp", orderDirection: "desc", limit: 1000, after: $after) {
      items { type amount timestamp }
      pageInfo { endCursor hasNextPage }
    }
  }
`;

// Rebuilds the daily total-staked series from stake/unstake activity: start
// from the current on-chain total and walk events newest-to-oldest, so no
// historical baseline is needed.
async function fetcher(_, chainId, decimals, totalStaked) {
  const oneYearAgo = Math.floor(Date.now() / 1000) - 3600 * 24 * 365;

  const events = [];
  let after = null;
  do {
    const { activityEvents } = await ponderQuery(EVENTS_QUERY, {
      where: {
        chainId,
        type_in: ["STAKE", "UNSTAKE"],
        timestamp_gte: String(oneYearAgo),
      },
      after,
    });

    events.push(...activityEvents.items);
    after = activityEvents.pageInfo.hasNextPage
      ? activityEvents.pageInfo.endCursor
      : null;
  } while (after);

  const points = [];
  let running = parseUnits(totalStaked, decimals);
  let currentDay = null;

  for (const event of events) {
    const day = new Date(Number(event.timestamp) * 1000).toDateString();
    if (day !== currentDay) {
      // First (= latest) event seen for this day: `running` is the day's
      // closing total, because everything after it is already applied.
      points.unshift({ day, value: running });
      currentDay = day;
    }

    const amount = BigNumber.from(event.amount || 0);
    running = event.type === "STAKE" ? running.sub(amount) : running.add(amount);
  }

  const today = new Date().toDateString();
  if (points.length === 0 || points[points.length - 1].day !== today) {
    points.push({ day: today, value: parseUnits(totalStaked, decimals) });
  }

  return points.map((point) => {
    const date = point.day.split(" ");
    return {
      x: `${date[1]} ${date[2]}`,
      y: Number(formatUnits(point.value, decimals)),
    };
  });
}

export default function useStakingGraphData() {
  const chainId = useChainId();
  const { data: decimals } = useTokenDecimals();
  const { data: totalStaked } = useTotalStaked();

  const shouldFetch = isPonderChain(chainId) && !!decimals && !!totalStaked;
  return useSWR(
    shouldFetch ? ["useStakingData", chainId, decimals, totalStaked] : null,
    fetcher
  );
}
