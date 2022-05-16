import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";

const getMinBorrow = (uTokenContract) => async (_, decimals) => {
  const minBorrow = await uTokenContract.minBorrow();
  return Number(formatUnits(minBorrow, decimals));
};
export default function useMinBorrow() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["minBorrow", decimals] : null, getMinBorrow(uTokenContract));
}

