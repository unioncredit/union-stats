import {useState} from "react";
import {Box, Header, Input} from "@unioncredit/ui";
import {ReactComponent as Search} from "@unioncredit/ui/lib/icons/search.svg";
import {Navigation, NetworkSelect} from "components";
import {DataTable} from "components/members";
import style from "./DataView.module.css";

export default function DataView() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value.toLocaleLowerCase());
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

        <DataTable searchQuery={searchQuery} />
      </div>
    </>
  );
}
