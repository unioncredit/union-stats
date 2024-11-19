import usePureTokenAdapterContract from "hooks/contracts/usePureTokenAdapterContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getPureFloor = async (_, decimals, tokenAddress, pureAdapter) => {
  const pureFloor = await pureAdapter.floorMap(tokenAddress);
  return formatUnits(pureFloor, decimals);
};
export default function usePureFloor() {
  const readProvider = useReadProvider();
  const pureAdapter = usePureTokenAdapterContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!pureAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["pureFloor", decimals, TOKENS[chainId].TOKEN, pureAdapter]
      : null,
    getPureFloor
  );
}
