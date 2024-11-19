import useUTokenContract from "hooks/contracts/useUTokenContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalRedeemable = async (_, decimals, uTokenContract) => {
  const totalSupply = await uTokenContract.totalRedeemable();
  return formatUnits(totalSupply, decimals);
};
export default function useTotalRedeemable() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["totalRedeemable", decimals, uTokenContract] : null,
    getTotalRedeemable
  );
}
