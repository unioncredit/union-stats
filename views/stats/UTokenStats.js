import React from "react";
import { UsageChart } from "@unioncredit/ui";
import UnionStat from "components-ui/UnionStat";
import format from "util/formatValue";
import useUTokenStats from "hooks/stats/uTokenStats";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import StatCardHeader from "../../components-ui/StatCardHeader";

export default function UTokenStats() {
  const {
    uTokenSupply,
    totalBorrows,
    totalReserves,
    totalRedeemable,
    uTokenRate,
    defaultedAmount,
  } = useUTokenStats();

  const stats = [
    { label: "Total uDAI Supply", value: <>{format(uTokenSupply, 4)} uDAI</> },
    { label: "Total DAI Borrowed", value: daiValue(totalBorrows) },
    { label: "Total Reserves", value: daiValue(totalReserves) },
    { label: "Defaulted Amount", value: daiValue(defaultedAmount) },
    { label: "Total Redeemable", value: daiValue(totalRedeemable) },
    { label: "DAI/uDAI Exchange Rate", value: format(uTokenRate, 4) },
  ];

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
              valueSize={"text--x--large"}
              valueColor={"text--grey700"}
              indicatorLabelColor={"blue-500"}
            ></UnionStat>
          ))}

          {stats.slice(1, 2).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--x--large"}
              valueColor={"text--grey700"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.assetInnerWrapper}>
          <UsageChart
            data={[totalBorrows, totalRedeemable, totalReserves].map(Number)}
          />
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
