import useUTokenContract from "hooks/contracts/useUTokenContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalBorrows = async (_, decimals, uTokenContract) => {
  const totalSupply = await uTokenContract.totalBorrows();
  return formatUnits(totalSupply, decimals);
};
export default function useTotalBorrows() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["totalBorrows", decimals, uTokenContract] : null, 
    getTotalBorrows);
}

