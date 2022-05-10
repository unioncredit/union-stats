import { ethers } from "ethers";
import getLogs from "./getLogs";

const topicHash =
  "0xcd300581542c5eab58e736a0b08b42cec829c4504d1c16af90f4630b27e30de3";

type Repay = {
  borrower: string;
  amount: any;
};

const zero = ethers.BigNumber.from("0");

export default async function getRepays() {
  const json = await getLogs(topicHash);

  const data = json.data.items;

  const parsed: Repay[] = data.map((row: any) => ({
    borrower: ethers.BigNumber.from(row.raw_log_topics[1]).toHexString(),
    amount: ethers.BigNumber.from(
      "0x" + row.raw_log_data.replace("0x", "").slice(0, 64)
    ),
  }));

  return parsed.reduce((acc: { [key: string]: any }, item: Repay) => {
    const currentAmount = acc[item.borrower] || zero;
    return {
      ...acc,
      [item.borrower]: currentAmount.add(item.amount),
    };
  }, {});
}
