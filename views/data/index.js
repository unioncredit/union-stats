import { Header } from "@unioncredit/ui";
import { Navigation, NetworkSelect } from "components";
import { MemberDataTable } from "components/MemberDataTable";

import style from "./dataTable.module.css";

export default function StatsView() {
  return (
    <>
      <div className={style.memberPageWidth}>
        <Header className={style.protocolHeader}>
          <Navigation />
        </Header>

        <div className={style.statDropdownWrapper}>
          <NetworkSelect></NetworkSelect>
        </div>

        <MemberDataTable></MemberDataTable>
      </div>
    </>
  );
}
