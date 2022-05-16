import { Text } from "@unioncredit/ui";
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

  return [
    { label: "Quorum", value: unionValue(quorum) },
    {
      label: "Voting Period",
      value: votingPeriod
        ? `${commify(votingPeriod.toString())} (${roundDown(
            votingPeriodDays
          )}d ${roundDown(votingPeriodHours)}h)`
        : "N/A",
    },
    { label: "Delay Period", value: formatDetailed(votingDelay, "Block", 0) },
    {
      label: "Timelock",
      value: timelock
        ? formatDetailed(timelock, 0) +
          (timelockHours < 48
            ? " (" + timelockHours + " Hours)"
            : " (" + timelockDays + " Days)")
        : "N/A",
    },
    { label: "Proposal Threshold", value: unionValue(threshold) },
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
            {stats.slice(0, 2).map((stat) => (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                valueSize={"text--x--large"}
                valueColor={"text--grey700"}
                labelSize={"label--primary"}
              ></UnionStat>
            ))}
          </div>

          <div className={styles.statCardSpacerSmall}></div>

          <Text className={styles.unionStatCardText} mt={"20"} mb={"10px"}>
            Proposal Stages
          </Text>

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
