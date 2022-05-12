import useSWR from "swr";
import getBorrows from "./getBorrows";
import getVouchers from "./getVouchers";
import getRegisterMember from "./getRegisterMember";
import getStakers from "./getStakers";
import getRepays from "./getRepays";
import getUnstakers from "./getUnstakers";
import * as ethers from "@ethersproject/bignumber";

const zero = ethers.BigNumber.from("0");

async function fetchTableData() {
  const vouchers = await getVouchers();
  const borrows = await getBorrows();
  const getMembers = await getRegisterMember();
  const getStaker = await getStakers();
  const repays = await getRepays();
  const getUnstaker = await getUnstakers();
  const getStakerAmount = await getStakers();

  return vouchers.map((borrower) => ({
    ...borrower,
    borrowAmount: borrows[borrower.borrower] || 0,
    isMember: getMembers.includes(borrower.borrower),
    stakeAmount: getStaker[borrower.borrower] || zero,
    repayAmount: repays[borrower.borrower] || zero,
    unstakeAmount: getUnstaker[borrower.borrower] || zero,
    stakerAmount: getStakerAmount[borrower.stakerCount] || zero,
  }));
}

export default function useTableData() {
  return useSWR("tableData", fetchTableData);
}
