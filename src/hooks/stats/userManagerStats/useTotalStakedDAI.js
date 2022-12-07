import useUserContract from "hooks/contracts/useUserContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getTotalStakedDAI = async (_, userContract, decimals) => {
  const totalStaked = await userContract.totalStaked();
  return formatUnits(totalStaked, decimals);
};
export default function useTotalStakedDAI() {
  const readProvider = useReadProvider();
  const userContract = useUserContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const shouldFetch = !!userContract && !!decimals;
  return useSWR(
    shouldFetch ? ["totalStakedDAI", userContract, decimals] : null,
    getTotalStakedDAI
  );
}
