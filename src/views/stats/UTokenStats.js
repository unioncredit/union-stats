import { UsageChart } from "@unioncredit/ui";
import UnionStat from "components/UnionStat";
import format, { formatDetailed } from "util/formatValue";
import useUTokenStats from "hooks/stats/uTokenStats";
import StatCardHeader from "components/StatCardHeader";
import { tokenValue } from "./values";
import useCurToken from "hooks/useCurToken";

import styles from "./stats.module.css";

export default function UTokenStats() {
  const {
    uTokenSupply,
    totalBorrows,
    totalReserves,
    uTokenRate,
    loanableAmount,
    totalFrozen,
    totalDefault,
  } = useUTokenStats();

  const curToken = useCurToken();

  const stats = [
    {
      label: `${curToken} available to be borrowed`,
      value: <>{tokenValue(loanableAmount, null, curToken)}</>,
    },
    {
      label: `Total ${curToken} Borrowed`,
      value: tokenValue(totalBorrows, null, curToken),
    },
    { label: "Reserves", value: tokenValue(totalReserves, null, curToken) },
    { label: "Frozen Amount", value: tokenValue(totalFrozen, null, curToken) },
    {
      label: "Defaulted Amount",
      value: tokenValue(totalDefault, null, curToken),
    },
    {
      label: `Total u${curToken} Supply`,
      value: (
        <>
          {formatDetailed(uTokenSupply)} u{curToken}
        </>
      ),
    },
    {
      label: `${curToken}/u${curToken} Exchange Rate`,
      value: format(uTokenRate, 4),
    },
  ];

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"uToken"}
        cardSubtitle={`Statistics related to u${curToken} supply and reserves`}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        <div className={styles.unionStatCardInnerWrapper}>
          {stats.slice(0, 1).map((stat) => (
            <UnionStat
              direction="horizontal"
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              valueSize={"text--x--large"}
              valueColor={"text--grey700"}
              labelSize={"label--small"}
              indicatorLabelColor={"purple-indicator-borrow"}
            />
          ))}

          <div className={"text-left-mobile"}>
            {stats.slice(1, 2).map((stat) => (
              <UnionStat
                direction="horizontal"
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
              />
            ))}
          </div>
        </div>

        {/* TOdo Add Defaulted amount here */}

        <div className={styles.assetInnerWrapper}>
          <UsageChart data={[loanableAmount, totalBorrows].map(Number)} />
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
