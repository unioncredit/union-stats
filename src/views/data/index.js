import style from "./DataView.module.scss";
import { Header } from "@unioncredit/ui";
import { Navigation } from "components";
import { DataTable } from "components/members";
import { TableControls } from "components/members/filters/TableControls";
import useFilters from "../../hooks/data/useFilters";
import usePagination from "../../hooks/usePagination";
import useSort from "../../hooks/useSort";

export default function DataView() {
  const sort = useSort();
  const filters = useFilters();
  const pagination = usePagination();

  return (
    <>
      <div className={style.container}>
        <Header>
          <Navigation />
        </Header>

        <TableControls sort={sort} filters={filters} pagination={pagination} />
        <DataTable sort={sort} filters={filters} pagination={pagination} />
      </div>
    </>
  );
}
