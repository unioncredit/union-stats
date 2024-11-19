import { formatEther } from "ethers/lib/utils";
import UnionStat from "components/UnionStat";
import useUserManagerStats from "hooks/stats/userManagerStats";
import StatCardHeader from "components/StatCardHeader";
import { tokenValue } from "./values";
import useCurToken from "hooks/useCurToken";
import LineChartUserStake from "./LineChartUserStake";

import styles from "./stats.module.css";

function useUserManagerStatsView() {
  const { maxStakeAmount, totalFrozenStake, totalStaked, effectiveTotalStake } =
    useUserManagerStats();

  const curToken = useCurToken();

  return [
    {
      label: `Total Staked ${curToken}`,
      value: tokenValue(totalStaked, null, curToken),
    },
    {
      label: "Total Frozen Stake",
      value: tokenValue(totalFrozenStake, null, curToken),
    },
    {
      label: "Effective Total Stake",
      value: tokenValue(effectiveTotalStake, null, curToken),
    },
    {
      label: "Max Stake Amount",
      value: tokenValue(formatEther(maxStakeAmount), null, curToken),
    },
  ];
}

export default function UserManagerStats() {
  const stats = useUserManagerStatsView();
  const curToken = useCurToken();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"User Stake"}
        cardSubtitle={`Staked user funds (${curToken})`}
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

        <LineChartUserStake />

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
