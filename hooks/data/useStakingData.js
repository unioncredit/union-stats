import useSWR from "swr";
import { ethers } from "ethers";
import fetchStakers from "fetchers/fetchStakers";

async function fetchStakingData() {
  const data = await fetchStakers();
  const aggregated = Object.values(data).reduce(
    (acc, item) => {
      const lastest = acc[acc.length - 1];
      const formatted = ethers.utils.formatEther(item);
      return [...acc, lastest + Number(formatted)];
    },
    [0]
  );

  return aggregated;
}

export default function useStakingData() {
  return useSWR("useStakingData", fetchStakingData);
}
