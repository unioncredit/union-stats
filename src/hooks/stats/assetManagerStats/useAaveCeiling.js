import useAaveAdapterContract from "hooks/contracts/useAaveAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getAaveCeiling = async (_, decimals, tokenAddress, aaveAdapter) => {
  const aaveCeiling = await aaveAdapter.ceilingMap(tokenAddress);
  return formatUnits(aaveCeiling, decimals);
};
export default function useAaveCeiling() {
  const readProvider = useReadProvider();
  const aaveAdapter = useAaveAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!aaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["aaveCeiling", decimals, TOKENS[chainId].TOKEN, aaveAdapter]
      : null,
    getAaveCeiling
  );
}
