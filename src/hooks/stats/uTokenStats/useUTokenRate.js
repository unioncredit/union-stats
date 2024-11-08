import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getUTokenRate = async (_, uTokenContract, decimals) => {
  const uTokenRate = await uTokenContract.exchangeRateStored();
  return formatUnits(uTokenRate, decimals);
};
export default function useUTokenRate() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["uTokenRate", uTokenContract, 18] : null,
    getUTokenRate
  );
}
