import { formatUnits } from "@ethersproject/units";

import { formatDetailed } from "util/formatValue";
import useMarketSettingsStats from "hooks/stats/marketSettingsStats";
import { toPercent } from "util/numbers";
import useChainId from "hooks/useChainId";
import { BLOCK_SPEED } from "constants/variables";
import { unionValue, daiValue } from "./values";
import StatCardHeader from "components/StatCardHeader";
import UnionStat from "components/UnionStat";

import styles from "./stats.module.css";

function useMarketSettingsStatsView() {
  const {
    interestRate,
    originationFee,
    newMemberFee,
    minBorrow,
    maxBorrow,
    reserveFactor,
    overdueBlocks,
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

  return [
    { label: "Borrow APR", value: toPercent(interestRate || 0, 2) },
    { label: "Origination Fee", value: toPercent(originationFee || 0, 2) },
    { label: "Min Borrow", value: daiValue(minBorrow) },
    {
      label: "Membership Fee",
      value: unionValue(formatUnits(newMemberFee || 0, 18)),
    },
    { label: "Max Borrow", value: daiValue(maxBorrow) },
    { label: "Reserve Factor", value: reserveFactor },
    {
      label: "Payment Period",
      value: overdueBlocks
        ? formatDetailed(overdueBlocks, 0) +
          (overdueHours < 48
            ? " (" + overdueHours + " Hours)"
            : " (" + overdueDays + " Days)")
        : "N/A",
    },
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
            ></UnionStat>
          ))}
        </div>

        <div className={styles.unionStatCardInnerWrapper}>
          {stats.slice(6, 7).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--small"}
            ></UnionStat>
          ))}
        </div>
      </div>
      <div />
    </div>
  );
}
