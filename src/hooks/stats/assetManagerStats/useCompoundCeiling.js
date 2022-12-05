import useCompoundAdapterContract from "hooks/contracts/useCompoundAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getCompoundCeiling = async (_, decimals, daiAddress, compoundAdapter) => {
  const compoundCeiling = await compoundAdapter.ceilingMap(daiAddress);
  return formatUnits(compoundCeiling, decimals);
};
export default function useCompoundCeiling() {
  const readProvider = useReadProvider();
  const compoundAdapter = useCompoundAdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!compoundAdapter &&
    !!chainId &&
    !!TOKENS[chainId] &&
    !!TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["compoundCeiling", decimals, TOKENS[chainId].DAI, compoundAdapter]
      : null,
    getCompoundCeiling
  );
}
