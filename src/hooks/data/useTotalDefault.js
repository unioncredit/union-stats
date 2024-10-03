import useSWR from "swr";
import { ethers } from "ethers";
import { config, fetchBorrowers, getBorrowersStatus } from "@unioncredit/data";
import useUTokenContract from "hooks/contracts/useUTokenContract";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "hooks/useChainId";
import { isChainV2 } from "util/chain";
import { BigNumber } from "@ethersproject/bignumber";

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
    ? Math.round(new Date().getTime() / 1000)
    : await getBlockNumber(provider);

  const overdueBorrowers = getBorrowersStatus(
    await fetchBorrowers(),
    overdueBlocks,
    currentBlock
  )
    .filter(b => BigNumber.from(b.totalBorrowed).gt(BigNumber.from(0)))
    .filter(b => b.isOverdue);

  const borrowAmounts = await Promise.all(overdueBorrowers.map(b => uToken.borrowBalanceView(b.account)));
  const totalDefaulted = borrowAmounts.reduce((acc, curr) => acc + Number(ethers.utils.formatEther(curr)), 0);

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
