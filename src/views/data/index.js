import style from "./DataView.module.scss";
import { Header } from "@unioncredit/ui";
import { Navigation } from "components";
import { DataTable } from "components/members";
import { TableControls } from "components/members/filters/TableControls";
import useFilters from "../../hooks/data/useFilters";
import usePagination from "../../hooks/usePagination";

export default function DataView() {
  const filters = useFilters();
  const pagination = usePagination();

  return (
    <>
      <div className={style.container}>
        <Header>
          <Navigation />
        </Header>

        <TableControls filters={filters} pagination={pagination} />
        <DataTable filters={filters} pagination={pagination} />
      </div>
    </>
  );
}
