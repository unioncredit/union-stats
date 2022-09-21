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

//grouped and cancelData: Arrays are sorted by timestamp from largest to smallest
function parseEffectiveVouch(key, grouped, cancelGrouped) {
  return Object.keys(grouped).reduce((acc, account) => {
    let obj = Object.create(null);
    for (let i = 0; i < grouped[account].length; i++) {
      const member = grouped[account][i][key];
      //The same address only uses the value of the last transaction
      if (obj[member] === undefined) obj[member] = grouped[account][i].amount;

      const cancelData = cancelGrouped[account];
      if (cancelData) {
        for (let j = 0; j < cancelData.length; j++) {
          if (
            cancelData[j][key] == member &&
            cancelData[j].timestamp > grouped[account][i].timestamp
          ) {
            obj[member] = null;
            break;
          }
        }
      }
    }

    const asArray = Object.entries(obj);
    const filtered = asArray.filter(([, value]) => value !== null);
    obj = Object.fromEntries(filtered);

    const trustAmount = sumBy(Object.keys(obj), (x) =>
      etherToNumber(obj[x] || zero)
    );

    return {
      ...acc,
      [account.toLowerCase()]: {
        amount: trustAmount,
        count: Object.keys(obj).length,
      },
    };
  }, {});
}

function parseVouchers(data, cancelData) {
  const grouped = groupBy(data, (x) => x.borrower);
  const cancelGrouped = groupBy(cancelData, (x) => x.borrower);
  return parseEffectiveVouch("staker", grouped, cancelGrouped);
}

function parseVouchersGiven(data, cancelData) {
  const grouped = groupBy(data, (x) => x.staker);
  const cancelGrouped = groupBy(cancelData, (x) => x.staker);
  return parseEffectiveVouch("borrower", grouped, cancelGrouped);
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
      try {
        const ens = await fetchENS(member);
        const borrower = borrowers[member]?.[0] || {};
        const trustlines = parseVouchers(
          await fetchTrustlines("timestamp", "asc", {
            borrower: member,
          }),
          await fetchCancelTrusted("timestamp", "asc", {
            borrower: member,
          })
        );

        const vouchersGiven = parseVouchersGiven(
          await fetchTrustlines("timestamp", "asc", {
            staker: member,
          }),
          await fetchCancelTrusted("timestamp", "asc", {
            staker: member,
          })
        );

        let trustAmount = 0;
        if (trustlines) {
          trustAmount = Object.keys(trustlines).reduce((acc, borrower) => {
            return sumBy(trustlines[borrower], (x) => x.amount);
          }, {});
        }

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
          trustForCount: vouchersGiven[member]?.count || zero,
        };
      } catch (error) {
        console.log(error);
      }
    })
  );

  return data;
}
