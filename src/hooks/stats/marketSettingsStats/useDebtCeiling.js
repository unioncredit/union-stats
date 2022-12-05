import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";

const getDebtCeiling = async (_, decimals, uTokenContract) => {
  const debtCeiling = await uTokenContract.debtCeiling();
  return formatUnits(debtCeiling, decimals);
};
export default function useDebtCeiling() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["debtCeiling", decimals, uTokenContract] : null,
    getDebtCeiling
  );
}
