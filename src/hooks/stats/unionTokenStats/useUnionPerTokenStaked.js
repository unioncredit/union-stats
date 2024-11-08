import { BigNumber } from "@ethersproject/bignumber";
import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useUserContract from "hooks/contracts/useUserContract";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "../../useChainId";
import { isChainV2 } from "../../../util/chain";
import useTokenDecimals from "hooks/useTokenDecimals";

const getUnionPerTokenStaked = async (
  _,
  comptroller,
  userContract,
  chainId,
  decimals
) => {
  const offset = BigNumber.from(10).pow(decimals);
  const totalStaked = await userContract.totalStaked();
  const totalFrozen = await userContract.totalFrozen();
  const effectiveTotalStake = totalStaked.sub(totalFrozen);
  const ipb = isChainV2(chainId)
    ? await comptroller.inflationPerSecond(effectiveTotalStake)
    : await comptroller.inflationPerBlock(effectiveTotalStake);
  return formatUnits(ipb.mul(offset).div(effectiveTotalStake), 18);
};
export default function useUnionPerTokenStaked() {
  const readProvider = useReadProvider();
  const comptroller = useComptrollerContract(readProvider);
  const userContract = useUserContract(readProvider);
  const chainId = useChainId();
  const { data: decimals } = useTokenDecimals();
  const shouldFetch = !!comptroller && !!userContract;
  return useSWR(
    shouldFetch
      ? ["unionPerTokenStaked", comptroller, userContract, chainId, decimals]
      : null,
    getUnionPerTokenStaked
  );
}
