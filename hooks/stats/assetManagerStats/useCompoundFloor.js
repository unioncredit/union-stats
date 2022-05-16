import useCompoundAdapterContract from "hooks/contracts/useCompoundAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getCompoundFloor = (compoundAdapter) => async (_, decimals, daiAddress) => {
  const compoundFloor = await compoundAdapter.floorMap(daiAddress);
  return formatUnits(compoundFloor, decimals);
};
export default function useCompoundFloor() {
  const readProvider = useReadProvider();
  const compoundAdapter = useCompoundAdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch = !!compoundAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(shouldFetch ? ["compoundFloor", decimals, TOKENS[chainId].DAI] : null, getCompoundFloor(compoundAdapter));
}
