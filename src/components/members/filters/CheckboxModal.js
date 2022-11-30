import styles from "./modals.module.scss";
import {Box, Button, Control, Modal, ModalOverlay} from "@unioncredit/ui";
import {useEffect, useState} from "react";
import {ReactComponent as FilterIcon} from "images/filter.svg";

export const CheckboxModal = ({id, open, title, values, filters, handleClose}) => {
  const [selected, setSelected] = useState([]);

  const handleApplyFilters = () => {
    filters.addCheckboxFilter(id, selected);
    handleClose();
  }

  const handleOnChecked = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  useEffect(() => {
    const item = filters.checkboxValues.find(v => v.key === id);
    setSelected(item ? item.values : []);
  }, [JSON.stringify(filters.checkboxValues)]);

  if (!open) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <Modal>
        <Modal.Header title={title}/>

        <Modal.Body>
          {values.map(value => (
            <Box key={value.label} className={styles.checkbox}>
              <Control
                id={value.label}
                label={value.label}
                checked={selected.includes(value.label)}
                type="checkbox"
                onClick={() => handleOnChecked(value.label)}
              />
            </Box>
          ))}

          <Button
            icon={FilterIcon}
            label="Apply Filter"
            onClick={handleApplyFilters}
            className={styles["filter-button"]}
          />
        </Modal.Body>
      </Modal>
    </ModalOverlay>
  )
}