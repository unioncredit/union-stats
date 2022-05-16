import { Contract } from "@ethersproject/contracts";
import useUnionContract from "hooks/contracts/useUnionContract";
import useReadProvider from "hooks/useReadProvider";
import useSWR from "swr";

const getUnionPausedState = (unionContract) => async (_) => {
  return unionContract.whitelistEnabled();
};
export default function useUnionPausedState() {
  const readProvider = useReadProvider();
  const unionContract = useUnionContract(readProvider);
  const shouldFetch = !!unionContract;
  return useSWR(shouldFetch ? ["unionPausedState"] : null, getUnionPausedState(unionContract));
}