import { VictoryChart, VictoryLine, VictoryTheme, VictoryVoronoiContainer} from "victory";
import useStakingGraphData from "hooks/data/useStakingGraphData";
import { commify } from "@ethersproject/units";

export default function assetGraph() {
  const { data: stakingData = [] } = useStakingGraphData();

  return (
    <VictoryChart
      height={200}
      domainPadding={{ y: 10 }}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 30, top: 10 }}
      containerComponent={
        <VictoryVoronoiContainer
          mouseFollowTooltips
          voronoiDimension={"x"}
          labels={({ datum }) => `Total: ${commify(datum.y)}`}
      />}
    >
      <VictoryLine
        style={{
          data: { stroke: "#3B82F6", strokeWidth: 2 },
          flyoutStyle: { fill: "red", stroke: "red"},
          labels: { fill: "#44403C" },
        }}
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
        }}

        data={stakingData}
      />
    </VictoryChart>
  );
}
