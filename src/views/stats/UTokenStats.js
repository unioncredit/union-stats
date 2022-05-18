import { UsageChart } from "@unioncredit/ui";
import UnionStat from "components/UnionStat";
import format, { formatDetailed } from "util/formatValue";
import useUTokenStats from "hooks/stats/uTokenStats";
import StatCardHeader from "components/StatCardHeader";
import { daiValue } from "./values";

import styles from "./stats.module.css";

export default function UTokenStats() {
  const {
    uTokenSupply,
    totalBorrows,
    totalReserves,
    totalRedeemable,
    uTokenRate,
  } = useUTokenStats();

  const stats = [
    {
      label: "Total uDAI Supply",
      value: <>{formatDetailed(uTokenSupply)} uDAI</>,
    },
    { label: "Total DAI Borrowed", value: daiValue(totalBorrows) },

    { label: "Frozen Amount", value: "Frozen Amount" },
    { label: "Defaulted Amount", value: "Defaulted Amount" },

    { label: "Total Reserves", value: daiValue(totalReserves) },
    { label: "Total Redeemable", value: daiValue(totalRedeemable) },
    { label: "DAI/uDAI Exchange Rate", value: format(uTokenRate, 4) },
  ];

  {/*Todo
  add stats for...
    - defaulted amount
    - frozen amount
  and show in the bar
*/}


  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"uToken"}
        cardSubtitle={"Statistics related to uDAI supply and reserves"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        <div className={styles.unionStatCardInnerWrapper}>
          {stats.slice(0, 1).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--x--large"}
              valueColor={"text--grey700"}
              labelSize={"label--small"}
            ></UnionStat>
          ))}

          {stats.slice(1, 2).map((stat) => (
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

        <div className={styles.assetInnerWrapper}>
          <UsageChart
            data={[totalBorrows, totalRedeemable, totalReserves ].map(Number)}
          />
        </div>

        <div className={styles.statCardSpacerSmall}></div>

        {stats.slice(2, 3).map((stat) => (
            <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                direction={styles.statHorizontal}
                valueSize={"text--small"}
                labelSize={"label--primary"}
                indicatorLabelColor={"red-indicator"}
            ></UnionStat>
        ))}

        {stats.slice(3, 4).map((stat) => (
            <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                direction={styles.statHorizontal}
                valueSize={"text--small"}
                labelSize={"label--primary"}
                indicatorLabelColor={"yellow-indicator"}
            ></UnionStat>
        ))}

        {stats.slice(4, 5).map((stat) => (
            <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                direction={styles.statHorizontal}
                valueSize={"text--small"}
                labelSize={"label--primary"}
                indicatorLabelColor={"pink-indicator"}
            ></UnionStat>
        ))}


        {stats.slice(5, 7).map((stat) => (
          <UnionStat
            align="center"
            mb="28px"
            key={stat.label}
            label={stat.label}
            value={stat.value}
            direction={styles.statHorizontal}
            valueSize={"text--small"}
            labelSize={"label--primary"}
          ></UnionStat>
        ))}
      </div>
    </div>
  );
}
