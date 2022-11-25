import style from "./TableControls.module.scss";
import {ReactComponent as Search} from "@unioncredit/ui/lib/icons/search.svg";
import {Box, Input} from "@unioncredit/ui";
import {Filters} from "./Filters";
import {NetworkSelect} from "../../NetworkSelect";
import {ActiveFilters} from "./ActiveFilters";
import {useState} from "react";

export const TableControls = ({searchQuery, filters, setFilters, handleSearchChange, clearAllFilters}) => {
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [rangeValues, setRangeValues] = useState([]);

  const addFilter = (key, label, query) => {
    let filter = {
      key: key,
      label: label,
      query: query,
    };

    if (filters.find(f => f.key === key)) {
      setFilters(filters.map(f => f.key === key ? filter : f));
    } else {
      setFilters([...filters, filter]);
    }
  }

  const removeFilter = (key) => {
    setFilters(filters.filter(f => f.key !== key));
    setRangeValues(rangeValues.filter(v => v.key !== key));
    setCheckboxValues(checkboxValues.filter(v => v.key !== key));
  }

  return (
    <div className={style.controls}>
      <Box align="center" justify="space-between">
        <Box>
          <Filters
            filters={filters}
            addFilter={addFilter}
            clearAllFilters={clearAllFilters}
            checkboxValues={checkboxValues}
            setCheckboxValues={setCheckboxValues}
            rangeValues={rangeValues}
            setRangeValues={setRangeValues}
          />
        </Box>

        <Box align="center">
          <Box w="200px" className={style["network-select"]}>
            <NetworkSelect />
          </Box>

          <Box w="250px" className={style.search}>
            <Input
              value={searchQuery}
              suffix={<Search />}
              placeholder="Filter by address or ENS"
              onChange={handleSearchChange}
            />
          </Box>
        </Box>
      </Box>

      <ActiveFilters
        filters={filters}
        removeFilter={removeFilter}
      />
    </div>
  )
}