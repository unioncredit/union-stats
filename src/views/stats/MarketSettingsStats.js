import { formatUnits } from "@ethersproject/units";
import format, { formatDetailed } from "util/formatValue";
import useMarketSettingsStats from "hooks/stats/marketSettingsStats";
import { toPercent } from "util/numbers";
import useChainId from "hooks/useChainId";
import { BLOCK_SPEED } from "constants/variables";
import { daiValue, unionValue } from "./values";
import StatCardHeader from "components/StatCardHeader";
import UnionStat from "components/UnionStat";
import styles from "./stats.module.css";
import { isChainV2 } from "../../util/chain";

function useMarketSettingsStatsView() {
  const {
    interestRate,
    originationFee,
    memberFee,
    minBorrow,
    maxBorrow,
    reserveFactor,
    overdueBlocks,
    maxOverdueTime,
    debtCeiling,
  } = useMarketSettingsStats();

  const chainId = useChainId();

  const overdueHours = overdueBlocks
    ?.mul(BLOCK_SPEED[chainId])
    ?.div(3600)
    .toNumber();

  const overdueDays = overdueBlocks
    ?.mul(BLOCK_SPEED[chainId])
    ?.div(86400)
    .toNumber();

  const maxOverdueTimeDays = maxOverdueTime
    ?.mul(BLOCK_SPEED[chainId])
    ?.div(86400)
    .toNumber();

  return [
    { label: "Borrow APR", value: toPercent(interestRate || 0, 2) },
    { label: "Origination Fee", value: toPercent(originationFee || 0, 2) },
    { label: "Min Borrow", value: daiValue(minBorrow, 0) },
    {
      label: "Membership Fee",
      value: unionValue(formatUnits(memberFee || 0, 18), 2),
    },
    { label: "Max Borrow", value: daiValue(maxBorrow, 0) },
    { label: "Reserve Factor", value: format(reserveFactor, 2) },
    {
      label: "Overdue Period",
      value: overdueBlocks
        ? formatDetailed(overdueBlocks, 0) +
          (overdueHours < 48
            ? " (" + overdueHours + " Hours)"
            : " (" + overdueDays + " Days)")
        : "N/A",
    },
    {
      label: "Debt Ceiling",
      value: daiValue(debtCeiling, 0),
    },
    ...(isChainV2(chainId)
      ? [
          {
            label: "Max. Overdue Period",
            value: maxOverdueTime
              ? `${formatDetailed(
                  maxOverdueTime,
                  0
                )} (${maxOverdueTimeDays} days)`
              : "N/A",
          },
        ]
      : []),
  ];
}

export default function MarketSettingsStats() {
  const stats = useMarketSettingsStatsView();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"Market Settings"}
        cardSubtitle={"Network specific credit metrics"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        {/*
         <div className={styles.unionStatCardNetworkWrapper}>
          <img src={"/images/ethereum.svg"}/>
          <span>Ethereum</span>
        </div>
        */}

        <div className={styles.unionStatCardInnerWrapperMarket}>
          {stats.slice(0, 2).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--x--large"}
              valueColor={"text--grey700"}
              labelSize={"label-primary"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.unionStatCardInnerWrapperMarket}>
          {stats.slice(2, 4).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--primary"}
              valueColor={"text--grey600"}
              labelSize={"label-primary"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.unionStatCardInnerWrapperMarket}>
          {stats.slice(4, 6).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--small"}
              labelSize={"label-primary"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.unionStatCardInnerWrapperMarket}>
          {stats.slice(6, 8).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--small"}
              labelSize={"label-primary"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.unionStatCardInnerWrapperMarket}>
          {stats.slice(8, 9).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--small"}
              labelSize={"label-primary"}
            ></UnionStat>
          ))}
        </div>

        <div className={styles.statCardSpacerSmall}></div>
      </div>
    </div>
  );
}
