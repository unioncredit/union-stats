import useAaveAdapterContract from "hooks/contracts/useAaveAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getAaveCeiling = async (_, decimals, daiAddress, aaveAdapter) => {
  const aaveCeiling = await aaveAdapter.ceilingMap(daiAddress);
  return formatUnits(aaveCeiling, decimals);
};
export default function useAaveCeiling() {
  const readProvider = useReadProvider();
  const aaveAdapter = useAaveAdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!aaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["aaveCeiling", decimals, TOKENS[chainId].DAI, aaveAdapter]
      : null,
    getAaveCeiling
  );
}
