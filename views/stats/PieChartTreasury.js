import React from "react";
import { VictoryPie } from "victory";

export default function PieChartTreasury() {
  // TODO:
  // Something like this would work for this pie boi
  // const { data: comptrollerBalance } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // const { data: arbBridge } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // const { data: comptrollerArbBalance } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // etc....
  //
  // const data = {
  //   ....,
  //   datasets: {
  //     ...,
  //     data: [comptrollerArbBalance, arbBridge, comptrollerArbBalance]
  //   }
  // }
  const data = [
    { x: "comptrollerBalance", y: 75 },
    { x: "arbBridge", y: 25 },
    { x: "comptrollerArbBalance", y: 25 },
  ];

  return (
    <VictoryPie
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      data={data}
    />
  );
}
