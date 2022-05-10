import { unionValue } from "./values";
import styles from "./stats.module.css";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import UnionStat from "../../components-ui/UnionStat";
import React from "react";
import PieChartTreasury from "./PieChartTreasury";
import StatCardHeader from "../../components-ui/StatCardHeader";

function useMarketSettingsStatsViewUnionBalanceTreasury() {
  const { reservoir1UnionBalance } = useUnionTokenStats();

  return [
    { label: "Treasury 1 balance", value: unionValue(reservoir1UnionBalance) },
  ];
}
function useMarketSettingsStatsViewUnionCompBalance() {
  const { comptrollerUnionBalance } = useUnionTokenStats();

  return [
    {
      label: "Comptroller balance",
      value: unionValue(comptrollerUnionBalance),
    },
  ];
}

export default function MarketSettingsStats() {
  const unionTreasuryBalance = useMarketSettingsStatsViewUnionBalanceTreasury();
  const unionCompBalance = useMarketSettingsStatsViewUnionCompBalance();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"Treasury"}
        cardSubtitle={"Network specific credit metrics"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        {unionTreasuryBalance.map((stat) => (
          <UnionStat
            key={stat.label}
            pb="28px"
            label={stat.label}
            value={stat.value}
            direction={styles.statVertical}
          />
        ))}

        <div className={styles.assetInnerWrapper}>
          <PieChartTreasury></PieChartTreasury>
        </div>

        {unionCompBalance.map((stat) => (
          <UnionStat
            key={stat.label}
            pb="28px"
            label={stat.label}
            value={stat.value}
            direction={styles.statHorizontal}
          />
        ))}
      </div>
    </div>
  );
}