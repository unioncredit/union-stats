import {RangeModal} from "./RangeModal";
import {useState} from "react";
import {CHECKBOX_FILTER_MODALS, Range, RANGE_FILTER_MODALS} from "constants/filters";
import {CheckboxModal} from "./CheckboxModal";
import {parseCheckboxQuery, parseFilterValue, parseRangeQuery} from "../../../util/filters";
import {FiltersDropdown} from "./FiltersDropdown";

export const Filters = ({filters, addFilter, clearAllFilters, rangeValues, setRangeValues, checkboxValues, setCheckboxValues}) => {
  const [openKey, setOpenKey] = useState(null);

  const openFilterModal = (key, toggleOpen) => {
    setOpenKey(key);
    toggleOpen();
  }

  const handleModalClose = () => {
    setOpenKey(null);
  }

  const clearAll = () => {
    setCheckboxValues([]);
    setRangeValues([]);
    clearAllFilters();
  }

  const checkboxValuesChanged = (key, values) => {
    const options = CHECKBOX_FILTER_MODALS.find(m => m.key === key);
    const query = parseCheckboxQuery(options, values);
    addFilter(key, `${options.title} · ${values.join(", ")}`, query);

    const value = {
      key: key, values: values,
    };

    if (checkboxValues.find(v => v.key === key)) {
      setCheckboxValues(checkboxValues.map(v => v.key === key ? value : v));
    } else {
      setCheckboxValues([...checkboxValues, value]);
    }
  }

  const handleRangeValueChange = (key, type, values, isDai) => {
    const options = RANGE_FILTER_MODALS.find(m => m.key === key);
    const sign = type === Range.GTE ? "≥" : "≤";
    const title = `${options.title} ${sign} ${values[type]}`;
    const query = parseRangeQuery(type, options, values, isDai);
    addFilter(key, title, query);

    const value = {
      key: key, selected: type, values: values,
    };

    if (rangeValues.find(v => v.key === key)) {
      setRangeValues(rangeValues.map(v => v.key === key ? value : v));
    } else {
      setRangeValues([...rangeValues, value]);
    }
  }

  return (
    <>
      <FiltersDropdown
        filters={filters}
        clearAll={clearAll}
        openFilterModal={openFilterModal}
      />

      {RANGE_FILTER_MODALS.map(modal => (
        <RangeModal
          id={modal.key}
          key={modal.key}
          open={openKey === modal.key}
          title={modal.title}
          isDai={modal.is_dai}
          handleClose={handleModalClose}
          rangeValues={rangeValues}
          rangeValueChanged={handleRangeValueChange}
        />
      ))}

      {CHECKBOX_FILTER_MODALS.map(modal => (
        <CheckboxModal
          id={modal.key}
          key={modal.key}
          open={openKey === modal.key}
          title={modal.title}
          values={modal.values}
          checkboxValues={checkboxValues}
          checkboxValueChanged={checkboxValuesChanged}
          handleClose={handleModalClose}
        />
      ))}
    </>
  )
}