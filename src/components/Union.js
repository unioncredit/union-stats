import { ReactComponent as UnionSymbol } from "@unioncredit/ui/lib/icons/union.svg";

import styles from "./union.module.css";

export function Union({ value, symbol = "UNION" }) {
  return (
    <>
      {value} <span>{symbol}</span>
    </>
  );
}
