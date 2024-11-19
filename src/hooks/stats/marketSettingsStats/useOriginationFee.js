import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getOriginationFee = async (_, uTokenContract, decimals) => {
  const originationFee = await uTokenContract.originationFee();
  return formatUnits(originationFee, decimals);
};
export default function useOriginationFee() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["originationFee", uTokenContract, 18] : null,
    getOriginationFee
  );
}
