import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useStakingGraphData from "hooks/data/useStakingGraphData";

export default function assetGraph() {
  const { data: stakingData = [] } = useStakingGraphData();

  return (
    <VictoryChart
      height={300}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 60, top: 10 }}
    >
      <VictoryLine
        style={{
          data: { stroke: "#3B82F6", strokeWidth: 2 },
          parent: { border: "none" },
          labels: { fill: "#000" },
        }}
        data={stakingData}
      />
    </VictoryChart>
  );
}
