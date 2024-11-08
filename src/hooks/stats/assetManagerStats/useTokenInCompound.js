import useCompoundAdapterContract from "hooks/contracts/useCompoundAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getDAIInCompound = async (_, decimals, daiAddress, compoundAdapter) => {
  const daiInCompound = await compoundAdapter.getSupplyView(daiAddress);
  return formatUnits(daiInCompound, decimals);
};
export default function useDAIInCompound() {
  const readProvider = useReadProvider();
  const compoundAdapter = useCompoundAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!compoundAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["daiInCompound", decimals, TOKENS[chainId].DAI, compoundAdapter]
      : null,
    getDAIInCompound
  );
}
