import { Label } from "@unioncredit/ui";
import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useChainId from "hooks/useChainId";
import useAssetManagerStats from "hooks/stats/assetManagerStats";
import { daiValue } from "./values";
import AssetGraph from "./LineChartAssetManagement";
import styles from "./stats.module.css";
import GovernanceStats from "./GovernanceStats";

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
    assetManagerDAIBalance,
  } = useAssetManagerStats();

  return [
    {
      label: "Total staked in adapters",
      value: daiInLendingProtocols,
    },
    {
      label: "AssetManager Balance",
      value: assetManagerDAIBalance,
      chainIds: [1, 42, 42161],
    },
    { label: "Aave v2 Balance", value: daiInAave, chainIds: [1] },
    {
      label: "Compound Balance",
      value: daiInCompound,
      chainIds: [1],
    },
    {
      label: "Pure Adapter Balance",
      value: daiInPureAdapter,
      chainIds: [1, 42161, 42],
    },
    { label: "Aave V2",
      value: aaveFloor,
      valueTwo: aaveCeiling,
      specialChar: " / ",
      chainIds: [1, 42],
    },
    {
      label: "Compound",
      value: compoundFloor,
      valueTwo: compoundCeiling,
      specialChar: " / ",
      chainIds: [1, 42],
    },
    {
      label: "Pure Adapter",
      value: pureFloor,
      valueTwo: "1 Billion",
      specialChar: " / ",
      chainIds: [1, 42, 42161],
    },
  ];
}

{/*Todo
      - Display floor and ceiling on one Line ex: Pure Adapter 20.000/100.000
*/}

export default function AssetManagerStats() {
  const stats = useAssetManagerStatsView();
  const chainId = useChainId();

  let indicators

  if (chainId === 1) {
    indicators = <div className={styles.indicatorWrapper}>
      <div className={styles.indicatorInnerWrapper}>
        <span className={styles.indicatorPointCompound}></span>
        <div>Compound</div>
      </div>
      <div className={styles.indicatorInnerWrapper}>
        <span className={styles.indicatorPointAave}></span>
        <div>Aave v2</div>
      </div>
      <div className={styles.indicatorInnerWrapper}>
        <span className={styles.indicatorPointPure}></span>
        <div>Pure Adapter</div>
      </div>
    </div>;
  }

  if (chainId === 42) {
    indicators =
      <div className={styles.indicatorWrapper}>
        <div className={styles.indicatorInnerWrapper}>
          <span className={styles.indicatorPointPure}></span>
          <div>Pure Adapter</div>
        </div>
      </div>;
  }

  if (chainId === 42161) {
    indicators =
      <div className={styles.indicatorWrapper}>
        <div className={styles.indicatorInnerWrapper}>
          <span className={styles.indicatorPointPure}></span>
          <div>Pure Adapter</div>
        </div>
      </div>;
  }

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
            value={daiValue(stat.value)}
            valueSize={"text--x--large"}
            valueColor={"text--grey700"}
          ></UnionStat>
        ))}

        <AssetGraph />

        {indicators}

        <div className={styles.statCardSpacerSmall}></div>

        {stats
          .slice(2,5)
          .map((stat) =>
            stat.chainIds.includes(chainId) ? (
              <UnionStat
                  align="center"
                  mb="28px"
                  key={stat.label}
                  label={stat.label}
                  value={daiValue(stat.value)}
                  labelSize={"label--medium"}
                  direction={styles.statHorizontal}
              ></UnionStat>
            ) : null
          )}


        <div className={styles.statCardSpacerSmall}></div>

        <div className="divider"></div>

        <div className={styles.assetInnerWrapper}>
          <Label className="label--primary text--grey700">
            DAI Floor / Ceiling
          </Label>
        </div>


        {/* Todo remove the last .0 here*/}
        {stats
          .slice(5,11)
          .map((stat) =>
            stat.chainIds.includes(chainId) ? (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={daiValue(stat.value)}
                valueTwo={stat.valueTwo}
                specialChar={stat.specialChar}
                labelSize={"label--medium"}
                direction={styles.statHorizontal}
              ></UnionStat>
            ) : null
          )}
      </div>
    </div>
  );
}
