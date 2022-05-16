import { Contract } from "@ethersproject/contracts";
import useTimelockContract from "hooks/contracts/useTimelockContract";
import useReadProvider from "hooks/useReadProvider";
import useSWR from "swr";

const getTimelock = async (_, timelockContract) => {
  return timelockContract.getMinDelay();
};
export default function useTimelock() {
  const readProvider = useReadProvider();
  const contract = useTimelockContract(readProvider);
  const shouldFetch = Boolean(contract);
  return useSWR(shouldFetch ? ["timelock", contract] : null, getTimelock);
}
