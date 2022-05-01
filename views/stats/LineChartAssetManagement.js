import React from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June' ];

export const data = {
  labels,
  datasets: [
    {
      label: 'compound',
      data: labels.map(() => faker.datatype.number({ min: 160, max: 4300 })),
      borderColor: '#2DD4BF',
      backgroundColor: '#2DD4BF',
    },
    {
      label: 'Aave v2',
      data: labels.map(() => faker.datatype.number({ min: 160, max: 4300 })),
      borderColor: '#0EA5E9',
      backgroundColor: '#0EA5E9',
    },
    {
      label: 'Pure Adapter',
      data: labels.map(() => faker.datatype.number({ min: 160, max: 4300 })),
      borderColor: '#F59E0B',
      backgroundColor: '#F59E0B',
    },
    {
      label: 'Total',
      data: labels.map(() => faker.datatype.number({ min: 160, max: 4300 })),
      borderColor: '#A78BFA',
      backgroundColor: '#A78BFA',
    },
  ],
};

export default function LineChartUserGraph() {
  return <Line options={options} data={data} />;
}
