import { Contract } from "@ethersproject/contracts";
import useGovernanceContract from "hooks/contracts/useGovernanceContract";
import useReadProvider from "hooks/useReadProvider";
import useSWR from "swr";

const getVotingPeriod = async (_, governanceContract) => {
  return governanceContract.votingPeriod();
};
export default function useVotingPeriod() {
  const readProvider = useReadProvider();
  const contract = useGovernanceContract(readProvider);
  const shouldFetch = Boolean(contract);
  return useSWR(shouldFetch ? ["votingPeriod", contract] : null, getVotingPeriod);
}