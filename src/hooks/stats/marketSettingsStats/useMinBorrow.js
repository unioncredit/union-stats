import useTokenDecimals from "hooks/useTokenDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";

const getMinBorrow = async (_, decimals, uTokenContract) => {
  const minBorrow = await uTokenContract.minBorrow();
  return Number(formatUnits(minBorrow, decimals));
};
export default function useMinBorrow() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["minBorrow", decimals, uTokenContract] : null,
    getMinBorrow
  );
}
