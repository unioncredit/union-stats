import useStakingData from "hooks/data/useStakingData";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function UserManagerGraph() {
  const { data: stakingData = [] } = useStakingData();

  const data = stakingData.map((totalStaked) => ({
    uv: totalStaked,
  }));

  return (
    <LineChart
      width={320}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <div strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
