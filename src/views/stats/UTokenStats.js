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
    loanableAmount,
    totalFrozen,
  } = useUTokenStats();

  const stats = [
    {
      label: "DAI available to be borrowed",
      value: <>{daiValue(loanableAmount)}</>,
    },
    { label: "Total DAI Borrowed", value: daiValue(totalBorrows) },
    { label: "Reserves", value: daiValue(totalReserves) },
    { label: "Frozen Amount", value: daiValue(totalFrozen) },
    { label: "Defaulted Amount", value: "Defaulted Amount" },
    {
      label: "Total uDAI Supply",
      value: <>{formatDetailed(uTokenSupply)} uDAI</>,
    },
    { label: "DAI/uDAI Exchange Rate", value: format(uTokenRate, 4) },
  ];

  {/*Todo
     TODOS

    GLOBAL
        - Remove the .0 from the numbers (ASSET MANAGER FLOOR STATS)

    UNION TOKEN CARD
        - Show arbUnion Balance when network is on ETH

    GOVERNENCE CARD
        - Have ### blocks (~# days #hrs) units for each (ADD THE BLOCK text)

    TREASURY CARD
        - show drip schedule for each network (Drip1 and drip2)

    Comptroller(network specific) CARD
        - actual inflation - the moving average accounting for vouching multiplier

    Utoken CARD
        - ADD deafulted and Frozen stats
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
              indicatorLabelColor={"yellow-indicator"}
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
                  labelSize={"label--small"}
                  indicatorLabelColor={"blue-indicator-borrow"}
                  labelPosition={"label-right"}
              ></UnionStat>
          ))}
        </div>

        {/* TOdo Add "Frozen" and Defaultet amount here */}

        <div className={styles.assetInnerWrapper}>
          <UsageChart
            data={[totalReserves, totalBorrows, loanableAmount,totalFrozen].map(Number)}
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
                indicatorLabelColor={"indicator-purple"}
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
                indicatorLabelColor={"red-indicator"}
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
            ></UnionStat>
        ))}


        {stats.slice(5, 9).map((stat) => (
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
