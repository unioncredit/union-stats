import { RangeModal } from "./RangeModal";
import { CHECKBOX_FILTER_MODALS, RANGE_FILTER_MODALS } from "constants/filters";
import { CheckboxModal } from "./CheckboxModal";
import { FiltersDropdown } from "./FiltersDropdown";

export const Filters = ({ filters, modals, pagination }) => {
  const openFilterModal = (key, toggleContextMenu) => {
    modals.open(key);
    toggleContextMenu();
  };

  return (
    <>
      <FiltersDropdown filters={filters} openFilterModal={openFilterModal} />

      {RANGE_FILTER_MODALS.map((modal) => (
        <RangeModal
          id={modal.key}
          key={modal.key}
          title={modal.title}
          isDai={modal.is_dai}
          filters={filters}
          handleClose={modals.closeAll}
          open={modals.isOpen(modal.key)}
          pagination={pagination}
        />
      ))}

      {CHECKBOX_FILTER_MODALS.map((modal) => (
        <CheckboxModal
          id={modal.key}
          key={modal.key}
          title={modal.title}
          values={modal.values}
          filters={filters}
          handleClose={modals.closeAll}
          open={modals.isOpen(modal.key)}
          pagination={pagination}
        />
      ))}
    </>
  );
};
