import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getReserveFactor = async (_, uTokenContract) => {
  const reserveFactor = await uTokenContract.reserveFactorMantissa();
  const decimals = BigNumber.from(18);
  return formatUnits(reserveFactor, decimals);
};
export default function useReserveFactor() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["reserveFactor", uTokenContract] : null,
    getReserveFactor
  );
}
