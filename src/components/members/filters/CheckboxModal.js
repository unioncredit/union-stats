import styles from "./modals.module.scss";
import { Box, Button, Control, Modal, ModalOverlay, Text } from "@unioncredit/ui";
import { useEffect, useState } from "react";
import { ReactComponent as FilterIcon } from "images/filter.svg";

export const CheckboxModal = ({
  id,
  open,
  title,
  values,
  filters,
  handleClose,
  pagination,
}) => {
  const [error, setError] = useState("");
  const [selected, setSelected] = useState([]);

  const handleApplyFilters = () => {
    if (selected.length > 0) {
      filters.addCheckboxFilter(id, selected);
      pagination.setPage(1);
      handleClose();
    } else {
      setError("You must select an item");
    }
  };

  const handleOnChecked = (value) => {
    setError("");

    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    const item = filters.checkboxValues.find((v) => v.key === id);
    setSelected(item ? item.values : []);
  }, [id, JSON.stringify(filters.checkboxValues)]);

  if (!open) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <Modal>
        <Modal.Header title={title} />

        <Modal.Body>
          {values.map((value) => (
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

          {error && (
            <Box mt="10px" mb={0}>
              <Text mb={0} color="red500">
                {error}
              </Text>
            </Box>
          )}

          <Button
            icon={FilterIcon}
            label="Apply Filter"
            onClick={handleApplyFilters}
            className={styles["filter-button"]}
          />
        </Modal.Body>
      </Modal>
    </ModalOverlay>
  );
};
