import usePureTokenAdapterContract from "hooks/contracts/usePureTokenAdapterContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getPureCeiling = (pureAdapter) => async (_, decimals, daiAddress) => {
  const pureCeiling = await pureAdapter.ceilingMap(daiAddress);
  return formatUnits(pureCeiling, decimals);
};
export default function usePureCeiling() {
  const readProvider = useReadProvider();
  const pureAdapter = usePureTokenAdapterContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch = !!pureAdapter && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(shouldFetch ? ["pureCeiling", decimals, TOKENS[chainId].DAI] : null, getPureCeiling(pureAdapter));
}

