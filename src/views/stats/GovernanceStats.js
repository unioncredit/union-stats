import { Label } from "@unioncredit/ui";
import { formatDetailed } from "util/formatValue";
import useGovernanceStats from "hooks/stats/governanceStats";
import useChainId from "hooks/useChainId";
import { BLOCK_SPEED } from "constants/variables";
import { unionValue } from "./values";
import { roundDown } from "util/numbers";
import { commify } from "@ethersproject/units";
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

  const votingHours = votingDelay?.div(3600).toNumber();
  const votingDays = votingDelay?.div(86400).toNumber();

  return [
    { label: "Quorum", value: "40M UNION", valueTwo: " · 4%" },
    { label: "Proposal Threshold", value: "10M UNION", valueTwo: " · 1%" },

    {
      label: "Delay Period",
      value: votingDelay
          ? formatDetailed(votingDelay, "blocks" ,0) +
          (votingHours < 48
              ? " (" + votingHours + " Hour)"
              : " (" + votingDays + " Days)")
          : "N/A",
    },

    {
      label: "Voting Period",
      value: votingPeriod
          ? `${commify(votingPeriod.toString())} (${roundDown(
              votingPeriodDays
          )}d ${roundDown(votingPeriodHours)}h)`
          : "N/A",
    },
    {
      label: "Timelock",
      value: timelock
          ? formatDetailed(timelock,"blocks", 0) +
          (timelockHours < 48
              ? " (" + timelockHours + " Hours)"
              : " (" + timelockDays + " Days)")
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
          <div className={styles.unionStatCardInnerWrapper}>
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
              ></UnionStat>
            ))}

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
