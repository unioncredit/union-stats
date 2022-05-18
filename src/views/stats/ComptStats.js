import { Label, Text } from "@unioncredit/ui";

import useUnionTokenStats from "hooks/stats/unionTokenStats";
import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useChainId from "hooks/useChainId";
import { unionValue, daiValue } from "./values";

import styles from "./stats.module.css";

function useUnionStatsView() {
  const {
    totalSupply,
    comptrollerUnionBalance,
    unionInflationPerBlock,
    halfDecayPoint,
    unionPerDAIStaked,
  } = useUnionTokenStats();

  const blocksPerDay = 5760;

  return [
    {
      label: "Comptroller balance",
      value: unionValue(comptrollerUnionBalance),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Inflation per Block",
      value: unionValue(unionInflationPerBlock, 8),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Union per 1K DAI staked per day",
      value: unionValue(
          unionPerDAIStaked ? unionPerDAIStaked * 1000 * blocksPerDay : 0,
          8
      ),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Half decay point",
      value: daiValue(halfDecayPoint),
      chainIds: [1, 42, 42161],
    },
  ];
}

export default function UTokenStats() {
  const stats = useUnionStatsView();
  const chainId = useChainId();

  {/*
  TOdo --- Actual inflation stat
*/}


  return (
      <div className={styles.unionStatCard}>
        <StatCardHeader
            cardTitle={"Comptroller"}
            cardSubtitle={"make this a title liam"}
        ></StatCardHeader>


        <div className={styles.unionStatCardBody}>
          {stats
              .slice(0, 1)
              .map((stat) =>
                stat.chainIds.includes(chainId) ? (
                  <UnionStat
                      align="center"
                      mb="28px"
                      key={stat.label}
                      label={stat.label}
                      value={stat.value}
                      valueSize={"text--x--large"}
                      valueColor={"text--grey700"}
                      labelSize={"text--small"}
                  ></UnionStat>
                ) : null
              )}

          <div className={styles.statCardSpacerSmall}></div>

            {stats
              .slice(1, 4)
              .map((stat) =>
                stat.chainIds.includes(chainId) ? (
                  <UnionStat
                      align="center"
                      mb="28px"
                      key={stat.label}
                      direction={styles.statHorizontal}
                      label={stat.label}
                      value={stat.value}
                      valueSize={"text--large"}
                      valueColor={"text--grey700"}
                      labelSize={"text--small"}
                  ></UnionStat>
                ) : null
              )}
        </div>
      </div>
  );
}
