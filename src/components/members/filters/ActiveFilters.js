import {Box, Button, Card} from "@unioncredit/ui";
import styles from "./ActiveFilters.module.scss";
import {ReactComponent as CloseIcon} from "images/close.svg";

export const ActiveFilters = ({filters, removeFilter}) => {
  return (
    <Box className={styles.filters}>
      {filters.length > 0 && filters.map((filter, index) => (
        <Card key={index} className={styles.filter}>
          <p>{filter.label}</p>

          <Button
            variant="pill"
            icon={CloseIcon}
            onClick={() => removeFilter(filter.key)}
          />
        </Card>
      ))}
    </Box>
  )
}