import styles from "./modals.module.scss";
import {Box, Control, Input} from "@unioncredit/ui";

export const SingleInputControl = ({id, label, value, checked, onChange, onChecked, placeholder, suffix}) => {
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
            placeholder={placeholder}
            suffix={suffix}
            value={value}
            onChange={onChange}
          />
        </Box>
      )}
    </Box>
  )
}