import useAaveV3AdapterContract from "hooks/contracts/useAaveV3AdapterContract";
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

export default function useDAIInAaveV3() {
  const readProvider = useReadProvider();
  const AaveAdapter = useAaveV3AdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!AaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["daiInAaveV3", decimals, TOKENS[chainId].TOKEN, AaveAdapter]
      : null,
    getDAIInAave
  );
}
