import style from "./TableControls.module.scss";
import { Box, Input, SearchIcon } from "@unioncredit/ui";
import { Filters } from "./Filters";
import { NetworkSelect } from "../../NetworkSelect";
import { ActiveFilters } from "./ActiveFilters";
import useFilterModals from "../../../hooks/data/useFilterModals";
import classNames from "classnames";

export const TableControls = ({ sort, filters, pagination }) => {
  const modals = useFilterModals();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    filters.setSearchQuery(value.toLocaleLowerCase());
    pagination.setPage(1);
  };

  return (
    <div className={style["controls-container"]}>
      <Box align="center" justify="space-between" className={style.controls}>
        <Box className={style["filters-container"]}>
          <Filters filters={filters} modals={modals} pagination={pagination} />
        </Box>

        <Box align="center" className={style["search-container"]}>
          <Box
            w="200px"
            className={classNames("network-select", style["network-select"])}
          >
            <NetworkSelect sort={sort} pagination={pagination} />
          </Box>

          <Box w="250px" className={style.search}>
            <Input
              value={filters.searchQuery}
              suffix={<SearchIcon />}
              placeholder="Filter by address or ENS"
              onChange={handleSearchChange}
            />
          </Box>
        </Box>
      </Box>

      <ActiveFilters filters={filters} modals={modals} />
    </div>
  );
};
