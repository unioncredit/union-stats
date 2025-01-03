import React from "react";
import PropTypes from "prop-types";
import { Text } from "@unioncredit/ui";

import { chainIdState } from "hooks/useChainId";

import styles from "./UnionStatCard.module.css";

export default function StatCardHeader({ cardTitle, cardSubtitle }) {
  const imgValue = chainIdState.useValue([]);
  const imgPath = `/images/${imgValue}.png`;

  return (
    <div className={styles.unionStatCardHeader}>
      <div className={styles.unionStatCardHeaderContent}>
        <Text value={"sss"} mb={"0"} size={"large"} className={"text--grey800"}>
          {cardTitle}
        </Text>
        <Text className={"text--grey400"}>{cardSubtitle}</Text>
      </div>
      <div className={styles.avatar}>
        <img src={imgPath} />
      </div>
      <div className="divider"></div>
    </div>
  );
}

StatCardHeader.defaultProps = {
  cardTitle: "UNION Token",
  cardSubtitle: "The native token of the Union Protocol",
};

StatCardHeader.propTypes = {
  cardSubtitle: PropTypes.node.isRequired,
  cardTitle: PropTypes.node.isRequired,
};
