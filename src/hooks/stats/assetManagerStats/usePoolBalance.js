import useAssetContract from "hooks/contracts/useAssetContract";
import useTokenDecimals from "hooks/useTokenDecimals";
import useChainId from "hooks/useChainId";
import { formatUnits } from "@ethersproject/units";
import { TOKENS } from "constants/variables";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";

const getPoolBalance = async (_, decimals, tokenAddress, assetContract) => {
  const poolBalance = await assetContract.getPoolBalance(tokenAddress);
  return formatUnits(poolBalance, decimals);
};
export default function usePoolBalance() {
  const readProvider = useReadProvider();
  const assetContract = useAssetContract(readProvider);
  const { data: decimals } = useTokenDecimals();
  const chainId = useChainId();
  const shouldFetch =
    !!assetContract && chainId && TOKENS[chainId] && TOKENS[chainId].TOKEN;
  return useSWR(
    shouldFetch
      ? ["poolBalance", decimals, TOKENS[chainId].TOKEN, assetContract]
      : null,
    getPoolBalance
  );
}
