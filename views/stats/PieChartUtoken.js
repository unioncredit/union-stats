import React from "react";
import { VictoryPie } from "victory";

export default function PieChartTreasury() {
  // TODO:
  // Something like this would work for this pie boi
  // const { data: Total uDAI Supply } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // const { data: Total DAI Borrowed } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // const { data: Defaulted Amount } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // const { data: Frozen Amount } = useTokenBalanceOfAccount(unionAddress, config.comptroller)
  // etc....
  //
  // const data = {
  //   ....,
  //   datasets: {
  //     ...,
  //     data: [Total uDAI Supply, arbBridge, comptrollerArbBalance, ]
  //   }
  // }

  const data = [
    { x: "Total uDAI Supply", y: 75 },
    { x: "Total DAI Borrowed", y: 25 },
    { x: "Defaulted Amount", y: 25 },
    { x: "Frozen Amount", y: 25 },
  ];

  return (
    <VictoryPie
      colorScale={["#A78BFA", "#60A5FA", "#FBBF24", "cyan", "navy"]}
      data={data}
      innerRadius={50}
      width={400}
      height={400}
      labelComponent={<span></span>}
    />
  );
}
