import useAaveV3AdapterContract from "hooks/contracts/useAaveV3AdapterContract";
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
export default function useAaveV3Ceiling() {
  const readProvider = useReadProvider();
  const aaveAdapter = useAaveV3AdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch = !!aaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(shouldFetch ? ["aaveV3Ceiling", decimals, TOKENS[chainId].DAI, aaveAdapter] : null, getAaveCeiling)
}
