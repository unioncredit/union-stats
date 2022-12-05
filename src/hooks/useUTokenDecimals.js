import useUTokenContract from "./contracts/useUTokenContract";
import useSWR from "swr";
import useReadProvider from "./useReadProvider";

const getDecimals = (uTokenContract) => async (_) => {
  return uTokenContract.decimals();
};
export default function useUTokenDecimals() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["uTokenDecimals"] : null,
    getDecimals(uTokenContract)
  );
}
