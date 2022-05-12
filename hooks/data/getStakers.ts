import { ethers } from "ethers";
import getLogs from "./getLogs";

const topicHash =
  "0x3dbdcfd4c1f2e08931aae3d544e149a1e643143f5234d166fe3debb783388495";

type Staker = {
  staker: string;
  amount: any;
};

const zero = ethers.BigNumber.from("0");

export default async function getStakers() {
  const json = await getLogs(topicHash);

  const data = json.data.items;

  const parsed: Staker[] = data.map((item: any) => {
    const staker = ethers.BigNumber.from(item.raw_log_topics[1]).toHexString();
    const amount = ethers.BigNumber.from(item.raw_log_data);

    return { amount, staker };
  });

  return parsed.reduce((acc, staker) => {
    const currentAmount = acc[staker.staker] || zero;
    return { ...acc, [staker.staker]: currentAmount.add(staker.amount) };
  }, {});
}
