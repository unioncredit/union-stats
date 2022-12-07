import { ethers } from "ethers";
import getLogs from "./getLogs";

const topicHash =
  "0xaf14da4c9c7eeb91ef462950405340d31988005c789d867d3a1394f082105e89";

const zero = ethers.BigNumber.from("0");
export default async function getUnstakers() {
  const json = await getLogs(topicHash);
  const data = json.data.items;
  const parsed = data.map((item) => {
    const unstaker = ethers.BigNumber.from(
      item.raw_log_topics[1]
    ).toHexString();
    const amount = ethers.BigNumber.from(item.raw_log_data);
    return { amount, unstaker };
  });
  return parsed.reduce((acc, staker) => {
    const currentAmount = acc[staker.unstaker] || zero;
    return Object.assign(Object.assign({}, acc), {
      [staker.unstaker]: currentAmount.add(staker.amount),
    });
  }, {});
}
