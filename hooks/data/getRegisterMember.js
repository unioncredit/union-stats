import { ethers } from "ethers";
import getLogs from "./getLogs";

const topicHash =
  "0x9d20d3ae19788f508f4eab7f2347e8be09a77d3394e12b3f4ebb15f63c85b37a";

export default async function getRegisters() {
  const json = await getLogs(topicHash);

  const data = json.data.items;

  return data.map((row: any) =>
    ethers.BigNumber.from(row.raw_log_topics[2]).toHexString()
  );
}
