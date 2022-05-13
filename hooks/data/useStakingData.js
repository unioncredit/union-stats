import useSWR from "swr";
import fetchStakersGraphData from "fetchers/fetchStakersGraphData";

export default function useStakingData() {
  return useSWR("useStakingData", fetchStakersGraphData);
}
