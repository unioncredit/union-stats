import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Vote Participation",
      data: labels.map(() => faker.datatype.number({ min: 160, max: 4300 })),
      borderColor: "#8B5CF6",
      backgroundColor: "#8B5CF6",
    },
  ],
};

export default function LineChartUserGraph() {
  return <Line options={options} data={data} />;
}