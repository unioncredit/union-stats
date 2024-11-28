import useSWR from "swr";
import { ethers } from "ethers";
import groupBy from "lodash/groupBy";
import { config, fetchUserManagerMeta } from "@unioncredit/data";
import useChainId from "hooks/useChainId";
import useTokenDecimals from "../useTokenDecimals";

const startTimePoint = Number(new Date().getTime()) / 1000 - 3600 * 24 * 365;
async function fetcher(_, chainId, decimals) {
  config.set("chainId", chainId);
  const result = await fetchUserManagerMeta();
  const grouped = groupBy(result, (row) => {
    const timestamp = Number(row.timestamp);
    if (timestamp > startTimePoint) {
      const date = new Date(timestamp * 1000);
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
  });
  delete grouped.undefined;

  const aggregate = Object.keys(grouped)
    .map((key) => {
      const row = grouped[key];
      const last = row[row.length - 1];
      return { totalStaked: last.totalStaked, timestamp: last.timestamp };
    })
    .sort((a, b) => a.timestamp - b.timestamp);

  return aggregate.map((row) => {
    const date = new Date(Number(row.timestamp) * 1000)
      .toDateString()
      .split(" ");
    return {
      x: `${date[1]} ${date[2]}`,
      y: Number(ethers.utils.formatUnits(row.totalStaked, decimals)),
    };
  });
}

export default function useStakingGraphData() {
  const chainId = useChainId();
  const { data: decimals } = useTokenDecimals();

  return useSWR(["useStakingData", chainId, decimals], fetcher);
}
