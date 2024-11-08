import styles from "./modals.module.scss";
import { Button, Dai, Usdc, Modal, ModalOverlay } from "@unioncredit/ui";
import { SingleInputControl } from "./SingleInputControl";
import { useEffect, useState } from "react";
import { Range } from "../../../constants/filters";
import { RangeInputControl } from "./RangeInputControl";
import { ReactComponent as FilterIcon } from "images/filter.svg";

const initialRangeState = {
  [Range.LTE]: "",
  [Range.GTE]: "",
};

function getTokenComponent(token) {
  switch (token) {
    case "USDC":
      return <Usdc />;
    case "DAI":
      return <Dai />;
    default:
      return null;
  }
}

function getTokenMantissa(token) {
  switch (token) {
    case "USDC":
      return "0.00";
    case "DAI":
      return "0.00";
    default:
      return "0";
  }
}

export const RangeModal = ({
  id,
  open,
  title,
  token,
  transformValue,
  filters,
  handleClose,
  pagination,
}) => {
  const [selected, setSelected] = useState("");
  const [values, setValues] = useState(initialRangeState);
  const [errors, setErrors] = useState(initialRangeState);

  useEffect(() => {
    const item = filters.rangeValues.find((v) => v.key === id);
    setSelected(item?.selected || "");
    setValues(item?.values || initialRangeState);
  }, [id, JSON.stringify(filters.rangeValues)]);

  useEffect(() => {
    setValues(initialRangeState);
    setErrors(initialRangeState);
  }, [selected]);

  const handleValueChanged = (key, value) => {
    if (!isNaN(value)) {
      setValues({ ...values, [key]: value });
    }
  };

  const validateInputs = () => {
    setErrors({
      [Range.GTE]: values[Range.GTE] ? "" : "Required",
      [Range.LTE]: values[Range.LTE] ? "" : "Required",
    });

    switch (selected) {
      case Range.LTE:
        return values[Range.LTE];
      case Range.GTE:
        return values[Range.GTE];
      case Range.BETWEEN:
        if (values[Range.LTE] && values[Range.GTE]) {
          if (parseFloat(values[Range.LTE]) <= parseFloat(values[Range.GTE])) {
            setErrors({ ...errors, [Range.LTE]: "Value must be greater" });
            return false;
          }
          return true;
        }
        return false;
      default:
        return false;
    }
  };

  const handleApplyFilters = () => {
    if (validateInputs()) {
      filters.addRangeFilter(id, selected, values, transformValue);
      pagination.setPage(1);
      handleClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <Modal>
        <Modal.Header title={title} />

        <Modal.Body>
          <SingleInputControl
            id={Range.LTE}
            error={errors[Range.LTE]}
            value={values[Range.LTE]}
            label="Less than or equal to"
            checked={selected === Range.LTE}
            suffix={getTokenComponent(token)}
            placeholder={getTokenMantissa(token)}
            onChecked={() => setSelected(Range.LTE)}
            onChange={(e) => handleValueChanged(Range.LTE, e.target.value)}
          />

          <SingleInputControl
            id={Range.GTE}
            error={errors[Range.GTE]}
            value={values[Range.GTE]}
            label="Greater than or equal to"
            checked={selected === Range.GTE}
            suffix={getTokenComponent(token)}
            placeholder={getTokenMantissa(token)}
            onChecked={() => setSelected(Range.GTE)}
            onChange={(e) => handleValueChanged(Range.GTE, e.target.value)}
          />

          <RangeInputControl
            id={Range.BETWEEN}
            errors={errors}
            values={{
              [Range.GTE]: values[Range.GTE],
              [Range.LTE]: values[Range.LTE],
            }}
            label="Between"
            checked={selected === Range.BETWEEN}
            suffix={getTokenComponent(token)}
            placeholder={getTokenMantissa(token)}
            onChecked={() => setSelected(Range.BETWEEN)}
            onLowerBoundChange={(e) =>
              handleValueChanged(Range.GTE, e.target.value)
            }
            onUpperBoundChange={(e) =>
              handleValueChanged(Range.LTE, e.target.value)
            }
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
  );
};
