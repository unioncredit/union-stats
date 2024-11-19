import styles from "./Filters.module.scss";
import { Box, Button, PopoverMenu } from "@unioncredit/ui";
import { ReactComponent as PlusIcon } from "../../../images/plus.svg";
import { FILTER_MODALS } from "../../../constants/filters";

export const FiltersDropdown = ({ filters, openFilterModal }) => {
  return (
    <Box align="center" className={styles.filters}>
      <PopoverMenu
        position="right"
        button={(toggleOpen) => (
          <Button
            variant="light"
            label="Add a filter"
            color="secondary"
            icon={PlusIcon}
            onClick={toggleOpen}
            className={styles.button}
          />
        )}
        items={FILTER_MODALS.map((item) => ({
          key: item.key,
          label: item.title,
          onClick: (toggleOpen) => openFilterModal(item.key, toggleOpen),
        }))}
      />

      {filters.length > 0 && (
        <Button
          className={styles.clear}
          label="Clear All"
          variant="pill"
          onClick={filters.clear}
        />
      )}
    </Box>
  );
};
