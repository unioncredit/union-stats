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

  const addresses = [
    "0x5c779ddb4dec61f6f400fde360cf143718e245be",
    "0x1d218714ffda45c9ed9e8719fcbacac0b318fd21",
    "0x1007a39088c22a4dfe54032f08fc47a7303603df",
    "0x9d0cfb6f23e51748c46f252e5a2fe5e36d54a178",
    "0x0190fbda3a92492c314d74219ed1d367bee95c15",
    "0x4a52988a5026500f9fc7263584037ea77e394053",
    "0x07827e3e217906b48f6c71118e21bcbaec18ed0f",
    "0x5ccf74f0d994b69ccc8b42adefc90de041eed42c",
    "0x020991a88fbb1413feec80992f12c7c30404ebfb",
    "0x0c64f062a4ece018578b15238ee9e9130c2b58b6",
    "0x06b5d3fe9296dd12017a24418e4198acefd62fe8",
    "0x4079848ce910784f50fd53f4e54b380fb707b826",
    "0x0ebd0b7ec8f4a1aed7fe1f4c5658f11f2aaf68b6",
    "0x8149dc18d39fdba137e43c871e7801e7cf566d41",
    "0x2e86c24ec294ff9e50440bd871f5308e35901779",
  ];
  let array = [];
  for (let i = 0; i < borrowers.length; i++) {
    const borrower = borrowers[i];
    if (addresses.indexOf(borrower.account) > -1) {
      array.push(borrower);
    }
  }
  console.log({ array });

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
