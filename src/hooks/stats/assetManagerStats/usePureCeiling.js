import usePureTokenAdapterContract from "hooks/contracts/usePureTokenAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getPureCeiling = async (_, decimals, tokenAddress, pureAdapter) => {
  const pureCeiling = await pureAdapter.ceilingMap(tokenAddress);
  return formatUnits(pureCeiling, decimals);
};
export default function usePureCeiling() {
  const readProvider = useReadProvider();
  const pureAdapter = usePureTokenAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!pureAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["pureCeiling", decimals, TOKENS[chainId].TOKEN, pureAdapter]
      : null,
    getPureCeiling
  );
}
