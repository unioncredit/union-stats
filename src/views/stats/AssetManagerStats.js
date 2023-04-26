import styles from "./stats.module.css";

import { Label } from "@unioncredit/ui";

import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useChainId from "hooks/useChainId";
import useAssetManagerStats from "hooks/stats/assetManagerStats";
import { daiValue } from "./values";
import AssetGraph from "./LineChartAssetManagement";
import format from "util/formatValue";
import { chain } from "constants/app";

function useAssetManagerStatsView() {
  const {
    daiInLendingProtocols,
    assetManagerDAIBalance,

    daiInCompound,
    compoundFloor,
    compoundCeiling,

    daiInAave,
    aaveFloor,
    aaveCeiling,

    daiInPureAdapter,
    pureFloor,
    pureCeiling,

    daiInAaveV3,
    aaveV3Floor,
    aaveV3Ceiling,
  } = useAssetManagerStats();

  return [
    {
      label: "Total staked in adapters",
      value: daiInLendingProtocols,
    },
    {
      label: "AssetManager Balance",
      value: assetManagerDAIBalance,
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
    {
      label: "Aave v2 Balance",
      value: daiInAave,
      chainIds: [chain.mainnet.id],
    },
    {
      label: "Aave v3 Balance",
      value: daiInAaveV3,
      chainIds: [chain.optimism.id, chain.opgoerli.id, chain.arbitrum.id],
    },
    {
      label: "Compound Balance",
      value: daiInCompound,
      valueTwo: "",
      chainIds: [chain.mainnet.id],
    },
    {
      label: "Pure Adapter Balance",
      value: daiInPureAdapter,
      valueTwo: "",
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
    {
      label: "Aave V2",
      value: aaveFloor,
      valueTwo: aaveCeiling,
      specialChar: " / ",
      chainIds: [chain.mainnet.id],
    },
    {
      label: "Aave V3",
      value: aaveV3Floor,
      valueTwo: aaveV3Ceiling,
      specialChar: " / ",
      chainIds: [chain.optimism.id, chain.opgoerli.id, chain.arbitrum.id],
    },
    {
      label: "Compound",
      value: compoundFloor,
      valueTwo: compoundCeiling,
      specialChar: " / ",
      chainIds: [chain.mainnet.id],
    },
    {
      label: "Pure Adapter",
      value: pureFloor,
      valueTwo: pureCeiling,
      specialChar: " / ",
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
      ],
    },
  ];
}

export default function AssetManagerStats() {
  const stats = useAssetManagerStatsView();
  const chainId = useChainId();

  let indicators;

  if (chainId === 1) {
    indicators = (
      <div className={styles.indicatorWrapper}>
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
      </div>
    );
  }

  if (
    [chain.optimism.id, chain.opgoerli.id, chain.arbitrum.id].includes(chainId)
  ) {
    indicators = (
      <div className={styles.indicatorWrapper}>
        <div className={styles.indicatorInnerWrapper}>
          <span className={styles.indicatorPointPure}></span>
          <div>Pure Adapter</div>
        </div>
        <div className={styles.indicatorInnerWrapper}>
          <span className={styles.indicatorPointAavev3}></span>
          <div>Aave v3</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle="Asset Management"
        cardSubtitle="Managed asset protocol balances and settings"
      />

      <div className={styles.unionStatCardBody}>
        {stats.slice(0, 1).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={daiValue(stat.value)}
            valueSize="text--x--large"
            valueColor="text--grey700"
          />
        ))}

        <AssetGraph />

        {indicators}

        <div className={styles.statCardSpacerSmall}></div>

        {stats
          .slice(2, 6)
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

        {stats
          .slice(6)
          .map((stat) =>
            stat.chainIds.includes(chainId) ? (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={format(stat.value, 0)}
                valueTwo={format(stat.valueTwo, 0)}
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
