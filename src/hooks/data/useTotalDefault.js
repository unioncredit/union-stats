import useSWR from "swr";
import { ethers } from "ethers";
import { config, fetchBorrowers, getBorrowersStatus } from "@unioncredit/data";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "hooks/useChainId";
import { isChainV2 } from "util/chain";

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

  const overdueBlocks = isChainV2(chainId)
    ? await uToken.overdueTime()
    : await uToken.overdueBlocks();

  const currentBlock = isChainV2(chainId)
    ? new Date().getTime() / 1000
    : await getBlockNumber(provider);

  const borrowers = getBorrowersStatus(
    await fetchBorrowers(),
    overdueBlocks,
    currentBlock
  );

  const totalDefaulted = borrowers.reduce(
    (acc, borrower) =>
      borrower.isOverdue
        ? acc + Number(ethers.utils.formatEther(borrower.totalBorrowed))
        : acc,
    0
  );

  return totalDefaulted;
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
