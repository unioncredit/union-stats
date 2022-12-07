import { VictoryArea, VictoryAxis, VictoryChart, VictoryStack, VictoryTheme } from "victory";
import useAssetGraphData from "hooks/data/useAssetGraphData";

export default function AssetGraph() {
  const { data: lines } = useAssetGraphData();
  const colors = ["#F59E0B", "#2DD4BF", "#0EA5E9"];

  return (
    <VictoryChart
      height={200}
      domainPadding={{ y: 10 }}
      theme={VictoryTheme.material}
      padding={{ left: 50, bottom: 30, top: 10 }}
    >
      <VictoryAxis dependentAxis fixLabelOverlap={true} />
      <VictoryAxis fixLabelOverlap={true} />
      <VictoryStack>
        {lines &&
          lines.map((line, i) => (
            <VictoryArea
              key={i}
              style={{
                data: { fill: colors[i], strokeWidth: 0 },
              }}
              animate={{
                duration: 1000,
                onLoad: { duration: 500 },
              }}
              data={line}
            />
          ))}
      </VictoryStack>
    </VictoryChart>
  );
}
