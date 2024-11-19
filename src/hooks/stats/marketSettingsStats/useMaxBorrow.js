import useTokenDecimals from "hooks/useTokenDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";

const getMaxBorrow = async (_, decimals, uTokenContract) => {
  const maxBorrow = await uTokenContract.maxBorrow();
  return formatUnits(maxBorrow, decimals);
};
export default function useMaxBorrow() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["maxBorrow", decimals, uTokenContract] : null,
    getMaxBorrow
  );
}
