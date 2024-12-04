import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const bubbleChartData = {
    datasets: [{
      label: 'Bubble Dataset',
      data: data.bubbles.map(bubble => ({
        x: bubble.x,
        y: bubble.y,
        r: bubble.radius
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  const bubbleChartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'X Value'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Y Value'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return `(x: ${context.raw.x}, y: ${context.raw.y}, r: ${context.raw.r})`;
          }
        }
      }
    }
  };

  return <ChartComponent 
    type="bubble" 
    data={bubbleChartData} 
    options={bubbleChartOptions} 
  />;
};

export default BubbleChart;