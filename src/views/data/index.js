import React, { useState } from "react";
import { Header, Input, Box } from "@unioncredit/ui";
import { ReactComponent as Search } from "@unioncredit/ui/lib/icons/search.svg";
import { Navigation, NetworkSelect } from "components";
import { MemberDataTable } from "components/MemberDataTable";
import { Dropdown } from "components/Dropdown";

import style from "./dataTable.module.css";

export default function DataView() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const items = [
    {
      id: 1,
      value: 'Vouches Received',
    },
    {
      id: 2,
      value: 'Trust',
    },
    {
      id: 3,
      value: 'Member Status',
    },
    {
      id: 4,
      value: 'Available Credit',
    },
    {
      id: 5,
      value: 'Balance Owed',
    },
    {
      id: 6,
      value: 'Loan Status',
    },
    {
      id: 7,
      value: 'Loan Status',
    },
    {
      id: 8,
      value: 'Vouches Given',
    },
    {
      id: 9,
      value: 'Utilized Stake',
    },
    {
      id: 10,
      value: 'Frozen Stake',
    },
    {
      id: 11,
      value: 'ENS Registered',
    },
    {
      id: 12,
      value: 'Token in Wallet',
    },
  ];


  return (
    <>
      <div className={style.memberPageWidth}>
        <Header className={style.protocolHeader}>
          <Navigation />
        </Header>

        <div className={style.statDropdownWrapper}>
          <Dropdown title="Select movie" items={items} multiSelect />

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
        </div>

        <MemberDataTable search={search} />
      </div>
    </>
  );
}
