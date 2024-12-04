import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const lineChartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data.values,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;