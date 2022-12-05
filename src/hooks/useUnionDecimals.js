import useUnionContract from "./contracts/useUnionContract";
import useSWR from "swr";
import useReadProvider from "./useReadProvider";

const getDecimals = (unionContract) => async (_) => {
  return unionContract.decimals();
};
export default function useUnionDecimals() {
  const readProvider = useReadProvider();
  const unionContract = useUnionContract(readProvider);
  const shouldFetch = !!unionContract;
  return useSWR(
    shouldFetch ? ["unionDecimals"] : null,
    getDecimals(unionContract)
  );
}
