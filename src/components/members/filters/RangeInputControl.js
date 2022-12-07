import styles from "./modals.module.scss";
import { Box, Control, Input } from "@unioncredit/ui";
import { Range } from "constants/filters";

export const RangeInputControl = ({
  id,
  errors,
  label,
  values,
  checked,
  onLowerBoundChange,
  onUpperBoundChange,
  onChecked,
  placeholder,
  suffix,
}) => {
  return (
    <Box className={styles.control}>
      <Control
        id={id}
        label={label}
        checked={checked}
        type="radio"
        onClick={onChecked}
      />

      {checked && (
        <Box className={styles.input}>
          <Input
            label="From"
            placeholder={placeholder}
            suffix={suffix}
            value={values[Range.GTE]}
            error={errors[Range.GTE]}
            onChange={onLowerBoundChange}
          />

          <Input
            label="To"
            placeholder={placeholder}
            suffix={suffix}
            value={values[Range.LTE]}
            error={errors[Range.LTE]}
            onChange={onUpperBoundChange}
          />
        </Box>
      )}
    </Box>
  );
};
