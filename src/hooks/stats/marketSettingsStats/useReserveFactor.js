import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getReserveFactor = async (_, uTokenContract, decimals) => {
  const reserveFactor = await uTokenContract.reserveFactorMantissa();
  return formatUnits(reserveFactor, decimals);
};
export default function useReserveFactor() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["reserveFactor", uTokenContract, 18] : null,
    getReserveFactor
  );
}
