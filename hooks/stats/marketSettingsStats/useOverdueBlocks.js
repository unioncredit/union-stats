import useUTokenContract from "hooks/contracts/useUTokenContract";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getOverdueBlocks = (uTokenContract) => async (_) => {
  return uTokenContract.overdueBlocks();
};
export default function useOverdueBlocks() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["overdueBlocks"] : null, getOverdueBlocks(uTokenContract));
}
