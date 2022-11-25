import style from "./DataView.module.scss";
import {useState} from "react";
import {Header} from "@unioncredit/ui";
import {Navigation} from "components";
import {DataTable} from "components/members";
import {TableControls} from "components/members/filters/TableControls";

export default function DataView() {
  const [filters, setFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value.toLocaleLowerCase());
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setFilters([]);
  }

  return (
    <>
      <div className={style.container}>
        <Header>
          <Navigation />
        </Header>

        <TableControls
          searchQuery={searchQuery}
          filters={filters}
          setFilters={setFilters}
          handleSearchChange={handleSearchChange}
          clearAllFilters={clearAllFilters}
        />

        <DataTable
          filters={filters}
          searchQuery={searchQuery}
          clearAllFilters={clearAllFilters}
        />
      </div>
    </>
  );
}
