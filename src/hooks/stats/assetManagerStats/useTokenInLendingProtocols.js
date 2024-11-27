import useAssetContract from "hooks/contracts/useAssetContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getDAIInLendingProtocols = async (
  _,
  decimals,
  daiAddress,
  assetContract
) => {
  const daiInLendingProtocols = await assetContract.totalSupplyView(daiAddress);
  return formatUnits(daiInLendingProtocols, decimals);
};
export default function useDAIInLendingProtocols() {
  const readProvider = useReadProvider();
  const assetContract = useAssetContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!assetContract && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["daiInLendingProtocols", decimals, TOKENS[chainId].DAI, assetContract]
      : null,
    getDAIInLendingProtocols
  );
}