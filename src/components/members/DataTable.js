import {useState} from "react";
import {LoadingSpinner} from "@unioncredit/ui";
import useTableData from "hooks/data/fetchTableData";
import DataTableRow from "./DataTableRow";
import style from "./DataTable.module.scss";
import {DataTableHead, TablePagination} from "./index";
import {SortDirections} from "../../constants/sorting";

export const DataTable = ({searchQuery}) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(50);
  const [sort, setSort] = useState({
    key: null, direction: null, options: null,
  })
  const {data: tableData = []} = useTableData(searchQuery, sort.options, page, size);

  const handleSort = (newSort) => {
    if (!sort.key) {
      // no existing sort, sort DESC by default
      return setSort({
        key: newSort.key,
        direction: SortDirections.DESC,
        options: newSort.options[SortDirections.DESC],
      });
    }

    // If the same filter is clicked, toggle direction
    if (sort.key === newSort.key) {
      if (sort.direction === SortDirections.DESC) {
        // If currently ASC, change to DESC
        return setSort({
          ...sort,
          direction: SortDirections.ASC,
          options: newSort.options[SortDirections.ASC],
        })
      } else {
        // If currently DESC, reset sort
        return setSort({
          key: null, direction: null, options: null,
        })
      }
    }

    setSort({
      key: newSort.key,
      direction: SortDirections.DESC,
      options: newSort.options[SortDirections.DESC],
    })
  }

  const handleSortAndResetPagination = (newSort) => {
    handleSort(newSort);
    setPage(1);
  }

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

        {(!tableData.items || tableData.items.length <= 0) && (
          <div className={style.spinner}>
            <LoadingSpinner/>
          </div>
        )}

      </div>

      {tableData.items?.length > 0 && (
        <TablePagination
          page={page}
          size={size}
          total={tableData.pagination.total.value}
          setPage={setPage}
          setSize={setSize}
        />
      )}
    </section>
  );
}
