import React from "react";
import { Text, Label } from "@unioncredit/ui";
import UnionStat from "components-ui/UnionStat";
import format from "util/formatValue";
import useUTokenStats from "hooks/stats/uTokenStats";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import PieChartUtoken from "./PieChartUtoken";

function useUTokenStatsViewBorrows() {
  const {
    totalBorrows,
  } = useUTokenStats();

  return [
    { label: "Total DAI Borrowed", value: daiValue(totalBorrows) },
  ];
}
function useUTokenStatsViewRedeemable() {
  const {
    totalRedeemable,
  } = useUTokenStats();

  return [
    { label: "Total Redeemable", value: daiValue(totalRedeemable) },
  ];
}
function useUTokenStatsViewReserves() {
  const {
    totalReserves,
  } = useUTokenStats();

  return [
    { label: "Total Reserves", value: daiValue(totalReserves) },
  ];
}
function useUTokenStatsViewSupply() {
  const {
    uTokenSupply,
  } = useUTokenStats();

  return [
    { label: "Total uDAI Supply", value: <>{format(uTokenSupply, 4)} uDAI</> },

  ];
}
function useUTokenStatsViewRate() {
  const {
    uTokenRate,
  } = useUTokenStats();

  return [
    { label: "DAI/uDAI Exchange Rate", value: format(uTokenRate, 4) },
  ];
}
function useUTokenStatsViewDefaulted() {
  const {
    defaultedAmount,
  } = useUTokenStats();

  return [
    { label: "Defaulted Amount", value: daiValue(defaultedAmount) },
  ];
}

export default function UTokenStats() {
  const statsBorrows = useUTokenStatsViewBorrows();
  const statsRedeemable = useUTokenStatsViewRedeemable();
  const statsReserves = useUTokenStatsViewReserves();
  const statsSupply = useUTokenStatsViewSupply();
  const statsRate = useUTokenStatsViewRate();
  const statsDefaulted = useUTokenStatsViewDefaulted();

  return (
    <div className={styles.unionStatCard}>

      <div className={styles.unionStatCardHeader}>
        <div className={styles.unionStatCardHeaderContent}>
          <Text mb={"0"} size={"large"} className={"text--grey800"}>uToken</Text>
          <Label className={"text--grey400" + " text--weight-regular" }>Statistics related to uDAI supply and reserves</Label>
        </div>
        <div className="divider"></div>
      </div>

      <div className={styles.unionStatCardBody}>

        <div className={styles.unionStatCardInnerWrapper}>
          {statsSupply.map((stat) => (
            <UnionStat key={stat.label}
              mb="28px"
              label={stat.label}
              value={stat.value}
              valueSize="text--large"
              valueColor={"text--grey600"}
            />
          ))}

          {statsBorrows.map((stat) => (
            <UnionStat key={stat.label}
              mb="28px"
              label={stat.label}
              value={stat.value}
               align="center"
            />
          ))}
        </div>

        <div className={styles.assetInnerWrapper}>
          <PieChartUtoken></PieChartUtoken>
        </div>

        {statsReserves.map((stat) => (
          <UnionStat key={stat.label}
              align="center"
              mb="28px"
              labelSize={"label--primary"}
              label={stat.label}
              value={stat.value}
              valueSize={"text--small"}
              direction={styles.statHorizontal}
          />
        ))}

        {statsDefaulted.map((stat) => (
          <UnionStat key={stat.label}
             align="center"
             mb="28px"
             labelSize={"label--primary"}
             label={stat.label}
             value={stat.value}
             direction={styles.statHorizontal}
          />
        ))}

        {statsRedeemable.map((stat) => (
          <UnionStat key={stat.label}
            align="center"
            mb="28px"
            labelSize={"label--primary"}
            label={stat.label}
            value={stat.value}
            direction={styles.statHorizontal}
          />
        ))}

        {statsRate.map((stat) => (
          <UnionStat key={stat.label}
              align="center"
              mb="28px"
              labelSize={"label--primary"}
              label={stat.label}
              value={stat.value}
              direction={styles.statHorizontal}
          />
        ))}
      </div>
    </div>
  );
}
