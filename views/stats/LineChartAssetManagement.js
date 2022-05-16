import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useAssetGraphData from "hooks/data/useAssetGraphData";

export default function AssetGraph() {
  const { data: lines } = useAssetGraphData();

  const colors = ["#0EA5E9", "#2DD4BF", "#F59E0B"];

  return (
    <VictoryChart
      height={300}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 30, top: 10 }}
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
            data={line}
          />
        ))}
    </VictoryChart>
  );
}
