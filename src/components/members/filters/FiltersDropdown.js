import styles from "./Filters.scss";
import {Box, Button, ContextMenu} from "@unioncredit/ui";
import {ReactComponent as PlusIcon} from "../../../images/plus.svg";
import {FILTER_MODALS} from "../../../constants/filters";

export const FiltersDropdown = ({filters, openFilterModal}) => {
  return (
    <Box align="center" className={styles.filters}>
      <ContextMenu
        position="right"
        button={(toggleOpen) => (
          <Button
            variant="secondary"
            label="Add a filter"
            icon={PlusIcon}
            onClick={toggleOpen}
            className={styles.button}
          />
        )}
        items={FILTER_MODALS.map(item => {
          return {
            key: item.key,
            label: item.title,
            onClick: (toggleOpen) => openFilterModal(item.key, toggleOpen)
          }
        })}
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
  )
}