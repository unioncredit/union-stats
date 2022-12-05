import useSWR from "swr";
import useChainId from "hooks/useChainId";
import useDAIDecimals from "hooks/useDAIDecimals";
import { formatUnits } from "@ethersproject/units";
import useAaveV3AdapterContract from "hooks/contracts/useAaveV3AdapterContract";
import { TOKENS } from "constants/variables";
import useReadProvider from "hooks/useReadProvider";

const getAaveFloor = async (_, decimals, daiAddress, aaveAdapter) => {
  const aaveFloor = await aaveAdapter.floorMap(daiAddress);
  return formatUnits(aaveFloor, decimals);
};

export default function useAaveV3Floor() {
  const readProvider = useReadProvider();
  const aaveAdapter = useAaveV3AdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!aaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["aaveV3Floor", decimals, TOKENS[chainId].DAI, aaveAdapter]
      : null,
    getAaveFloor
  );
}
