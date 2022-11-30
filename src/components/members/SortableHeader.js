import style from "./DataTableHead.module.scss";
import {ReactComponent as TableSorting} from "@unioncredit/ui/lib/icons/tableSorting.svg";
import {SortDirections} from "../../constants/sorting";
import classNames from "classnames";

export const SortableHeader = ({title, sort, options, handleSort, className = []}) => {
  const styles = classNames({
    [style["item--asc"]]: sort.key === options.key && sort.direction === SortDirections.ASC,
    [style["item--desc"]]: sort.key === options.key && sort.direction === SortDirections.DESC,
  })

  return (
    <td
      onClick={() => handleSort(options)}
      className={classNames(style.item, styles, ...className)}
    >
      {title}

      <TableSorting width="12px" />
    </td>
  )
}