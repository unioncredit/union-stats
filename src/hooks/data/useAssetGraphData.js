import useSWR from "swr";
import { ethers } from "ethers";
import groupBy from "lodash/groupBy";
import { fetchDeposits } from "@unioncredit/data";
import useChainId from "hooks/useChainId";

const startTimePoint = Number(new Date().getTime()) / 1000 - 3600 * 24 * 365;
async function fetcher() {
  // TODO:
  // config.set("chainId", chainId);
  const result = await fetchDeposits();

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
      return {
        marketsTotalSupply: last.marketsTotalSupply,
        timestamp: last.timestamp,
      };
    })
    .sort((a, b) => a.timestamp - b.timestamp);

  return [
    getDataForIndex(aggregate, 0),
    getDataForIndex(aggregate, 1),
    getDataForIndex(aggregate, 2),
  ];
}

const getDataForIndex = (data, index) => {
  return data.map((row) => {
    return {
      x: new Date(row.timestamp * 1000).toDateString(),
      y: Number(ethers.utils.formatEther(row.marketsTotalSupply[index] || "0")),
    };
  });
};

export default function useAssetGraphData() {
  const chainId = useChainId();
  return useSWR(["useAssetGraphData", chainId], fetcher);
}
