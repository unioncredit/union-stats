import { daiValue } from "./values";
import {VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useUserManagerStats from "hooks/stats/userManagerStats";

export default function useUserManagerStatsView() {
  const {
    totalStakedDAI,
    totalFrozenStake,
    effectiveTotalStake,
  } = useUserManagerStats();

  return (
      <>


        <VictoryChart
            theme={VictoryTheme.material}
        >
          <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: "huhuh", y: "{totalStakedDAI}" },
                { x: "huhuh", y: "{totalFrozenStake}" },
                { x: "huhuh", y: "{effectiveTotalStake}" },
              ]}
          />
        </VictoryChart>
      </>
  );
}
