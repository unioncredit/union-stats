import { ethers } from "ethers";
import getLogs from "./getLogs";

const topicHash =
  "0xe1b17d743be0011d9bba06fe70f26f50edb5da84de0c4db5fcaf609549db7036";

type Borrow = {
  borrower: string;
  amount: any;
};

const zero = ethers.BigNumber.from("0");

export default async function getBorrows() {
  const json = await getLogs(topicHash);

  const data = json.data.items;

  const parsed: Borrow[] = data.map((row: any) => ({
    borrower: ethers.BigNumber.from(row.raw_log_topics[1]).toHexString(),
    amount: ethers.BigNumber.from(
      "0x" + row.raw_log_data.replace("0x", "").slice(0, 64)
    ),
  }));


  return parsed.reduce((acc: { [key: string]: any }, item: Borrow) => {
    const currentAmount = acc[item.borrower] || zero;
    return {
      ...acc,
      [item.borrower]: currentAmount.add(item.amount),
    };
  }, {});
}
