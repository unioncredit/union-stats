import useSWR from "swr";
import { ethers } from "ethers";
import { config, fetchBorrowers, getBorrowersStatus } from "@unioncredit/data";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "hooks/useChainId";

async function getBlockNumber(library) {
  const currentBlockNumber = await library.getBlockNumber();
  const block = await library.getBlock(currentBlockNumber);
  const resp = await library.send("eth_getTransactionReceipt", [
    block.transactions[0],
  ]);

  // Supports ARBITRUM which returns L1 blockNumber as `l1BlockNumber`
  return resp?.l1BlockNumber || resp?.blockNumber;
}

async function fetcher(_, chainId, uToken, provider) {
  config.set("chainId", chainId, provider, uToken);
  const overdueBlocks = await uToken.overdueBlocks();
  const currentBlock = await getBlockNumber(provider);
  let borrowers = await fetchBorrowers();
  borrowers = getBorrowersStatus(borrowers, overdueBlocks, currentBlock);
  debugger;
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
  const shouldFetch = uToken && provider && chainId;
  return useSWR(
    shouldFetch ? ["TotalDefault", chainId, uToken, provider] : null,
    fetcher
  );
}
