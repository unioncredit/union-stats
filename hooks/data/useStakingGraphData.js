import useSWR from "swr";
import { ethers } from "ethers";
import groupBy from "lodash/groupBy";
import { fetchUserManagerMeta } from "@unioncredit/data";
import useChainId from "hooks/useChainId";

async function fetcher(_, chainId) {
  // TODO:
  // config.set("chainId", chainId);
  const result = await fetchUserManagerMeta();

  const grouped = groupBy(result, (row) => {
    const date = new Date(Number(row.timestamp) * 1000);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  });

  const aggregate = Object.keys(grouped).map((key) => {
    const row = grouped[key];
    const last = row[row.length - 1];
    return { totalStaked: last.totalStaked, timestamp: last.timestamp };
  });

  return aggregate.map((row) => ({
    x: new Date(Number(row.timestamp) * 1000),
    y: Number(ethers.utils.formatEther(row.totalStaked)),
  }));
}

export default function useStakingGraphData() {
  const chainId = useChainId();
  return useSWR(["useStakingData", chainId], fetcher);
}
