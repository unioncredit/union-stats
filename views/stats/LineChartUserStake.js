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
  // so I got he total staked data which would be (X) but what is the Y axis??????

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={[{ data }]}
      />
    </VictoryChart>
  );
}
