import useUnionContract from "hooks/contracts/useUnionContract";
import useUnionDecimals from "hooks/useUnionDecimals";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getUnionTokenSupply = (unionContract) => async (_, decimals) => {
  const totalSupply = await unionContract.totalSupply();
  return formatUnits(totalSupply, decimals);
};
export default function useUnionTokenSupply() {
  const readProvider = useReadProvider();
  const unionContract = useUnionContract(readProvider);
  const { data: decimals } = useUnionDecimals();
  const shouldFetch = !!unionContract;
  return useSWR(shouldFetch ? ["unionTokenSupply", decimals] : null, getUnionTokenSupply(unionContract));
}
