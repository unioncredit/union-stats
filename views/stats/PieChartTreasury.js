import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false
};

export const data = {
  labels: ['Comptroller Ethereum', 'Comptroller Arb.Bridge', 'Comptroller Arbitrum'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        '#3B82F6',
        '#FBBF24',
        '#E879F9',
      ],
      borderColor: [
        '#FAFAF9',
        '#FAFAF9',
        '#FAFAF9',
      ],
      borderWidth: 2,
    },
  ],
};

export default function PieChartTreasury() {
  return <div className="chartWrapper">
    <Doughnut data={data} width={200} height={200} options={options}/>
  </div>
}
