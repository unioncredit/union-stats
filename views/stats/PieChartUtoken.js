import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false
};

export const data = {
  labels: ['Total uDAI Supply', 'Total DAI Borrowed', 'Defaulted Amount', 'Frozen Amount'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 9],
      backgroundColor: [
        '#A78BFA',
        '#60A5FA',
        '#FBBF24',
        '#F87171',
      ],
      borderColor: [
        '#A78BFA',
        '#60A5FA',
        '#FBBF24',
        '#F87171',
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
