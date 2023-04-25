import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useUserContract from "hooks/contracts/useUserContract";
import useUnionDecimals from "hooks/useUnionDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "../../useChainId";
import { isChainV2 } from "../../../util/chain";

const getUnionInflationPerBlock = async (
  _,
  decimals,
  comptroller,
  userContract,
  chainId
) => {
  const totalStaked = await userContract.totalStaked();
  const totalFrozen = await userContract.totalFrozen();
  const effectiveTotalStake = totalStaked.sub(totalFrozen);
  const a = isChainV2(chainId)
    ? await comptroller.inflationPerSecond(effectiveTotalStake)
    : await comptroller.inflationPerBlock(effectiveTotalStake);
  return formatUnits(a, decimals);
};
export default function useUnionInflationPerBlock() {
  const readProvider = useReadProvider();
  const comptroller = useComptrollerContract(readProvider);
  const userContract = useUserContract(readProvider);
  const chainId = useChainId();
  const { data: decimals } = useUnionDecimals();
  const shouldFetch = !!comptroller && !!userContract && !!decimals;
  return useSWR(
    shouldFetch
      ? ["unionInflationPerBlock", decimals, comptroller, userContract, chainId]
      : null,
    getUnionInflationPerBlock
  );
}
