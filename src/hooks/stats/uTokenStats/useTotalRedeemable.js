import useUTokenContract from "hooks/contracts/useUTokenContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalRedeemable = async (_, decimals, uTokenContract) => {
  const totalSupply = await uTokenContract.totalRedeemable();
  return formatUnits(totalSupply, decimals);
};
export default function useTotalRedeemable() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["totalRedeemable", decimals,
    uTokenContract] : null, getTotalRedeemable);
}