import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getUTokenRate = async (_, uTokenContract) => {
  const uTokenRate = await uTokenContract.exchangeRateStored();
  const decimals = BigNumber.from(18);
  return formatUnits(uTokenRate, decimals);
};
export default function useUTokenRate() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(shouldFetch ? ["uTokenRate", uTokenContract
    ] : null, getUTokenRate);
}
