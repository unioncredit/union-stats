import { formatUnits } from "@ethersproject/units";
import format, { formatDetailed } from "util/formatValue";
import useMarketSettingsStats from "hooks/stats/marketSettingsStats";
import { toPercent } from "util/numbers";
import useChainId from "hooks/useChainId";
import { PAYMENT_SPEED } from "constants/variables";
import { tokenValue, unionValue } from "./values";
import StatCardHeader from "components/StatCardHeader";
import UnionStat from "components/UnionStat";
import styles from "./stats.module.css";
import { isChainV2 } from "../../util/chain";
import useCurToken from "hooks/useCurToken";

function useMarketSettingsStatsView() {
  const {
    interestRate,
    originationFee,
    memberFee,
    minBorrow,
    maxBorrow,
    maxStake,
    reserveFactor,
    overdueBlocks,
    maxOverdueTime,
    debtCeiling,
  } = useMarketSettingsStats();

  const chainId = useChainId();

  const curToken = useCurToken();

  const overdueHours = overdueBlocks
    ?.mul(PAYMENT_SPEED[chainId])
    ?.div(3600)
    .toNumber();

  const overdueDays = overdueBlocks
    ?.mul(PAYMENT_SPEED[chainId])
    ?.div(86400)
    .toNumber();

  const maxOverdueTimeDays = maxOverdueTime
    ?.mul(PAYMENT_SPEED[chainId])
    ?.div(86400)
    .toNumber();

  return [
    { label: "Borrow APR", value: toPercent(interestRate || 0, 2) },
    { label: "Origination Fee", value: toPercent(originationFee || 0, 2) },
    { label: "Min Borrow", value: tokenValue(minBorrow, 0, curToken) },
    {
      label: "Membership Fee",
      value: unionValue(formatUnits(memberFee || 0, 18), 2),
    },
    { label: "Max Borrow", value: tokenValue(maxBorrow, 0, curToken) },
    {
      label: "Max Stake",
      value: tokenValue(maxStake, 0, curToken),
    },
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
      value: tokenValue(debtCeiling, 0, curToken),
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
          {stats.slice(8).map((stat) => (
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
