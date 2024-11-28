import useSWR from "swr";
import { ethers } from "ethers";
import groupBy from "lodash/groupBy";
import { config, fetchDeposits } from "@unioncredit/data";
import useChainId from "hooks/useChainId";
import useTokenDecimals from "../useTokenDecimals";

const startTimePoint = Number(new Date().getTime()) / 1000 - 3600 * 24 * 365;
async function fetcher(_, chainId, decimals) {
  config.set("chainId", chainId);
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
    getDataForIndex(aggregate, 0, decimals),
    getDataForIndex(aggregate, 1, decimals),
    getDataForIndex(aggregate, 2, decimals),
  ];
}

const getDataForIndex = (data, index, decimals) => {
  return data.map((row) => {
    return {
      x: new Date(row.timestamp * 1000).toDateString(),
      y: Number(ethers.utils.formatUnits(row.marketsTotalSupply[index] || "0", decimals)),
    };
  });
};

export default function useAssetGraphData() {
  const chainId = useChainId();
  const { data: decimals } = useTokenDecimals();

  return useSWR(["useAssetGraphData", chainId, decimals], fetcher);
}
