import {
  fetchStakers,
  fetchBorrows,
  fetchTrustlines,
  fetchCancelTrusted,
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

function parseVouchers(data, cancelData) {
  const grouped = groupBy(data, (x) => x.borrower);
  const cancelGrouped = groupBy(cancelData, (x) => x.borrower);
  return Object.keys(grouped).reduce((acc, borrower) => {
    if (
      cancelGrouped[borrower] &&
      cancelGrouped[borrower][0].timestamp > grouped[borrower][0].timestamp
    ) {
      return null;
    } else {
      return {
        ...acc,
        [borrower.toLowerCase()]: {
          amount: etherToNumber(grouped[borrower][0].amount || zero), //The same address only uses the value of the last transaction
          count: grouped[borrower].length,
        },
      };
    }
  }, {});
}

function parseVouchersGiven(data, cancelData) {
  const grouped = groupBy(data, (x) => x.staker);
  const cancelGrouped = groupBy(cancelData, (x) => x.staker);
  return Object.keys(grouped).reduce((acc, staker) => {
    if (
      cancelGrouped[staker] &&
      cancelGrouped[staker][0].timestamp > grouped[staker][0].timestamp
    ) {
      return null;
    } else {
      return {
        ...acc,
        [staker.toLowerCase()]: {
          count: grouped[staker].length,
        },
      };
    }
  }, {});
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

  const stakers = parseStakers(await fetchStakers());
  const borrows = parseBorrows(await fetchBorrows());
  const repays = parseRepays(await fetchRepays());
  const borrowers = groupBy(await fetchBorrowers(), "account");

  const data = await Promise.all(
    Object.keys(stakers).map(async (member) => {
      const ens = await fetchENS(member);
      const borrower = borrowers[member]?.[0] || {};
      const trustlines = parseVouchers(
        await fetchTrustlines("timestamp", "asc", {
          staker: member,
        }),
        await fetchCancelTrusted("timestamp", "asc", {
          staker: member,
        })
      );
      console.log(trustlines);
      const vouchersGiven = parseVouchersGiven(
        await fetchTrustlines("timestamp", "asc", {
          borrower: member,
        }),
        await fetchCancelTrusted("timestamp", "asc", {
          staker: member,
        })
      );

      const trustAmount = Object.keys(trustlines).reduce((acc, borrower) => {
        return sumBy(trustlines[borrower], (x) => x.amount);
      }, {});

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
        trustAmount: trustAmount || zero,
        trustCount: Object.keys(trustlines)?.length || zero,
        trustForCount: Object.keys(vouchersGiven)?.length || zero,
      };
    })
  );

  return data;
}
