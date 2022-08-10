import {
  fetchStakers,
  fetchBorrows,
  fetchTrustlines,
  fetchRepays,
  fetchMemberApplications,
  fetchBorrowers,
  config,
} from "@unioncredit/data";
import sumBy from "lodash/sumBy";
import groupBy from "lodash/groupBy";
import { fetchENS } from "fetchers/fetchEns";
import { ethers } from "ethers";
import { formatUnits } from "@ethersproject/units";
import { initialMember } from "constants/initialMember";

const zero = "0";
const etherToNumber = (n) => Number(ethers.utils.formatEther(n || zero));

function parseVouchers(data) {
  const grouped = groupBy(data, (x) => x.borrower);
  return Object.keys(grouped).reduce((acc, borrower) => {
    const trustAmount = sumBy(grouped[borrower], (x) =>
      etherToNumber(x.amount || zero)
    );
    return {
      ...acc,
      [borrower.toLowerCase()]: {
        amount: trustAmount,
        count: grouped[borrower].length,
      },
    };
  }, {});
}

function parseVouchersGiven(data) {
  return groupBy(data, (x) => x.staker);
}

function parseStakers(data) {
  const grouped = groupBy(data, (x) => x.account);
  return Object.keys(grouped).reduce((acc, staker) => {
    const stakeSum = sumBy(grouped[staker], (x) =>
      etherToNumber(x.stakedAmount || zero)
    );
    return { ...acc, [staker.toLowerCase()]: stakeSum };
  }, {});
}

function parseBorrows(data) {
  const grouped = groupBy(data, (x) => x.account);
  return Object.keys(grouped).reduce((acc, borrower) => {
    const borrowSum = sumBy(grouped[borrower], (x) => etherToNumber(x.amount));
    return { ...acc, [borrower.toLowerCase()]: borrowSum };
  }, {});
}

function parseRepays(data) {
  const grouped = groupBy(data, (x) => x.account);
  return Object.keys(grouped).reduce((acc, borrower) => {
    const repaySum = sumBy(grouped[borrower], (x) => etherToNumber(x.amount));
    return { ...acc, [borrower.toLowerCase()]: repaySum };
  }, {});
}

export async function fetchTableData(chainId) {
  config.set("chainId", chainId);
  const memberships = groupBy(await fetchMemberApplications(), "applicant");

  const trustlines = parseVouchers(await fetchTrustlines());
  const stakers = parseStakers(await fetchStakers());
  const borrows = parseBorrows(await fetchBorrows());
  const repays = parseRepays(await fetchRepays());
  const vouchersGiven = parseVouchersGiven(await fetchTrustlines());
  const borrowers = groupBy(await fetchBorrowers(), "account");

  const data = await Promise.all(
    Object.keys(stakers).map(async (member) => {
      const ens = await fetchENS(member);
      const borrower = borrowers[member]?.[0] || {};
      return {
        ens,
        member,
        isMember: !!memberships[member] || !!initialMember[chainId][member],
        borrower: member,
        stakeAmount: stakers[member] || zero,
        borrowAmount: borrows[member] || zero,
        totalBorrow: formatUnits(borrower.totalBorrowed || zero),
        lastRepay: borrower.lastRepay || zero,
        repayAmount: repays[member] || zero,
        trustAmount: trustlines[member]?.amount || zero,
        trustCount: trustlines[member]?.count || zero,
        trustForCount: vouchersGiven[member]?.length || zero,
      };
    })
  );

  return data;
}
