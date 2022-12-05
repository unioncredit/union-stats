import useAaveAdapterContract from "hooks/contracts/useAaveAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
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
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!AaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["daiInAave", decimals, TOKENS[chainId].DAI, AaveAdapter]
      : null,
    getDAIInAave
  );
}
