import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import useStakingData from "hooks/data/useStakingData";

export default function assetGraph() {
  const { data: stakingData = [] } = useStakingData();

  const data = stakingData.map((totalStaked) => ({
    x: totalStaked,
  }));

  // Todo
  // Ey cunt, so here we pulling the data in, what we need is data with a X and Y value.
  // https://formidable.com/open-source/victory/guides/data-accessors
  // This graph would need to show the (total staked in protocols, Aave, compound and adapter balance) per month

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={[{ x: { data }, y: { data } }]}
      />
    </VictoryChart>
  );
}
