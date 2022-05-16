import {
  fetchStakers,
  fetchBorrows,
  fetchTrustlines,
  fetchRepays,
  fetchMemberApplications,
  config,
} from "@unioncredit/data";
import sumBy from "lodash/sumBy";
import groupBy from "lodash/groupBy";
import { fetchENS } from "fetchers/fetchEns";
import { ethers } from "ethers";

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

function parseMemberApplications(data) {
  return groupBy(data, "applicant");
}

export async function fetchTableData(chainId) {
  config.set("chainId", chainId);
  const memberships = parseMemberApplications(await fetchMemberApplications());
  const trustlines = parseVouchers(await fetchTrustlines());
  const stakers = parseStakers(await fetchStakers());
  const borrows = parseBorrows(await fetchBorrows());
  const repays = parseRepays(await fetchRepays());

  const data = await Promise.all(
    Object.keys(trustlines).map(async (member) => {
      const ens = await fetchENS(member);

      return {
        ens,
        member,
        isMember: !!memberships[member],
        borrower: member,
        stakeAmount: stakers[member] || zero,
        borrowAmount: borrows[member] || zero,
        repayAmount: repays[member] || zero,
        trustAmount: trustlines[member].amount || zero,
        trustCount: trustlines[member].count,
      };
    })
  );

  return data;
}
