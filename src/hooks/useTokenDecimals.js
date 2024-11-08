import useERC20Contract from "./contracts/useERC20Contract";
import useSWR from "swr";
import useReadProvider from "./useReadProvider";

const getDecimals = (tokenContract) => async (_) => {
  return tokenContract.decimals();
};
export default function useTokenDecimals() {
  const readProvider = useReadProvider();
  const tokenContract = useERC20Contract(readProvider);
  const shouldFetch = !!tokenContract;
  return useSWR(
    shouldFetch ? ["daiDecimals"] : null,
    getDecimals(tokenContract)
  );
}
