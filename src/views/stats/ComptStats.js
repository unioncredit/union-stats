import styles from "./stats.module.css";

import useUnionTokenStats from "hooks/stats/unionTokenStats";
import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useChainId from "hooks/useChainId";
import { daiValue, unionValue } from "./values";
import { chain } from "constants/app";
import { isChainV2 } from "../../util/chain";

function useUnionStatsView() {
  const chainId = useChainId();
  const {
    comptrollerUnionBalance,
    unionInflationPerBlock,
    unionInflationPerSecond,
    halfDecayPoint,
    unionPerDAIStaked,
  } = useUnionTokenStats();

  const blocksPerDay = isChainV2(chainId) ? 86400 : 5760;

  return [
    {
      label: "Balance in Contract",
      value: unionValue(comptrollerUnionBalance),
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
    {
      label: `Inflation per ${isChainV2(chainId) ? "second" : "block"}`,
      value: unionValue(
        isChainV2(chainId) ? unionInflationPerSecond : unionInflationPerBlock
      ),
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
    {
      label: "Daily UNION per 1k DAI Staked",
      value: unionValue(
        unionPerDAIStaked ? unionPerDAIStaked * 1000 * blocksPerDay : 0
      ),
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
    {
      label: "Half decay point",
      value: daiValue(halfDecayPoint, 0),
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
  ];
}

export default function UTokenStats() {
  const stats = useUnionStatsView();
  const chainId = useChainId();

  return (
    <div className={styles.unionStatCard}>
      <div className={"card-header-wrapper"}>
        <StatCardHeader
          cardTitle={"Comptroller"}
          cardSubtitle={"UNION token emissions, balances and parameters"}
        ></StatCardHeader>
      </div>
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
        <div className={styles.mobileBreak}>
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
    </div>
  );
}
