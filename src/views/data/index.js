import style from "./DataView.module.scss";
import {Header} from "@unioncredit/ui";
import {Navigation} from "components";
import {DataTable} from "components/members";
import {TableControls} from "components/members/filters/TableControls";
import useFilters from "../../hooks/data/useFilters";

export default function DataView() {
  const filters = useFilters();

  return (
    <>
      <div className={style.container}>
        <Header>
          <Navigation />
        </Header>

        <TableControls filters={filters} />
        <DataTable filters={filters} />
      </div>
    </>
  );
}
