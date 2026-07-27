import { Box, Button, LoadingSpinner } from "@unioncredit/ui";
import useTableData from "hooks/data/fetchTableData";
import DataTableRow from "./DataTableRow";
import style from "./DataTable.module.scss";
import { DataTableHead, TablePagination } from "./index";

export const DataTable = ({ sort, filters, pagination }) => {
  const { data: tableData = [], error } = useTableData(
    filters,
    pagination,
    sort.query
  );

  const handleSortAndResetPagination = (newSort) => {
    sort.setNewSort(newSort);
    pagination.setPage(1);
  };

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
            {tableData.items?.length > 0 &&
              tableData.items.map((item) => (
                <DataTableRow
                  key={item.address}
                  address={item.address}
                  data={item.data}
                />
              ))}
          </tbody>
        </table>

        {tableData.unsupported ? (
          <Box
            className={style["no-results"]}
            align="center"
            direction="vertical"
          >
            <h2>Member data unavailable on this network</h2>
            <p>Member data is only available on Base and Optimism</p>
          </Box>
        ) : error && !tableData.items ? (
          <Box
            className={style["no-results"]}
            align="center"
            direction="vertical"
          >
            <h2>Member data is temporarily unavailable</h2>
            <p>The data service could not be reached — try again later</p>
          </Box>
        ) : tableData.items && tableData.items.length <= 0 ? (
          <Box
            className={style["no-results"]}
            align="center"
            direction="vertical"
          >
            <h2>No matching results</h2>
            <p>Change or clear applied filters to try a different query</p>

            <Button
              variant="pill"
              label="Clear all filters"
              onClick={filters.clear}
            />
          </Box>
        ) : (
          !tableData.items && (
            <div className={style.spinner}>
              <LoadingSpinner />
            </div>
          )
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
};
