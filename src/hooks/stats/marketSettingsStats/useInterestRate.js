import useUTokenContract from "hooks/contracts/useUTokenContract";
import { formatUnits } from "@ethersproject/units";
import { BLOCKS_PER_YEAR, SECONDS_PER_YEAR } from "constants/variables";
import useSWR from "swr";
import useChainId from "hooks/useChainId";
import useReadProvider from "hooks/useReadProvider";
import { isChainV2 } from "../../../util/chain";

const getInterestRate = async (_, chainId, uTokenContract, decimals) => {
  const borrowRatePerBlock = isChainV2(chainId)
    ? await uTokenContract.borrowRatePerSecond()
    : await uTokenContract.borrowRatePerBlock();
  return formatUnits(
    borrowRatePerBlock.mul(
      isChainV2(chainId) ? SECONDS_PER_YEAR : BLOCKS_PER_YEAR[chainId]
    ),
    decimals
  );
};
export default function useInterestRate() {
  const readProvider = useReadProvider();
  const uTokenContract = useUTokenContract(readProvider);
  const chainId = useChainId();
  const shouldFetch = !!uTokenContract && !!chainId;
  return useSWR(
    shouldFetch ? ["interestRate", chainId, uTokenContract, 18] : null,
    getInterestRate
  );
}
