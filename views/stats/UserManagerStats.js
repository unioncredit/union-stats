import { Label, Text} from "@unioncredit/ui";
import UnionStat from "components-ui/UnionStat"
import useUserManagerStats from "hooks/stats/userManagerStats";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import React from "react";
import LineChartUserStake from "./LineChartUserStake";

function useUserManagerStatsViewTotal() {
  const {
    totalStakedDAI,

  } = useUserManagerStats();

  return [
    { label: "Total Staked DAI", value: daiValue(totalStakedDAI) },
  ];
}
function useUserManagerStatsViewFrozen() {
  const {
    totalFrozenStake,
  } = useUserManagerStats();

  return [
    { label: "Total Frozen Stake (Defaulted)", value: daiValue(totalFrozenStake) },
  ];
}
function useUserManagerStatsViewEffective() {
  const {
    effectiveTotalStake,
  } = useUserManagerStats();

  return [
    { label: "Effective Total Stakes", value: daiValue(effectiveTotalStake) },
  ];
}

export default function graphUserStakedView() {
  const maxTotal = useUserManagerStatsViewTotal();
  const maxFrozen = useUserManagerStatsViewFrozen();
  const maxEffective = useUserManagerStatsViewEffective();


  return  (

    <div className={styles.unionStatCard}>

      <div className={styles.unionStatCardHeader}>
        <div className={styles.unionStatCardHeaderContent}>
          <Text mb={"0"} size={"large"} className={"text--grey800"}>User Stake</Text>
          <Label className={"text--grey400" + " text--weight-regular" }>Staked user funds (DAI)</Label>
        </div>
        <div className="divider"></div>
      </div>

      <div className={styles.unionStatCardBody}>

        {maxTotal.map((stat) => (
          <UnionStat key={stat.label}
             pb="28px"
             label={stat.label}
             value={stat.value}
             direction={styles.statVertical}
             valueSize={"text--large"}
             labelColor={"text--grey400"}
             valueColor={"text--grey700"}
          />
        ))}

        <div className={styles.lineChartWrapper}>
          <LineChartUserStake></LineChartUserStake>
        </div>

        <div className={styles.unionStatCardInnerWrapper}>
          {maxFrozen.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               direction={styles.statVertical}
               valueSize={"text--large"}
            />
          ))}

          {maxEffective.map((stat) => (
              <UnionStat key={stat.label}
                 mb="28px"
                 label={stat.label}
                 value={stat.value}
                 direction={styles.statVertical}
                 valueSize={"text--large"}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
