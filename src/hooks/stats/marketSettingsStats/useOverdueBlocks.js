import useUTokenContract from "hooks/contracts/useUTokenContract";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getOverdueBlocks = async (_, uTokenContract) => {
  return uTokenContract.overdueBlocks();
};
export default function useOverdueBlocks() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["overdueBlocks", uTokenContract] : null, getOverdueBlocks);
}
