import usePureTokenAdapterContract from "hooks/contracts/usePureTokenAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getDAIInPureAdapter = async (_, decimals, daiAddress, pureAdapter) => {
  const daiInPureAdapter = await pureAdapter.getSupplyView(daiAddress);
  return formatUnits(daiInPureAdapter, decimals);
};
export default function useDAIInPureAdapter() {
  const readProvider = useReadProvider();
  const pureAdapter = usePureTokenAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!pureAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["daiInPureAdapter", decimals, TOKENS[chainId].TOKEN, pureAdapter]
      : null,
    getDAIInPureAdapter
  );
}
