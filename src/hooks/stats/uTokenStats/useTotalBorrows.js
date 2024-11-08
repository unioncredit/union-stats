import useUTokenContract from "hooks/contracts/useUTokenContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalBorrows = async (_, decimals, uTokenContract) => {
  const totalSupply = await uTokenContract.totalBorrows();
  return formatUnits(totalSupply, decimals);
};
export default function useTotalBorrows() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["totalBorrows", decimals, uTokenContract] : null,
    getTotalBorrows
  );
}
