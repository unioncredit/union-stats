import { ethers } from "ethers";
import getLogs from "./fetchLogs";

const topicHash =
  "0xe1b17d743be0011d9bba06fe70f26f50edb5da84de0c4db5fcaf609549db7036";

const zero = ethers.BigNumber.from("0");

export default async function getBorrows() {
  const json = await getLogs(topicHash);

  const data = json.data.items;

  const parsed = data.map((item) => {
    const borrower = ethers.BigNumber.from(
      item.raw_log_topics[1]
    ).toHexString();
    const amount = ethers.BigNumber.from(item.raw_log_data);

    return { amount, borrower };
  });

  return parsed.reduce((acc, borrower) => {
    const currentAmount = acc[borrower.borrower] || zero;
    return {
      ...acc,
      [borrower.borrower]: currentAmount.add(borrower.amount),
    };
  }, {});
}
