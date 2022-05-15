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
  const ethAddress = "0x1007a39088c22a4dfe54032f08fc47a7303603df";
  const arbitrumAddress = "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1";
  const kovanAddress = "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa";
  const chainId = useChainId();
  let contractAddress;

  if (chainId === 1) {
    contractAddress = (
      <div className={styles.networkWrapper}>
        <Label className={"text--grey400"}>Contract Address · Ethereum</Label>
        <Text className={"text--blue500"}>{ethAddress}</Text>
      </div>
    );
  }

  if (chainId === 42161) {
    contractAddress = (
      <div className={styles.networkWrapper}>
        <Label className={"text--grey400"}>Contract Address · Arbitrum</Label>
        <Text className={"text--blue500"}>{arbitrumAddress}</Text>
      </div>
    );
  }

  if (chainId === 42) {
    contractAddress = (
      <div className={styles.networkWrapper}>
        <Label className={"text--grey400"}>Contract Address · Kovan</Label>
        <Text className={"text--blue500"}>{kovanAddress}</Text>
      </div>
    );
  }

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
                labelSize={"text--medium"}
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

        {contractAddress}
      </div>
    </div>
  );
}
