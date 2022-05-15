import { useMemo } from "react";
import { LoadingSpinner } from "@unioncredit/ui";

import useTableData from "hooks/data/fetchTableData";
import MemberDataTableRow from "./MemberDataTableRow";
import style from "views/data/dataTable.module.css";

export function MemberDataTable({ search }) {
  const { data: tableData = [] } = useTableData();

  const searchedData = useMemo(() => {
    if (!search) return tableData;
    return tableData.filter(
      (row) => row.borrower.includes(search) || row.ens?.name?.includes(search)
    );
  }, [search, tableData]);

  return (
    <>
      {tableData.length <= 0 ? (
        <div className={style.spinnerContainer}>
          <div className={style.loadingSpinner}>
            <LoadingSpinner></LoadingSpinner>
          </div>
        </div>
      ) : (
        <table className={style.tableWrapper}>
          <tbody className={style.border}>
            <div className={style.tableBodyInnerWrapper}>
              <tr className={style.tableHeaderRow}>
                <td className={style.headerItemEmpty}></td>
                <td className={style.headerItemAccount}>Account</td>
                <td className={style.headerItem}>Vouches Received</td>
                <td className={style.headerItem}>Trust (DAI)</td>
                <td className={style.headerItem}>Staked (DAI)</td>
                <td className={style.headerItem}>Unstaked (DAI)</td>
                <td className={style.headerItem}>Balance Owed (DAI</td>
                <td className={style.headerItem}>Utilized Stake (DAI)</td>

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
              {searchedData.map((row) => (
                <MemberDataTableRow row={row} key={row.address} />
              ))}
            </div>
          </tbody>
        </table>
      )}
    </>
  );
}
