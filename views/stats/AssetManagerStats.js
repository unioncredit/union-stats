import { Label, Text} from "@unioncredit/ui";
import { daiValue } from "./values";
import styles from "./stats.module.css";
import UnionStat from "../../components-ui/UnionStat";
import React from "react";
import useAssetManagerStats from "hooks/stats/assetManagerStats";
import LineChartAssetManagement from "./LineChartAssetManagement";

function useAssetManagerStatsViewTotal() {
  const {
    daiInLendingProtocols,

  } = useAssetManagerStats();

  return [
    {
      label: "Total Staked in Lending Protocols",
      value: daiValue(daiInLendingProtocols),
    },
  ];
}
function useAssetManagerStatsViewAaveBalance() {
  const {
    daiInAave,

  } = useAssetManagerStats();

  return [
    { label: "Aave v2 Balance", value: daiValue(daiInAave) },
  ];
}
function useAssetManagerStatsViewCompoundBalance() {
  const {
    daiInCompound,

  } = useAssetManagerStats();

  return [
    { label: "Compound Balance", value: daiValue(daiInCompound) },
  ];
}
function useAssetManagerStatsViewAdapterBalance() {
  const {
    daiInPureAdapter

  } = useAssetManagerStats();

  return [
    { label: "Pure Adapter Balance", value: daiValue(daiInPureAdapter) },
  ];
}
function useAssetManagerStatsViewAaveFloor() {
  const {
    aaveFloor,

  } = useAssetManagerStats();

  return [
    { label: "Aave V2", value: daiValue(aaveFloor) },  ];
}

function useAssetManagerStatsViewAaveCeiling() {
  const {
    aaveCeiling,

  } = useAssetManagerStats();

  return [
    { label: "Aave Ceiling", value: daiValue(aaveCeiling) },
  ];
}

function useAssetManagerStatsViewCompoundFloor() {
  const {
    compoundFloor,
  } = useAssetManagerStats();

  return [
    { label: "Compound Floor", value: daiValue(compoundFloor) },
  ];
}
function useAssetManagerStatsViewCompoundCeiling() {
  const {
    compoundCeiling,

  } = useAssetManagerStats();

  return [
    { label: "Compound Ceiling", value: daiValue(compoundCeiling) },
  ];
}

function useAssetManagerStatsViewAdapterFloor() {
  const {
    pureFloor,
  } = useAssetManagerStats();

  return [
    { label: "Pure Adapter Floor", value: daiValue(pureFloor) },

  ];
}

function useAssetManagerStatsViewAdapterCeiling() {
  const {
    pureCeiling,

  } = useAssetManagerStats();

  return [
    { label: "Pure Adapter Ceiling", value: daiValue(pureCeiling) },
  ];
}


export default function AssetManagerStats() {
  const daiInLendingProtocols = useAssetManagerStatsViewTotal();
  const daiInAave = useAssetManagerStatsViewAaveBalance();
  const daiInCompound = useAssetManagerStatsViewCompoundBalance();
  const daiInPureAdapter = useAssetManagerStatsViewAdapterBalance();
  const aaveFloor = useAssetManagerStatsViewAaveFloor();
  const aaveCeiling = useAssetManagerStatsViewAaveCeiling();
  const compoundFloor = useAssetManagerStatsViewCompoundFloor();
  const compoundCeiling = useAssetManagerStatsViewCompoundCeiling();
  const adapterFloor = useAssetManagerStatsViewAdapterFloor();
  const adapterCeiling = useAssetManagerStatsViewAdapterCeiling();



  return (
    <div className={styles.unionStatCard}>

      <div className={styles.unionStatCardHeader}>
        <div className={styles.unionStatCardHeaderContent}>
          <Text mb={"0"} size={"large"} className={"text--grey800"}>Asset Management</Text>
          <Label className={"text--grey400"}>Managed asset protocol balances and settings</Label>
        </div>
        <div className="divider"></div>
      </div>

      <div className={styles.unionStatCardBody}>
        {daiInLendingProtocols.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               labelColor={"text--grey400"}
               value={stat.value}
               valueSize={"text--large"}
               valueColor={"text--grey700"}
            />
        ))}

        <div className={styles.lineChartWrapper}>
          <LineChartAssetManagement></LineChartAssetManagement>
        </div>


        {daiInAave.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               direction={styles.statHorizontal}
               valueSize={"text--small"}
            />
        ))}

        {daiInCompound.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               direction={styles.statHorizontal}
               valueSize={"text--small"}
            />
        ))}

        {daiInPureAdapter.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               valueSize={"text--small"}
               direction={styles.statHorizontal}
            />
        ))}

        <div className={styles.assetInnerWrapper}>
          <Label className="label--primary text--grey700">
            DAI Floor / Ceiling
          </Label>
        </div>

        {aaveFloor.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               valueSize={"text--small"}
               value={stat.value}
               direction={styles.statHorizontal}
            />
        ))}

        {aaveCeiling.map((stat) => (
          <UnionStat key={stat.label}
             mb="28px"
             label={stat.label}
             valueSize={"text--small"}
             value={stat.value}
             direction={styles.statHorizontal}
          />
        ))}

        {compoundFloor.map((stat) => (
          <UnionStat key={stat.label}
             mb="28px"
             label={stat.label}
             valueSize={"text--small"}
             value={stat.value}
             direction={styles.statHorizontal}
          />
        ))}

        {compoundCeiling.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               valueSize={"text--small"}
               value={stat.value}
               direction={styles.statHorizontal}
            />
        ))}

        {adapterFloor.map((stat) => (
          <UnionStat key={stat.label}
             mb="28px"
             label={stat.label}
             valueSize={"text--small"}
             value={stat.value}
             direction={styles.statHorizontal}
          />
        ))}

        {adapterCeiling.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               valueSize={"text--small"}
               value={stat.value}
               direction={styles.statHorizontal}
            />
        ))}
      </div>
    </div>
  );
}
