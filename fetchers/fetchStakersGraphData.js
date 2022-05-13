import { ethers } from "ethers";
import groupBy from "lodash/groupBy";
import sumBy from "lodash/sumBy";
import getLogs from "./fetchLogs";
import fetchUnstakersGraphData from "./fetchUnstakersGraphData";

const topicHash =
  "0x3dbdcfd4c1f2e08931aae3d544e149a1e643143f5234d166fe3debb783388495";

export default async function fetchStakersGraphData() {
  const json = await getLogs(topicHash);

  const data = json.data.items;

  const parsed = data.map((item) => {
    const staker = ethers.BigNumber.from(item.raw_log_topics[1]).toHexString();
    const amount = ethers.BigNumber.from(item.raw_log_data);
    const date = new Date(item.block_signed_at);
    const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return { amount, staker, day };
  });

  const grouped = groupBy(parsed, (x) => x.day.toString());

  let prevSum = 0;
  const agg = Object.keys(grouped).reduce((acc, key) => {
    const group = grouped[key];
    // sum the group
    const sumOfGroup = sumBy(group, (x) =>
      Number(ethers.utils.formatEther(x.amount))
    );

    const amount = sumOfGroup;
    const n = { ...acc, [key]: amount + prevSum };
    prevSum += amount;
    return n;
  }, {});

  let dateRange = [];
  const aggKeys = Object.keys(agg);
  const startDate = new Date(aggKeys[0]);
  const endDate = Date.now();
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    dateRange.push(new Date(d));
  }

  const unstakeGraphData = await fetchUnstakersGraphData();

  let graphData = {};
  let lastSum = 0;
  for (let i = 0; i < dateRange.length; i++) {
    const date = dateRange[i];
    lastSum = agg[date] || lastSum;
    graphData[date] = { y: lastSum - unstakeGraphData[date]?.y || 0, x: date };
  }

  return Object.values(graphData);
}
