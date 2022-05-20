import useSWR from "swr";
import useUnionContract from "hooks/contracts/useUnionContract";
import useUnionDecimals from "hooks/useUnionDecimals";
import { formatUnits } from "@ethersproject/units";
import useReadProvider from "hooks/useReadProvider";

const getUnionTokenSupply = async (_, decimals, unionContract) => {
  const totalSupply = await unionContract.totalSupply();
  return formatUnits(totalSupply, decimals);
};

export default function useUnionTokenSupply() {
  const readProvider = useReadProvider();
  const unionContract = useUnionContract(readProvider);
  const { data: decimals } = useUnionDecimals();
  const shouldFetch = !!unionContract;
  return useSWR(
    shouldFetch ? ["unionTokenSupply", decimals, unionContract] : null,
    getUnionTokenSupply
  );
}
