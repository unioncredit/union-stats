import useAaveAdapterContract from "hooks/contracts/useAaveAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getDAIInAave = async (_, decimals, daiAddress, AaveAdapter) => {
  const daiInAave = await AaveAdapter.getSupplyView(daiAddress);
  return formatUnits(daiInAave, decimals);
};
export default function useDAIInAave() {
  const readProvider = useReadProvider();
  const AaveAdapter = useAaveAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!AaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["daiInAave", decimals, TOKENS[chainId].TOKEN, AaveAdapter]
      : null,
    getDAIInAave
  );
}
