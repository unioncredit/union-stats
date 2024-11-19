import style from "./DataTableRow.module.scss";
import { Badge } from "@unioncredit/ui";
import formatN, { expandToString } from "util/formatValue";
import { IdentityColumns } from "./IdentityColumns";
import { formatEther } from "ethers/lib/utils";

const formatWei = (value, digits = 2) => {
  if (!value) {
    value = 0;
  }

  // Parsed JSON response formats the bigints in scientific notation, we need to
  // expand into its full form.
  const expanded = expandToString(value);
  const formatted = formatN(formatEther(expanded), digits);
  if (value > 0 && formatted === "0.0000") {
    return "<0.0001";
  }

  return formatted;
};

export default function DataTableRow({ address, data }) {
  const badgeProps = data.contracts.is_overdue
    ? { label: "Overdue", color: "red" }
    : data.contracts.total_owed.total > 0
    ? { label: "Borrowing", color: "green" }
    : data.contracts.is_member
    ? { label: "Member", color: "blue" }
    : { label: "Not a member", color: "grey" };

  const columnValues = [];

  // todo: fix this - ens with hyphens are not being indexed correctly
  if (data.contracts.vouches) {
    columnValues.push(data.contracts.vouches.number_received);
    columnValues.push(data.contracts.vouches.number_given);
    columnValues.push(formatWei(data.contracts.vouches.amount_received));
  } else {
    columnValues.push(0);
    columnValues.push(0);
    columnValues.push(formatWei(0));
  }

  columnValues.push(formatWei(Math.max(0, data.contracts.credit_limit)));
  columnValues.push(formatWei(data.contracts.total_owed.total));
  columnValues.push(<Badge className={style.badge} {...badgeProps} />);
  columnValues.push(formatWei(data.contracts.stake.total));

  columnValues.push(formatWei(data.contracts.stake.locked));
  columnValues.push(formatWei(data.contracts.stake.frozen));

  if (data.contracts.governance) {
    columnValues.push(formatWei(data.contracts.governance.balance, 0));
    columnValues.push(formatWei(data.contracts.governance.votes, 0));
    columnValues.push(formatWei(data.contracts.governance.delegated_votes, 0));
  }

  return (
    <tr className={style.row}>
      <IdentityColumns address={address} isMember={data.contracts.is_member} />

      {columnValues.map((value, index) => (
        <td key={index} className={style.col}>
          {value}
        </td>
      ))}
    </tr>
  );
}
