import useUserContract from "hooks/contracts/useUserContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalStaked = async (_, userContract, decimals) => {
  const totalStaked = await userContract.totalStaked();
  return formatUnits(totalStaked, decimals);
};
export default function useTotalStaked() {
  const readProvider = useReadProvider();
  const userContract = useUserContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const shouldFetch = !!userContract && !!decimals;
  return useSWR(
    shouldFetch ? ["totalStaked", userContract, decimals] : null,
    getTotalStaked
  );
}
