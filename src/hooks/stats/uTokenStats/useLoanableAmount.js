import useAssetContract from "hooks/contracts/useAssetContract";
import useDAIDecimals from "hooks/useDAIDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getLoanableAmount = async (_, decimals, daiAddress, assetContract) => {
  const loanableAmount = await assetContract.getLoanableAmount(daiAddress);
  return formatUnits(loanableAmount, decimals);
};
export default function useLoanableAmount() {
  const readProvider = useReadProvider();
  const assetContract = useAssetContract(readProvider);
  const { data: decimals } = useDAIDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!assetContract && chainId && TOKENS[chainId] && TOKENS[chainId].DAI;
  return useSWR(
    shouldFetch
      ? ["loanableAmount", decimals, TOKENS[chainId].DAI, assetContract]
      : null,
    getLoanableAmount
  );
}
