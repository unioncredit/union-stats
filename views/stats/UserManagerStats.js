import UnionStat from "components-ui/UnionStat";
import useUserManagerStats from "hooks/stats/userManagerStats";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import React from "react";
import { formatEther } from "ethers/lib/utils";
import LineChartUserStake from "./LineChartUserStake";
import StatCardHeader from "../../components-ui/StatCardHeader";

function useUserManagerStatsView() {
  const {
    maxStakeAmount,
    totalFrozenStake,
    totalStakedDAI,
    effectiveTotalStake,
  } = useUserManagerStats();

  return [
    { label: "Total Staked DAI", value: daiValue(totalStakedDAI) },
    { label: "Total Frozen Stake", value: daiValue(totalFrozenStake) },
    { label: "Effective Total Stakes", value: daiValue(effectiveTotalStake) },
    { label: "Max Stake Amount", value: daiValue(formatEther(maxStakeAmount)) },
  ];
}

export default function UserManagerStats() {
  const stats = useUserManagerStatsView();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"User Stake"}
        cardSubtitle={"Staked user funds (DAI)"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
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

        <div className={styles.statCardSpacerSmall}></div>

        <LineChartUserStake></LineChartUserStake>

        <div className={styles.statCardSpacerSmall}></div>

        <div className={styles.unionStatCardInnerWrapper}>
          {stats.slice(1, 2).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--small"}
            ></UnionStat>
          ))}

          <div className={styles.statAlignRight}>
            {stats.slice(2, 3).map((stat) => (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                valueSize={"text--small"}
              ></UnionStat>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
