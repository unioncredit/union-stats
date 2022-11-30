import {Box, Button, Card} from "@unioncredit/ui";
import styles from "./ActiveFilters.module.scss";
import {ReactComponent as CloseIcon} from "images/close.svg";

export const ActiveFilters = ({filters, modals}) => {

  const editFilter = (event, key) => {
    const element = event.target.tagName.toLowerCase();
    if (element !== "svg" && element !== "button" && element !== "path") {
      modals.open(key);
    }
  }

  return (
    <Box className={styles.filters}>
      {filters.queries.length > 0 && filters.queries.map((query, index) => (
        <Card key={index} className={styles.filter} onClick={(e) => editFilter(e, query.key)}>
          <p>{query.label}</p>

          <Button
            variant="pill"
            icon={CloseIcon}
            onClick={() => filters.removeQuery(query.key)}
          />
        </Card>
      ))}
    </Box>
  )
}