import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useStakingGraphData from "hooks/data/useStakingGraphData";

export default function LineChartUserStake() {
  const { data: stakingData = [] } = useStakingGraphData();
  console.log(stakingData);

  return (
    <VictoryChart
      height={200}
      domainPadding={{ y: 10 }}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 30, top: 10 }}
    >
      <VictoryAxis dependentAxis fixLabelOverlap={true} />
      <VictoryAxis fixLabelOverlap={true} />
      <VictoryLine
        style={{
          data: { stroke: "#3B82F6", strokeWidth: 2 },
          flyoutStyle: { fill: "red", stroke: "red" },
          labels: { fill: "#44403C" },
        }}
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
        data={stakingData}
        // x={(date) => {
        //   return new Date(date.x).toDateString().split(" ")[1];
        // }}
      />
    </VictoryChart>
  );
}
