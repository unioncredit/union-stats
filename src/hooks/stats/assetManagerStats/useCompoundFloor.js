import useCompoundAdapterContract from "hooks/contracts/useCompoundAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getCompoundFloor = async (_, decimals, tokenAddress, compoundAdapter) => {
  const compoundFloor = await compoundAdapter.floorMap(tokenAddress);
  return formatUnits(compoundFloor, decimals);
};
export default function useCompoundFloor() {
  const readProvider = useReadProvider();
  const compoundAdapter = useCompoundAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!compoundAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["compoundFloor", decimals, TOKENS[chainId].TOKEN, compoundAdapter]
      : null,
    getCompoundFloor
  );
}
