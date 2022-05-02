import { Label, Text } from "@unioncredit/ui";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import { unionValue } from "./values";
import styles from "./stats.module.css";
import UnionStat from "../../components-ui/UnionStat";
import React from "react";

function useUnionStatsViewSupply() {
  const { totalSupply } = useUnionTokenStats();

  return [{ label: "Total supply", value: unionValue(totalSupply) }];
}
function useUnionStatsViewBalance() {
  const { treasuryVestorBalance } = useUnionTokenStats();

  return [
    {
      label: "Treasury vestor balance",
      value: unionValue(treasuryVestorBalance),
    },
  ];
}
function useUnionStatsViewReservoir1Balance() {
  const { reservoir1UnionBalance } = useUnionTokenStats();

  return [
    { label: "Treasury 1 balance", value: unionValue(reservoir1UnionBalance) },
  ];
}

export default function UTokenStats() {
  const totalSupply = useUnionStatsViewSupply();
  const totalBalance = useUnionStatsViewBalance();
  const totalReservoirBalance = useUnionStatsViewReservoir1Balance();
  const ethAddress = "0x1007a39088c22a4dfe54032f08fc47a7303603df";
  const arbitrumAddress = "0x1007a39088c22a4dfe54032f08fc47a7303603df";

  return (
    <div className={styles.unionStatCard}>
      <div className={styles.unionStatCardHeader}>
        <div className={styles.unionStatCardHeaderContent}>
          <Text mb={"0"} size={"large"} className={"text--grey800"}>
            UNION Token
          </Text>
          <Label className={"text--grey400"}>
            The native token of Union Protocol
          </Label>
        </div>
        <div className="divider"></div>
      </div>

      <div className={styles.unionStatCardBody}>
        {totalSupply.map((stat) => (
          <UnionStat
            key={stat.label}
            label={stat.label}
            labelSize={"label--primary"}
            valueSize={"text--large"}
            value={stat.value}
            direction={styles.statVertical}
          />
        ))}

        <div className={styles.unionStatCardInnerWrapper}>
          {totalBalance.map((stat) => (
            <UnionStat
              key={stat.label}
              labelSize={"label--primary"}
              label={stat.label}
              value={stat.value}
              direction={styles.statVertical}
            />
          ))}

          {totalReservoirBalance.map((stat) => (
            <UnionStat
              key={stat.label}
              pb="28px"
              labelSize={"label--primary"}
              label={stat.label}
              value={stat.value}
              direction={styles.statVertical}
            />
          ))}
        </div>

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
