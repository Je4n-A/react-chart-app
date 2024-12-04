import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const scatterChartData = {
    datasets: [{
      label: 'Scatter Dataset',
      data: data.points.map(point => ({
        x: point.x,
        y: point.y
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      pointRadius: 6
    }]
  };

  const scatterChartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'X Axis'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis'
        }
      }
    }
  };

  return <ChartComponent 
    type="scatter" 
    data={scatterChartData} 
    options={scatterChartOptions} 
  />;
};

export default ScatterChart;