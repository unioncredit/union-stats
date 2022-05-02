import { Label } from "@unioncredit/ui";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import UnionStat from "../../components-ui/UnionStat";
import React from "react";
import useAssetManagerStats from "hooks/stats/assetManagerStats";
import LineChartAssetManagement from "./LineChartAssetManagement";
import StatCardHeader from "../../components-ui/StatCardHeader";

function useAssetManagerStatsView() {
  const {
    daiInLendingProtocols,
    daiInCompound,
    compoundFloor,
    compoundCeiling,
    daiInAave,
    aaveFloor,
    aaveCeiling,
    daiInPureAdapter,
    pureFloor,
    pureCeiling,
  } = useAssetManagerStats();

  return [
    {
      label: "Total Staked in Lending Protocols",
      value: daiValue(daiInLendingProtocols),
    },
    { label: "Aave v2 Balance", value: daiValue(daiInAave) },
    { label: "Compound Balance", value: daiValue(daiInCompound) },
    { label: "Pure Adapter Balance", value: daiValue(daiInPureAdapter) },
    { label: "Aave Floor", value: daiValue(aaveFloor) },
    { label: "Aave Ceiling", value: daiValue(aaveCeiling) },
    { label: "Compound Floor", value: daiValue(compoundFloor) },
    { label: "Compound Ceiling", value: daiValue(compoundCeiling) },
    { label: "Pure Adapter Floor", value: daiValue(pureFloor) },
    { label: "Pure Adapter Ceiling", value: daiValue(pureCeiling) },
  ];
}

export default function AssetManagerStats() {
  const stats = useAssetManagerStatsView();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"Asset Management"}
        cardSubtitle={"Managed asset protocol balances and settings"}
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

        <LineChartAssetManagement></LineChartAssetManagement>

        <div className={styles.statCardSpacerSmall}></div>

        {stats.slice(1, 4).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={stat.value}
            direction={styles.statHorizontal}
          ></UnionStat>
        ))}

        <div className={styles.statCardSpacerSmall}></div>

        <div className="divider"></div>

        <div className={styles.assetInnerWrapper}>
          <Label className="label--primary text--grey700">
            DAI Floor / Ceiling
          </Label>
        </div>

        {stats.slice(4, 10).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={stat.value}
            direction={styles.statHorizontal}
          ></UnionStat>
        ))}
      </div>
    </div>
  );
}
