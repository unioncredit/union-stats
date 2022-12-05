import usePureTokenAdapterContract from "hooks/contracts/usePureTokenAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
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
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!pureAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["daiInPureAdapter", decimals, TOKENS[chainId].DAI, pureAdapter]
      : null,
    getDAIInPureAdapter
  );
}
