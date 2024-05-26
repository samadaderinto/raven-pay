import { FC } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { CandlestickElement } from 'chartjs-chart-financial';
import { Chart as ReactChartJS } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import "./chart.css";
import { ChartProps } from '../../types/chart';

ChartJS.register(...registerables, CandlestickElement);

export const Chart: FC<ChartProps> = (data) => {
  // const options = {
  //   responsive: true,
  //   scales: {
  //     x: {
  //       type: 'time' as const,
  //       time: {
  //         unit: 'day',
  //       },
  //       ticks: {
  //         source: 'auto' as const,
  //         maxRotation: 0,
  //         autoSkip: true,
  //       },
  //     },
  //     y: {
  //       beginAtZero: false,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //   },
  // };

  const chartData = {
    datasets: [
      {
        label: 'Candlestick',
        data: data,
        type: 'candlestick' as const,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
      },
    ],
  };

  // options={options}
  return <ReactChartJS type='candlestick' data={chartData}  />;
   
  
}

