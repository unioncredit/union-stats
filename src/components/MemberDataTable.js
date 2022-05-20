import { useMemo, useState } from "react";
import { LoadingSpinner } from "@unioncredit/ui";
import { ReactComponent as TableSorting } from "@unioncredit/ui/lib/icons/tableSorting.svg";
import useTableData from "hooks/data/fetchTableData";
import MemberDataTableRow from "./MemberDataTableRow";
import style from "views/data/dataTable.module.css";

const SortTypes = {
  STAKED: "staked",
  BORROWS: "borrows",
  REPAYS: "repays",
  TRUST: "trust",
  TRUST_COUNT: "trust-count",
  TRUST_COUNT_GIVEN: "trust-count-given",
  MEMBER_STATUS: "member-status",
};

const sortByKey = (key) => (direction) => (a, b) =>
  direction ? Number(b[key]) - Number(a[key]) : Number(a[key]) - Number(b[key]);

const sortByStaked = sortByKey("stakeAmount");
const sortByTrust = sortByKey("trustAmount");
const sortByBorrow = sortByKey("borrowAmount");
const sortByRepay = sortByKey("repayAmount");
const sortByTrustCount = sortByKey("trustCount");
const sortByMemberStatus = sortByKey("isMember");

export function MemberDataTable({ search }) {
  const [sortType, setSortType] = useState({});
  const { data: tableData = [] } = useTableData();

  const searchedData = useMemo(() => {
    if (!search) return tableData;
    return tableData.filter(
      (row) => row.borrower.includes(search) || row.ens?.name?.includes(search)
    );
  }, [search, tableData]);

  const getSortTypeClass = (type) => {
    if (sortType?.type === type) {
      return `.sortableLabel ${sortType?.type}--${
        sortType?.direction ? "desc" : "asc"
      }`;
    }
    return "";
  };

  const handleSort = (type) => () => {
    const direction = type === sortType?.type ? !sortType.direction : false;
    setSortType({ type, direction });
  };

  const sortedData = useMemo(() => {
    if (!sortType) return searchedData;

    const sortFns = {
      [SortTypes.STAKED]: sortByStaked,
      [SortTypes.TRUST]: sortByTrust,
      [SortTypes.BORROWS]: sortByBorrow,
      [SortTypes.REPAYS]: sortByRepay,
      [SortTypes.TRUST_COUNT]: sortByTrustCount,
      [SortTypes.TRUST_COUNT_GIVEN]: sortByTrustCount,
      [SortTypes.MEMBER_STATUS]: sortByMemberStatus,
    };

    const sortFn = sortFns[sortType.type];

    if (!sortFn) return searchedData;

    return [...searchedData].sort(sortFn(sortType.direction));
  }, [searchedData, sortType]);

  return (
    <div className={style.tableContainer}>
      {tableData.length <= 0 ? (
        <div className={style.spinnerContainer}>
          <div className={style.loadingSpinner}>
            <LoadingSpinner></LoadingSpinner>
          </div>
        </div>
      ) : (
        <table className={style.tableWrapper}>
          <tbody className={style.border}>
            <tr className={style.tableHeaderRow}>
              <td className={style.headerItemEmpty}></td>
              <td className={style.headerItemAccount}>Account</td>
              <td
                className={style.headerItem}
                id={style.headerItemMember}
                onClick={handleSort(SortTypes.MEMBER_STATUS)}
              >
                Member Status{" "}
                <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.MEMBER_STATUS)}
                />
              </td>
              <td
                className={style.headerItem}
                onClick={handleSort(SortTypes.TRUST)}
              >
                Trust (DAI){" "}
                <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.TRUST)}
                />
              </td>
              <td
                className={style.headerItem}
                onClick={handleSort(SortTypes.STAKED)}
              >
                Staked (DAI){" "}
                <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.STAKED)}
                />
              </td>
              <td
                className={style.headerItem}
                onClick={handleSort(SortTypes.TRUST_COUNT)}
              >
                Vouches Received{" "}
                <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.TRUST_COUNT)}
                />
              </td>
              <td
                  className={style.headerItem}
                  onClick={handleSort(SortTypes.TRUST_COUNT_GIVEN)}
              >
              Vouches Given{" "}
              <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.TRUST_COUNT_GIVEN)}
              />
            </td>
              <td
                className={style.headerItem}
                onClick={handleSort(SortTypes.BORROWS)}
              >
                Borrowed (DAI){" "}
                <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.BORROWS)}
                />
              </td>
              <td
                className={style.headerItem}
                onClick={handleSort(SortTypes.REPAYS)}
              >
                Repaid (DAI){" "}
                <TableSorting
                  width="12px"
                  className={getSortTypeClass(SortTypes.REPAYS)}
                />
              </td>

              {/*
                <td className={style.headerItemEmpty}></td>
                <td className={style.headerItemAccount}>Account</td>
                <td className={style.headerItem}>Vouches Received</td>
                <td className={style.headerItem}>Trust (DAI)</td>
                <td className={style.headerItem}>Available Credit (DAI)</td>
                <td className={style.headerItem}>Balance Owed (DAI)</td>
                <td className={style.headerItem}>Loan Status</td>
                <td className={style.headerItem}>Staked (DAI)</td>
                <td className={style.headerItem}>Backing</td>
                <td className={style.headerItem}>Utilized Stake (DAI)</td>
                <td className={style.headerItem}>Frozen Stake (DAI)</td>
                */}
            </tr>
            {sortedData.map((row) => (
              <MemberDataTableRow row={row} key={row.address} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
