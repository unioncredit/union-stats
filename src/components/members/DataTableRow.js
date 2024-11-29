import style from "./DataTableRow.module.scss";
import { Badge } from "@unioncredit/ui";
import formatN, { expandToString } from "util/formatValue";
import { IdentityColumns } from "./IdentityColumns";
import { formatUnits } from "@ethersproject/units";
import useTokenDecimals from "../../hooks/useTokenDecimals";

const formatWei = (value, decimals, digits = 2) => {
  if (!value) {
    value = 0;
  }

  // Parsed JSON response formats the bigints in scientific notation, we need to
  // expand into its full form.
  const expanded = expandToString(value);
  const formatted = formatN(formatUnits(expanded, decimals), digits);
  if (value > 0 && formatted === "0.0000") {
    return "<0.0001";
  }

  return formatted;
};

export default function DataTableRow({ address, data }) {
  const { data: decimals } = useTokenDecimals();

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
    columnValues.push(formatWei(data.contracts.vouches.amount_received, decimals));
  } else {
    columnValues.push(0);
    columnValues.push(0);
    columnValues.push(formatWei(0, decimals));
  }

  columnValues.push(formatWei(Math.max(0, data.contracts.credit_limit), decimals));
  columnValues.push(formatWei(data.contracts.total_owed.total, decimals));
  columnValues.push(<Badge className={style.badge} {...badgeProps} />);
  columnValues.push(formatWei(data.contracts.stake.total, decimals));

  columnValues.push(formatWei(data.contracts.stake.locked, decimals));
  columnValues.push(formatWei(data.contracts.stake.frozen, decimals));

  if (data.contracts.governance) {
    columnValues.push(formatWei(data.contracts.governance.balance, decimals, 0));
    columnValues.push(formatWei(data.contracts.governance.votes, decimals, 0));
    columnValues.push(formatWei(data.contracts.governance.delegated_votes, decimals, 0));
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
