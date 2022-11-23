import style from "./DataTableRow.module.scss";
import {Badge} from "@unioncredit/ui";
import formatN from "util/formatValue";
import {IdentityColumns} from "./IdentityColumns";
import {formatEther} from "ethers/lib/utils";

const formatWei = (value) => {
  if (!value) {
    value = 0;
  }

  // Parsed JSON response formats the bigints in scientific notation, we need to
  // expand into its full form.
  const expanded = value.toLocaleString('fullwide', {useGrouping: false})
  const formatted = formatN(formatEther(expanded), 4)
  if (value > 0 && formatted === "0.0000") {
    return "<0.0001";
  }

  return formatted;
};

export default function DataTableRow({address, data}) {
  const getLoanStatusBadge = () => {
    if (data.contracts.is_overdue) {
      return <Badge label="Overdue" color="red"/>
    }
    if (data.contracts.total_owed.total > 0) {
      return <Badge label="Borrowing" color="green"/>
    }
    if (data.contracts.is_member) {
      return <Badge label="Member" color="blue"/>
    }
    return <Badge label="Not a member" color="grey"/>
  }

  return (
    <tr className={style.row}>
      <IdentityColumns
        address={address}
        isMember={data.contracts.is_member}
      />

      <td className={style.col}>{data.contracts.vouches.number_received}</td>
      <td className={style.col}>{formatWei(data.contracts.vouches.amount_received)}</td>
      <td className={style.col}>{formatWei(Math.max(0, data.contracts.credit_limit))}</td>
      <td className={style.col}>{formatWei(data.contracts.total_owed.total)}</td>
      <td className={style.col}>{getLoanStatusBadge()}</td>
      <td className={style.col}>{formatWei(data.contracts.stake.total)}</td>
      <td className={style.col}>{data.contracts.vouches.number_given}</td>
      <td className={style.col}>{formatWei(data.contracts.stake.locked)}</td>
      <td className={style.col}>{formatWei(data.contracts.stake.frozen)}</td>
    </tr>
  );
}
