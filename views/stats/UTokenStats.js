import React from "react";
import UnionStat from "components-ui/UnionStat";
import format from "util/formatValue";
import useUTokenStats from "hooks/stats/uTokenStats";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import PieChartUtoken from "./PieChartUtoken";
import StatCardHeader from "../../components-ui/StatCardHeader";

function useUTokenStatsView() {
  const {
    uTokenSupply,
    totalBorrows,
    totalReserves,
    totalRedeemable,
    uTokenRate,
    defaultedAmount,
  } = useUTokenStats();

  return [
    { label: "Total Supply", value: <>{format(uTokenSupply, 4)} uDAI</> },
    { label: "Total DAI Borrowed", value: daiValue(totalBorrows) },
    { label: "Total Reserves", value: daiValue(totalReserves) },
    { label: "Defaulted Amount", value: daiValue(defaultedAmount) },
    { label: "Total Redeemable", value: daiValue(totalRedeemable) },
    { label: "DAI/uDAI Exchange Rate", value: format(uTokenRate, 4) },
  ];
}

export default function UTokenStats() {
  const stats = useUTokenStatsView();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"uToken"}
        cardSubtitle={"Statistics related to uDAI supply and reserves"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        <div className={styles.unionStatCardInnerWrapper}>
          {stats.slice(0, 1).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--large"}
            ></UnionStat>
          ))}

          {stats.slice(1, 2).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--large"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.assetInnerWrapper}>
          <PieChartUtoken></PieChartUtoken>
        </div>

        <div className={styles.statCardSpacerSmall}></div>

        {stats.slice(2, 6).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={stat.value}
            direction={styles.statHorizontal}
            valueSize={"text--small"}
          ></UnionStat>
        ))}
      </div>
    </div>
  );
}
