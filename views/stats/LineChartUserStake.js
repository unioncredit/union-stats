import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useStakingData from "hooks/data/useStakingData";

export default function assetGraph() {
  const { data: stakingData = [] } = useStakingData();

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
