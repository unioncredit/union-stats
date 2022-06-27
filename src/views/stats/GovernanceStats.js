import { Label } from "@unioncredit/ui";
import { formatDetailed } from "util/formatValue";
import useGovernanceStats from "hooks/stats/governanceStats";
import useChainId from "hooks/useChainId";
import { BLOCK_SPEED } from "constants/variables";
import { roundDown } from "util/numbers";
import { commify } from "@ethersproject/units";
import { unionValue, daiValue } from "./values";
import styles from "./stats.module.css";
import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";

function useGovernanceStatsView() {
  const { quorum, votingPeriod, votingDelay, timelock, threshold } =
    useGovernanceStats();

  const chainId = useChainId();

  const votingPeriodSeconds = votingPeriod?.mul(BLOCK_SPEED[chainId]);

  const votingPeriodDays = Math.floor(votingPeriodSeconds / 86400);

  const votingPeriodHours = Math.floor(
    votingPeriodSeconds / 3600 - votingPeriodDays * 24
  );

  const timelockHours = timelock?.div(3600).toNumber();
  const timelockDays = timelock?.div(86400).toNumber();

  const votingDelaySeconds = votingDelay?.mul(BLOCK_SPEED[chainId]);

  const votingDelayDays = Math.floor(votingDelaySeconds / 86400);

  const votingDelayHours = Math.floor(
    votingDelaySeconds / 3600 - votingDelayDays * 24
  );

  return [
    { label: "Quorum", value: unionValue(quorum, 0), valueTwo: " · 4%" },
    {
      label: "Proposal Threshold",
      value: unionValue(threshold, 0),
      valueTwo: "",
    },

    {
      label: "Delay Period",
      value: votingDelay
        ? `${formatDetailed(votingDelay, "blocks", 0)} ${roundDown(
            votingDelayDays
          )}d ${roundDown(votingDelayHours)}h)`
        : "N/A",
    },
    {
      label: "Voting Period",
      value: votingPeriod
        ? `${formatDetailed(votingPeriod, "blocks")} (${roundDown(
            votingPeriodDays
          )}d ${roundDown(votingPeriodHours)}h)`
        : "N/A",
    },
    {
      label: "Timelock",
      value: timelock
        ? formatDetailed(timelock, "blocks", 0) +
          (timelockHours < 24
            ? " (" + timelockHours + "h)"
            : " (" + timelockDays + "d)")
        : "N/A",
    },
  ];
}

export default function GovernanceStats() {
  const stats = useGovernanceStatsView();

  return (
    <>
      <div className={styles.unionStatCard}>
        <StatCardHeader
          cardTitle={"Governance"}
          cardSubtitle={"Proposals and voting participation"}
        ></StatCardHeader>

        <div className={styles.unionStatCardBody}>
          <div className={styles.statGovernenceWrapper}>
            {stats.slice(0, 1).map((stat) => (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                valueTwo={stat.valueTwo}
                valueSize={"text--x--large"}
                valueColor={"text--grey700"}
                labelSize={"label--primary"}
                direction={styles.statHorizontal}
              ></UnionStat>
            ))}

            <div className={styles.statCardSpacerXSmall}></div>

            {stats.slice(1, 2).map((stat) => (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                valueTwo={stat.valueTwo}
                valueSize={"text--x--large"}
                valueColor={"text--grey700"}
                labelSize={"label--primary"}
                labelPosition={"label-right"}
                direction={styles.statHorizontal}
              ></UnionStat>
            ))}
          </div>

          <div className={styles.statCardSpacerSmall}></div>

          <div className={styles.assetInnerWrapper}>
            <Label className="label--primary text--grey700">
              Proposal Stages
            </Label>
          </div>

          {stats.slice(2, 5).map((stat) => (
            <UnionStat
              align="center"
              mb="28px"
              key={stat.label}
              label={stat.label}
              value={stat.value}
              labelSize={"label--medium"}
              direction={styles.statHorizontal}
            ></UnionStat>
          ))}
        </div>
      </div>
    </>
  );
}
