import {RangeModal} from "./RangeModal";
import {useState} from "react";
import {CHECKBOX_FILTER_MODALS, RANGE_FILTER_MODALS} from "constants/filters";
import {CheckboxModal} from "./CheckboxModal";
import {FiltersDropdown} from "./FiltersDropdown";

export const Filters = ({filters}) => {
  const [openKey, setOpenKey] = useState(null);

  const openFilterModal = (key, toggleOpen) => {
    setOpenKey(key);
    toggleOpen();
  }

  const handleModalClose = () => {
    setOpenKey(null);
  }

  return (
    <>
      <FiltersDropdown
        filters={filters}
        openFilterModal={openFilterModal}
      />

      {RANGE_FILTER_MODALS.map(modal => (
        <RangeModal
          id={modal.key}
          key={modal.key}
          open={openKey === modal.key}
          title={modal.title}
          isDai={modal.is_dai}
          filters={filters}
          handleClose={handleModalClose}
        />
      ))}

      {CHECKBOX_FILTER_MODALS.map(modal => (
        <CheckboxModal
          id={modal.key}
          key={modal.key}
          open={openKey === modal.key}
          title={modal.title}
          values={modal.values}
          filters={filters}
          handleClose={handleModalClose}
        />
      ))}
    </>
  )
}