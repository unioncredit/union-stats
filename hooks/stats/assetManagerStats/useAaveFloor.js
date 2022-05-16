import useAaveAdapterContract from "hooks/contracts/useAaveAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getAaveFloor = (aaveAdapter) => async (_, decimals, daiAddress) => {
  const aaveFloor = await aaveAdapter.floorMap(daiAddress);
  return formatUnits(aaveFloor, decimals);
};
export default function useAaveFloor() {
  const readProvider = useReadProvider();
  const aaveAdapter = useAaveAdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch = !!aaveAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(shouldFetch ? ["aaveFloor", decimals, TOKENS[chainId].DAI] : null, getAaveFloor(aaveAdapter));
}