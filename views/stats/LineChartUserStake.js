import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useStakingData from "hooks/data/useStakingData";

export default function assetGraph() {
  const { data: stakingData = [] } = useStakingData();

  return (
    <VictoryChart
      height={300}
      theme={VictoryTheme.material}
      padding={{ left: 60, bottom: 60, top: 10 }}
    >
      <VictoryLine
        style={{
          data: { stroke: "#c43a31", strokeWidth: 1 },
          parent: { border: "1px solid #ccc" },
        }}
        data={stakingData}
      />
    </VictoryChart>
  );
}
