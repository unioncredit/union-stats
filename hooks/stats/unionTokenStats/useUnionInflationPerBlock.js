import { BigNumber, FixedNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useUserContract from "hooks/contracts/useUserContract";
import useUnionDecimals from "hooks/useUnionDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getUnionInflationPerBlock = async (_, decimals, comptroller, userContract) => {
  const totalStaked = await userContract.totalStaked();
  const totalFrozen = await userContract.totalFrozen();
  const effectiveTotalStake = totalStaked.sub(totalFrozen);
  const a = await comptroller.inflationPerBlock(effectiveTotalStake);
  return formatUnits(a, decimals);
};
export default function useUnionInflationPerBlock() {
  const readProvider = useReadProvider();
  const comptroller = useComptrollerContract(readProvider);
  const userContract = useUserContract(readProvider);
  const { data: decimals } = useUnionDecimals();
  const shouldFetch = !!comptroller && !!userContract && !!decimals;
  return useSWR(shouldFetch
      ? ["unionInflationPerBlock", decimals, comptroller, userContract]
      : null, getUnionInflationPerBlock);
}