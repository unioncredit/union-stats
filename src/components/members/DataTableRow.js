import style from "./DataTableRow.module.scss";
import {Badge} from "@unioncredit/ui";
import formatN, {expandToString} from "util/formatValue";
import {IdentityColumns} from "./IdentityColumns";
import {formatEther} from "ethers/lib/utils";

const formatWei = (value) => {
  if (!value) {
    value = 0;
  }

  // Parsed JSON response formats the bigints in scientific notation, we need to
  // expand into its full form.
  const expanded = expandToString(value);
  const formatted = formatN(formatEther(expanded), 2)
  if (value > 0 && formatted === "0.0000") {
    return "<0.0001";
  }

  return formatted;
};

export default function DataTableRow({address, data}) {
  const badgeProps = data.contracts.is_overdue
    ? { label: "Overdue", color: "red" }
    : data.contracts.total_owed.total > 0
    ? { label: "Borrowing", color: "green" }
    : data.contracts.is_member
    ? { label: "Member", color: "blue" }
    : { label: "Not a member", color: "grey" };

  const columnValues = [
    data.contracts.vouches.number_received,
    formatWei(data.contracts.vouches.amount_received),
    formatWei(Math.max(0, data.contracts.credit_limit)),
    formatWei(data.contracts.total_owed.total),
    <Badge {...badgeProps}/>,
    formatWei(data.contracts.stake.total),
    data.contracts.vouches.number_given,
    formatWei(data.contracts.stake.locked),
    formatWei(data.contracts.stake.frozen),
  ];

  return (
    <tr className={style.row}>
      <IdentityColumns
        address={address}
        isMember={data.contracts.is_member}
      />

      {columnValues.map(value => (
        <td className={style.col}>{value}</td>
      ))}
    </tr>
  );
}
