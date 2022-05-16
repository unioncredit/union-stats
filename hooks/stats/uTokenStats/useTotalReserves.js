import useUTokenContract from "hooks/contracts/useUTokenContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalReserves = (uTokenContract) => async (_, decimals) => {
  const totalSupply = await uTokenContract.totalReserves();
  return formatUnits(totalSupply, decimals);
};
export default function useTotalReserves() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["totalReserves", decimals] : null, getTotalReserves(uTokenContract));
}
