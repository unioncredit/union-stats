import useUTokenContract from "hooks/contracts/useUTokenContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalReserves = async (_, decimals, uTokenContract) => {
  const totalSupply = await uTokenContract.totalReserves();
  return formatUnits(totalSupply, decimals);
};
export default function useTotalReserves() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["totalReserves", decimals, uTokenContract] : null,
    getTotalReserves
  );
}
