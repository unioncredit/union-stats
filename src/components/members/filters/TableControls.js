import style from "./TableControls.module.scss";
import {ReactComponent as Search} from "@unioncredit/ui/lib/icons/search.svg";
import {Box, Input} from "@unioncredit/ui";
import {Filters} from "./Filters";
import {NetworkSelect} from "../../NetworkSelect";
import {ActiveFilters} from "./ActiveFilters";
import useFilterModals from "../../../hooks/data/useFilterModals";

export const TableControls = ({filters}) => {
  const modals = useFilterModals();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    filters.setSearchQuery(value.toLocaleLowerCase());
  };

  return (
    <div className={style.controls}>
      <Box align="center" justify="space-between">
        <Box>
          <Filters filters={filters} modals={modals} />
        </Box>

        <Box align="center">
          <Box w="200px" className={style["network-select"]}>
            <NetworkSelect />
          </Box>

          <Box w="250px" className={style.search}>
            <Input
              value={filters.searchQuery}
              suffix={<Search />}
              placeholder="Filter by address or ENS"
              onChange={handleSearchChange}
            />
          </Box>
        </Box>
      </Box>

      <ActiveFilters filters={filters} modals={modals} />
    </div>
  )
}