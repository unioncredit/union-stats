import { useState } from "react";
import {Header, Input, Box, Divider} from "@unioncredit/ui";
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

        <Divider></Divider>



          <Box align="center" justify="flex-end">

            <Box w="200px" className={style.selectNetwork}>
              <NetworkSelect />
            </Box>
            <Box w="280px">
              <Input
                suffix={<Search />}
                placeholder="Filter by address or ENS"
                onChange={handleSearchChange}
              />
            </Box>
          </Box>


        <MemberDataTable search={search} />
      </div>
    </>
  );
}
