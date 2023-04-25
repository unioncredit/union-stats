import { BigNumber } from "@ethersproject/bignumber";
import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useUserContract from "hooks/contracts/useUserContract";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "../../useChainId";
import { isChainV2 } from "../../../util/chain";

const offsetPower = 18;
const offset = BigNumber.from(10).pow(offsetPower);
const getUnionPerDAIStaked = async (_, comptroller, userContract, chainId) => {
  const totalStaked = await userContract.totalStaked();
  const totalFrozen = await userContract.totalFrozen();
  const effectiveTotalStake = totalStaked.sub(totalFrozen);
  const ipb = isChainV2(chainId)
    ? await comptroller.inflationPerSecond(effectiveTotalStake)
    : await comptroller.inflationPerBlock(effectiveTotalStake);
  return formatUnits(ipb.mul(offset).div(effectiveTotalStake), offsetPower);
};
export default function useUnionPerDAIStaked() {
  const readProvider = useReadProvider();
  const comptroller = useComptrollerContract(readProvider);
  const userContract = useUserContract(readProvider);
  const chainId = useChainId();
  const shouldFetch = !!comptroller && !!userContract;
  return useSWR(
    shouldFetch
      ? ["unionPerDAIStaked", comptroller, userContract, chainId]
      : null,
    getUnionPerDAIStaked
  );
}
