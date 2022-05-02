import React from "react";
import PropTypes from "prop-types";
import { Text, Label } from "@unioncredit/ui";
import styles from "././UnionStatCard.module.css";

export default function StatCardHeader({ cardTitle, cardSubtitle }) {
  return (
    <div className={styles.unionStatCardHeader}>
      <div className={styles.unionStatCardHeaderContent}>
        <Text value={"sss"} mb={"0"} size={"large"} className={"text--grey800"}>
          {cardTitle}
        </Text>
        <Label className={"text--grey400"}>{cardSubtitle}</Label>
      </div>
      <div className={styles.avatar}>
        <img src="/images/ethereum.png" />
      </div>
      <div className="divider"></div>
    </div>
  );
}

StatCardHeader.defaultProps = {
  cardTitle: "UNION Token",
  cardSubtitle: "The native token of Union Protocol",
};

StatCardHeader.propTypes = {
  cardSubtitle: PropTypes.node.isRequired,
  cardTitle: PropTypes.node.isRequired,
};
