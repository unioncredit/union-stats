import { useState } from "react";
import { Header, Input, Box } from "@unioncredit/ui";
import { ReactComponent as Search } from "@unioncredit/ui/lib/icons/search.svg";
import { Navigation, NetworkSelect } from "components";
import { MemberDataTable } from "components/MemberDataTable";
import style from "./dataTable.module.css";

export default function DataView() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <>
      <div className={style.memberPageWidth}>
        <Header className={style.protocolHeader}>
          <Navigation />
        </Header>

        <div className={style.statDropdownWrapper}>
          <Box align="center" justify="space-between">
            <Box w="280px">
              <Input
                suffix={<Search />}
                placeholder="Filter by address or ENS"
                onChange={handleSearchChange}
              />
            </Box>
            <Box w="280px" className={style.selectNetwork}>
              <NetworkSelect />
            </Box>
          </Box>
        </div>

        <MemberDataTable search={search} />
      </div>
    </>
  );
}
