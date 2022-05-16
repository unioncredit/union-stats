import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";

const getDebtCeiling = (uTokenContract) => async (_, decimals) => {
  const debtCeiling = await uTokenContract.debtCeiling();
  return formatUnits(debtCeiling, decimals);
};
export default function useDebtCeiling() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["debtCeiling", decimals] : null, getDebtCeiling(uTokenContract));
}
