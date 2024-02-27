import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useUserContract from "hooks/contracts/useUserContract";
import useReadProvider from "hooks/useReadProvider";

const getMaxStake = async (_, decimals, userManagerContract) => {
  const maxStake = await userManagerContract.maxStakeAmount();
  return formatUnits(maxStake, decimals);
};
export default function useMaxStake() {
  const readProvider = useReadProvider();
  const userManagerContract = useUserContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!userManagerContract;
  return useSWR(
    shouldFetch ? ["maxStake", decimals, userManagerContract] : null,
    getMaxStake
  );
}
