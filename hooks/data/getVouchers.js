import { ethers } from "ethers";
import getLogs from "./getLogs";

const topicHash =
  "0x6726f80fa910f3db24051175cda8d3c2af86b536cc2b137c1dbbf83136fe7c5c";

export default async function getVouchers() {
  const json = await getLogs(topicHash);
  const data = json.data.items;
  const parsed = data.map((item) => {
    const staker = ethers.BigNumber.from(item.raw_log_topics[1]).toHexString();
    const borrower = ethers.BigNumber.from(item.raw_log_topics[2]).toHexString();
    const trustAmount = ethers.BigNumber.from(item.raw_log_data);
    return { trustAmount, staker, borrower };
  });
  const grouped = parsed.reduce((acc, item) => {
    const borrowers = acc[item.borrower] || [];
    return Object.assign(Object.assign({}, acc), { [item.borrower]: [...borrowers, item] });
  }, {});
  return Object.keys(grouped)
      .map((borrower) => {
        const trustline = grouped[borrower];
        return {
          stakers: trustline.map((item) => item.staker),
          borrower,
          stakerCount: trustline.length,
          trust: trustline.reduce((acc, item) => acc.add(item.trustAmount), ethers.BigNumber.from("0")),
        };
      })
      .sort((a, b) => b.stakerCount - a.stakerCount);
}