import styles from "./modals.module.scss";
import {Button, Dai, Modal, ModalOverlay} from "@unioncredit/ui";
import {SingleInputControl} from "./SingleInputControl";
import {useEffect, useState} from "react";
import {Range} from "../../../constants/filters";
import {RangeInputControl} from "./RangeInputControl";
import {ReactComponent as FilterIcon} from "images/filter.svg";

const initialValuesState = {
  [Range.LTE]: "",
  [Range.GTE]: "",
  [Range.BETWEEN]: "",
};

export const RangeModal = ({id, open, title, isDai, filters, handleClose, pagination}) => {
  const [selected, setSelected] = useState("");
  const [values, setValues] = useState(initialValuesState);

  useEffect(() => {
    const item = filters.rangeValues.find(v => v.key === id);
    setSelected(item?.selected || "")
    setValues(item ? item.values : initialValuesState);
  }, [JSON.stringify(filters.rangeValues)]);

  const handleValueChanged = (key, value) => {
    if (!isNaN(value)) {
      setValues({...values, [key]: value});
    }
  }

  const handleApplyFilters = () => {
    filters.addRangeFilter(id, selected, values, isDai);
    pagination.setPage(1);
    handleClose();
  }

  if (!open) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <Modal>
        <Modal.Header title={title}/>

        <Modal.Body>
          <SingleInputControl
            id={Range.LTE}
            value={values[Range.LTE]}
            label="Less than or equal to"
            checked={selected === Range.LTE}
            suffix={isDai ? <Dai/> : null}
            placeholder={isDai ? "0.00" : "0"}
            onChecked={() => setSelected(Range.LTE)}
            onChange={(e) => handleValueChanged(Range.LTE, e.target.value)}
          />

          <SingleInputControl
            id={Range.GTE}
            value={values[Range.GTE]}
            label="Greater than or equal to"
            checked={selected === Range.GTE}
            suffix={isDai ? <Dai/> : null}
            placeholder={isDai ? "0.00" : "0"}
            onChecked={() => setSelected(Range.GTE)}
            onChange={(e) => handleValueChanged(Range.GTE, e.target.value)}
          />

          <RangeInputControl
            id={Range.BETWEEN}
            values={{
              [Range.GTE]: values[Range.GTE],
              [Range.LTE]: values[Range.LTE],
            }}
            label="Between"
            checked={selected === Range.BETWEEN}
            suffix={isDai ? <Dai/> : null}
            placeholder={isDai ? "0.00" : "0"}
            onChecked={() => setSelected(Range.BETWEEN)}
            onLowerBoundChange={(e) => handleValueChanged(Range.GTE, e.target.value)}
            onUpperBoundChange={(e) => handleValueChanged(Range.LTE, e.target.value)}
          />

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