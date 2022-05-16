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
    treasuryVestorBalance,
    reservoir1UnionBalance,
    comptrollerUnionBalance,
    isUnionTransferPaused,
    unionInflationPerBlock,
    halfDecayPoint,
    unionPerDAIStaked,
  } = useUnionTokenStats();

  const blocksPerDay = 5760;

  return [
    {
      label: "Total supply",
      value: unionValue(totalSupply),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Treasury vestor balance",
      value: unionValue(treasuryVestorBalance),
      chainIds: [1, 42],
    },
    {
      label: "Treasury 1 balance",
      value: unionValue(reservoir1UnionBalance),
      chainIds: [1, 42],
    },
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
    {
      label: "Transfers",
      value: isUnionTransferPaused ? "Off" : "On",
      chainIds: [1, 42, 42161],
    },
  ];
}

export default function UTokenStats() {
  const stats = useUnionStatsView();
  const chainId = useChainId();

  const unionToken = {
    1: {
      label: "Ethereum",
      address: "0x5Dfe42eEA70a3e6f93EE54eD9C321aF07A85535C",
    },
    42161: {
      label: "Arbitrum",
      address: "0x6DBDe0E7e563E34A53B1130D6B779ec8eD34B4B9",
    },
    42: {
      label: "Kovan",
      address: "0x08AF898e65493D8212c8981FAdF60Ff023A91150",
    },
  };

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"UNION Token"}
        cardSubtitle={"The native token of Union Protocol"}
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
          .slice(1, 8)
          .map((stat) =>
            stat.chainIds.includes(chainId) ? (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                direction={styles.statHorizontal}
              ></UnionStat>
            ) : null
          )}

        <div className={styles.networkWrapper}>
          <Label className={"text--grey400"}>
            Contract Address · {unionToken[chainId].label}
          </Label>
          <Text className={"text--blue500"}>{unionToken[chainId].address}</Text>
        </div>
      </div>
    </div>
  );
}
