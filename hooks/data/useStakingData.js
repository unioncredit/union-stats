import useSWR from "swr";
import fetchStakers from "fetchers/fetchStakers";

async function fetchStakingData() {
  return await fetchStakers();
}

export default function useStakingData() {
  return useSWR("useStakingData", fetchStakingData);
}
