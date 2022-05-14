import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useAssetGraphData from "hooks/data/useAssetGraphData";

export default function AssetGraph() {
  const { data: lines } = useAssetGraphData();

  const colors = ["pink", "orange", "green"];

  return (
    <VictoryChart
      height={300}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 60, top: 10 }}
    >
      {lines &&
        lines.map((line, i) => (
          <VictoryLine
            style={{
              data: { stroke: colors[i], strokeWidth: 2 },
              parent: { border: "none" },
              labels: { fill: "#000" },
            }}
            data={line}
          />
        ))}
    </VictoryChart>
  );
}
