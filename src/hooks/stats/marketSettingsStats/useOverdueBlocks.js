import useUTokenContract from "hooks/contracts/useUTokenContract";
import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "../../useChainId";
import { isChainV2 } from "../../../util/chain";

const getOverdueBlocks = async (_, uTokenContract, chainId) => {
  return isChainV2(chainId)
    ? uTokenContract.overdueTime()
    : uTokenContract.overdueBlocks();
};
export default function useOverdueBlocks() {
  const readProvider = useReadProvider();
  const chainId = useChainId();
  const uTokenContract = useUTokenContract(readProvider);
  const shouldFetch = !!uTokenContract;
  return useSWR(
    shouldFetch ? ["overdueBlocks", uTokenContract, chainId] : null,
    getOverdueBlocks
  );
}
