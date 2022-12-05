import { BigNumber } from "@ethersproject/bignumber";
import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useUserContract from "hooks/contracts/useUserContract";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const offsetPower = 18;
const offset = BigNumber.from(10).pow(offsetPower);
const getUnionPerDAIStaked = async (_, comptroller, userContract) => {
  const totalStaked = await userContract.totalStaked();
  const totalFrozen = await userContract.totalFrozen();
  const effectiveTotalStake = totalStaked.sub(totalFrozen);
  const ipb = await comptroller.inflationPerBlock(effectiveTotalStake);
  return formatUnits(ipb.mul(offset).div(effectiveTotalStake), offsetPower);
};
export default function useUnionPerDAIStaked() {
  const readProvider = useReadProvider();
  const comptroller = useComptrollerContract(readProvider);
  const userContract = useUserContract(readProvider);
  const shouldFetch = !!comptroller && !!userContract;
  return useSWR(
    shouldFetch ? ["unionPerDAIStaked", comptroller, userContract] : null,
    getUnionPerDAIStaked
  );
}
