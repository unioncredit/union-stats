import { formatEther } from "ethers/lib/utils";
import UnionStat from "components/UnionStat";
import useUserManagerStats from "hooks/stats/userManagerStats";
import StatCardHeader from "components/StatCardHeader";
import { daiValue } from "./values";
import LineChartUserStake from "./LineChartUserStake";

import styles from "./stats.module.css";

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
    { label: "Effective Total Stake", value: daiValue(effectiveTotalStake) },
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
        <div className={"label-blue500"}></div>
        {stats.slice(0, 1).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={stat.value}
            labelSize={"label--small"}
            valueSize={"text--x--large"}
            valueColor={"text--grey700"}
            indicatorLabelColor={"blue-500-label"}
          ></UnionStat>
        ))}

        <LineChartUserStake></LineChartUserStake>

        <div className={styles.statCardSpacerSmall}></div>

        <div className={styles.managerCardStakeInnerWrapper}>
          {stats.slice(1, 2).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              direction={styles.statVertical}
              valueSize={"text--x--large"}
              valueColor={"text--grey700"}
              labelSize={"label--small"}
            ></UnionStat>
          ))}

          {stats.slice(2, 3).map((stat) => (
              <UnionStat
                  align="center"
                  mb="28px"
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  direction={styles.statVertical}
                  labelSize={"label--small"}
                  valueSize={"text--x--large"}
                  valueColor={"text--grey700"}
                  labelPosition={"label-right"}
              ></UnionStat>
          ))}

        </div>
      </div>
    </div>
  );
}
