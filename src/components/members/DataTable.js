import {Box, Button, LoadingSpinner} from "@unioncredit/ui";
import useTableData from "hooks/data/fetchTableData";
import DataTableRow from "./DataTableRow";
import style from "./DataTable.module.scss";
import {DataTableHead, TablePagination} from "./index";
import usePagination from "../../hooks/usePagination";
import useSort from "../../hooks/useSort";
import {useEffect} from "react";

export const DataTable = ({filters}) => {
  const pagination = usePagination();
  const sort = useSort();

  const {data: tableData = []} = useTableData(
    filters,
    pagination,
    sort.query,
  );

  const handleSortAndResetPagination = (newSort) => {
    sort.setNewSort(newSort);
    pagination.setPage(1);
  }

  useEffect(() => {
    pagination.setPage(1);
  }, [filters.queries]);

  return (
    <section>
      <div className={style.container}>
        <table className={style.wrapper}>
          <thead>
          <DataTableHead
            sort={sort}
            handleSort={handleSortAndResetPagination}
          />
          </thead>
          <tbody>

          {tableData.items?.length > 0 && tableData.items.map(item => (
            <DataTableRow key={item.address} address={item.address} data={item.data}/>
          ))}
          </tbody>
        </table>

        {(tableData.items && tableData.items.length <= 0) ? (
          <Box className={style["no-results"]} align="center" direction="vertical">
            <h2>No matching results</h2>
            <p>Change or clear applied filters to try a different query</p>

            <Button
              variant="pill"
              label="Clear all filters"
              onClick={filters.clear}
            />
          </Box>
        ) : (!tableData.items) && (
          <div className={style.spinner}>
            <LoadingSpinner/>
          </div>
        )}
      </div>

      {tableData.items?.length > 0 && (
        <TablePagination
          total={tableData.pagination.total.value}
          pagination={pagination}
        />
      )}
    </section>
  );
}
