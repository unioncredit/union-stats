import useSWR from "swr";
import { ethers } from "ethers";
import groupBy from "lodash/groupBy";
import { fetchDeposits } from "@unioncredit/data";
import useChainId from "hooks/useChainId";

async function fetcher(_, chainId) {
  // TODO:
  // config.set("chainId", chainId);
  const result = await fetchDeposits();

  const grouped = groupBy(result, (row) => {
    const date = new Date(Number(row.timestamp) * 1000);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  });

  const aggregate = Object.keys(grouped).map((key) => {
    const row = grouped[key];
    const last = row[row.length - 1];
    return {
      marketsTotalSupply: last.marketsTotalSupply,
      timestamp: last.timestamp,
    };
  });

  const line1 = aggregate.map((row) => ({
    x: new Date(Number(row.timestamp) * 1000),
    y: Number(ethers.utils.formatEther(row.marketsTotalSupply[0] || "0")),
  }));

  const line2 = aggregate.map((row) => ({
    x: new Date(Number(row.timestamp) * 1000),
    y: Number(ethers.utils.formatEther(row.marketsTotalSupply[1] || "0")),
  }));

  const line3 = aggregate.map((row) => ({
    x: new Date(Number(row.timestamp) * 1000),
    y: Number(ethers.utils.formatEther(row.marketsTotalSupply[2] || "0")),
  }));

  return [line1, line2, line3];
}

export default function useAssetGraphData() {
  const chainId = useChainId();
  return useSWR(["useAssetGraphData", chainId], fetcher);
}
