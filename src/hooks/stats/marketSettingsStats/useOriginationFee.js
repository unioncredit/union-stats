import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getOriginationFee = async (_, uTokenContract) => {
  const originationFee = await uTokenContract.originationFee();
  const decimals = BigNumber.from(18);
  return formatUnits(originationFee, decimals);
};
export default function useOriginationFee() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["originationFee", uTokenContract] : null,
    getOriginationFee
  );
}
