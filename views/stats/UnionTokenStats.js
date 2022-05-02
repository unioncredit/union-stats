import { Label, Text } from "@unioncredit/ui";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import { unionValue, daiValue } from "./values";
import styles from "./stats.module.css";
import UnionStat from "../../components-ui/UnionStat";
import StatCardHeader from "../../components-ui/StatCardHeader";
import React from "react";

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
    { label: "Total supply", value: unionValue(totalSupply) },
    {
      label: "Treasury vestor balance",
      value: unionValue(treasuryVestorBalance),
    },
    { label: "Treasury 1 balance", value: unionValue(reservoir1UnionBalance) },
    {
      label: "Comptroller balance",
      value: unionValue(comptrollerUnionBalance),
    },
    {
      label: "Inflation per Block",
      value: unionValue(unionInflationPerBlock, 8),
    },
    {
      label: "Union per 1K DAI staked per day",
      value: unionValue(
        unionPerDAIStaked ? unionPerDAIStaked * 1000 * blocksPerDay : 0,
        8
      ),
    },
    { label: "Half decay point", value: daiValue(halfDecayPoint) },
    { label: "Transfers", value: isUnionTransferPaused ? "Off" : "On" },
  ];
}

export default function UTokenStats() {
  const stats = useUnionStatsView();
  const ethAddress = "0x1007a39088c22a4dfe54032f08fc47a7303603df";
  const arbitrumAddress = "0x1007a39088c22a4dfe54032f08fc47a7303603df";

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"UNION Token"}
        cardSubtitle={"The native token of Union Protocol"}
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

        {stats.slice(1, 8).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={stat.value}
            valueSize={"text--small"}
            direction={styles.statHorizontal}
          ></UnionStat>
        ))}

        <div className={styles.networkWrapper}>
          <Label className={"text--grey400"}>Contract Address · Ethereum</Label>
          <Text className={"text--blue500"}>{ethAddress}</Text>
        </div>

        <div className={styles.networkWrapper}>
          <Label className={"text--grey400"}>Contract Address · Arbitrum</Label>
          <Text className={"text--blue500"}>{arbitrumAddress}</Text>
        </div>
      </div>
    </div>
  );
}
