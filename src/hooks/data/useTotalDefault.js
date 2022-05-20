import useSWR from "swr";
import { ethers } from "ethers";
import { config, fetchBorrowers, getBorrowersStatus } from "@unioncredit/data";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "hooks/useChainId";

async function fetcher(_, chainId, uToken, provider) {
  config.set("chainId", chainId, provider, uToken);
  const overdueBlocks = await uToken.overdueBlocks();
  const currentBlock = await provider.getBlockNumber();
  let borrowers = await fetchBorrowers();
  borrowers = getBorrowersStatus(borrowers, overdueBlocks, currentBlock);

  return borrowers.reduce(
    (acc, borrower) =>
      borrower.isOverdue
        ? acc + Number(ethers.utils.formatEther(borrower.totalBorrowed))
        : acc,
    0
  );
}

export default function useTotalDefault() {
  const chainId = useChainId();
  const provider = useReadProvider();
  const uToken = useUTokenContract(provider);
  return useSWR(["TotalDefault", chainId, uToken, provider], fetcher);
}
