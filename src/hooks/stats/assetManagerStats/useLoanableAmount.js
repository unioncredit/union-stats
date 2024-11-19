import useAssetContract from "hooks/contracts/useAssetContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getLoanableAmount = async (_, decimals, tokenAddress, assetContract) => {
  const loanableAmount = await assetContract.getLoanableAmount(tokenAddress);
  return formatUnits(loanableAmount, decimals);
};
export default function useLoanableAmount() {
  const readProvider = useReadProvider();
  const assetContract = useAssetContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!assetContract && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["loanableAmount", decimals, TOKENS[chainId].TOKEN, assetContract]
      : null,
    getLoanableAmount
  );
}
