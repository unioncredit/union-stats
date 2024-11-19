import useSWR from "swr";
import useChainId from "hooks/useChainId";
import useTokenDecimals from "hooks/useTokenDecimals";
import { formatUnits } from "@ethersproject/units";
import useAaveAdapterContract from "hooks/contracts/useAaveAdapterContract";
import { TOKENS } from "constants/variables";
import useReadProvider from "hooks/useReadProvider";

const getAaveFloor = async (_, decimals, tokenAddress, aaveAdapter) => {
  const aaveFloor = await aaveAdapter.floorMap(tokenAddress);
  return formatUnits(aaveFloor, decimals);
};

export default function useAaveFloor() {
  const readProvider = useReadProvider();
  const aaveAdapter = useAaveAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!aaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["aaveFloor", decimals, TOKENS[chainId].TOKEN, aaveAdapter]
      : null,
    getAaveFloor
  );
}
