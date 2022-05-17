import {VictoryChart, VictoryLine, VictoryTheme, VictoryVoronoiContainer} from "victory";
import useAssetGraphData from "hooks/data/useAssetGraphData";
import { commify } from "@ethersproject/units";


export default function AssetGraph() {
  const { data: lines } = useAssetGraphData();

  const colors = ["#F59E0B", "#2DD4BF", "#0EA5E9"];
  const labels = [
      "t", "b", "c"
  ]

  return (
    <VictoryChart
      height={200}
      domainPadding={{ y: 10 }}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 30, top: 10 }}
      containerComponent={
        <VictoryVoronoiContainer
            mouseFollowTooltips
            voronoiDimension={labels}
            labels={({ datum }) => `Total: ${commify(datum.y).slice(0,10)}`}
            style={{
              stroke: "#fff",
              fill: "#fff",
            }}
            flyoutStyle={{
              stroke: "#777",
              fill: "#777"
            }}
        />
      }
    >
      {lines &&
        lines.map((line, i) => (
          <VictoryLine
            key={i}
            style={{
              data: { stroke: colors[i], strokeWidth: 2 },
              parent: { border: "none" },
              labels: { fill: "#57534E" },
            }}
            animate={{
              duration: 1000,
              onLoad: { duration: 500 }
            }}
            data={line}
          />
        ))}
    </VictoryChart>
  );
}
