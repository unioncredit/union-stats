import { Label, Text} from "@unioncredit/ui";
import { formatDetailed } from "util/formatValue";
import useGovernanceStats from "hooks/stats/governanceStats";
import useChainId from "hooks/useChainId";
import { BLOCK_SPEED } from "constants/variables";
import { unionValue } from "./values";
import { roundDown } from "util/numbers";
import { commify } from "@ethersproject/units";
import styles from "./stats.module.css";
import UnionStat from "../../components-ui/UnionStat";
import React from "react";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory";

  function useGovernanceStatsViewQuorum() {
    const {
      quorum,
    } = useGovernanceStats();

    return [
      {label: "Voting Quorum", value: unionValue(quorum)},
    ];
  }

  function useGovernanceStatsViewVotingPeriod() {
    const chainId = useChainId();
    const votingPeriodHours = votingPeriod?.mul(BLOCK_SPEED[chainId]);
    const votingPeriodDays = votingPeriod?.mul(BLOCK_SPEED[chainId]);

    const {
      votingPeriod,
    }
        = useGovernanceStats();

    return [
      {
        label: "Voting Period",
        value: votingPeriod
            ? `${commify(votingPeriod.toString())} (${roundDown(
                votingPeriodDays
            )}d ${roundDown(votingPeriodHours)}h)`
            : "N/A",
      },
    ];
  }

  function useGovernanceStatsVotingDelay() {
    const {
      votingDelay,
    } = useGovernanceStats();

    return [
      { label: "Delay Period", value: formatDetailed(votingDelay, "Block", 0) },
    ];
  }

  function useGovernanceStatsViewTimelock() {
    const timelockDays = timelock?.div(86400).toNumber();
    const timelockHours = timelock?.div(3600).toNumber();

    const {
        timelock,
      } = useGovernanceStats();

      return [
        {
          label: "Timelock",
          value: timelock
              ? formatDetailed(timelock, 0) +
              (timelockHours < 48
                  ? " (" + timelockHours + " Hours)"
                  : " (" + timelockDays + " Days)")
              : "N/A",
        },
      ];
    }

  function useGovernanceStatsViewThreshold() {
    const {
      threshold,
    } = useGovernanceStats();

    return [
      { label: "Proposal Threshold", value: unionValue(threshold) },
    ];
  }

export default function GovernanceStats() {
  const quorum = useGovernanceStatsViewQuorum();
  const votingPeriod = useGovernanceStatsViewVotingPeriod();
  const votingDelay = useGovernanceStatsVotingDelay();
  const timelock = useGovernanceStatsViewTimelock();
  const threshold = useGovernanceStatsViewThreshold();

  return (
    <div className={styles.unionStatCard}>
      <div className={styles.unionStatCardHeader}>
        <div className={styles.unionStatCardHeaderContent}>
          <Text mb={"0"} size={"large"} className={"text--grey800"}>Governance</Text>
          <Label className={"text--grey400"}>Proposals and voting participation</Label>
        </div>
        <div className="divider"></div>
      </div>

      <div className={styles.unionStatCardBody}>
        <div className={styles.unionStatCardInnerWrapper}>

          {quorum.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               valueSize={"text--large"}
               valueColor={"text--grey700"}
               direction={styles.statVertical}
            />
          ))}

          {votingPeriod.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               direction={styles.statVertical}
               valueSize={"text--large"}
               valueColor={"text--grey700"}
            />
          ))}
        </div>

        <VictoryChart
            theme={VictoryTheme.material}
        >
          <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 1, y: 2 },
                { x: 3, y: 3 },
                { x: 5, y: 5 },
                { x: 6, y: 4 },
                { x: 7, y: 7 }
              ]}
          />
        </VictoryChart>

        <Text mt={"10px"} mb={"10px"}>
          Proposal Stages
        </Text>

        {votingDelay.map((stat) => (
          <UnionStat key={stat.label}
             mb="28px"
             label={stat.label}
             value={stat.value}
             direction={styles.statHorizontal}
          />
        ))}

        {timelock.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               direction={styles.statHorizontal}
            />
        ))}

        {threshold.map((stat) => (
            <UnionStat key={stat.label}
               mb="28px"
               label={stat.label}
               value={stat.value}
               direction={styles.statHorizontal}
            />
        ))}
      </div>
    </div>
  );
}

