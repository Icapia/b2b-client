import React from 'react';
import {Line} from 'react-chartjs-2';
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

let currentDate = new Date();
let daysList = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let currentMonth = monthList[currentDate.getMonth()];
let labelsList = ['1 ' + currentMonth, '7 ' + currentMonth, '14 ' + currentMonth, '21 ' + currentMonth, '31 ' + currentMonth,];




export default function ChartGraph(props) {
  const chartData = {
    labels: labelsList,
    datasets: [
      {
        label: '',
        data: props.dataset,
        fill: true,
        lineTension: 0.2,
        backgroundColor: [
          'red',
          'red',
        ],
        borderColor: 'rgba(216,153,114,1)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(216,153,114,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#FFF',
        pointHoverBorderColor: 'rgba(216,153,114,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        yAxisID: 'yAxis',
        xAxisID: 'xAxis',
      }
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxis: {
        offset: 60,
        grid: {
          tickLength: 16,
          tickColor: 'rgba(216,153,114,0)',
          borderDash: [16,16],
        }
      },
      xAxis: {
        grid: {
          tickLength: 16,
          tickColor: 'rgba(216,153,114,0)',
          borderDash: [16,16],
        }
      }
    }
  };
  
  return (
    <div className='chartItem topline'>
        <div className="chartItem__header">
          <div className="chartItem__title">
            <h6>{props.title}</h6>
            <span>{"+" + props.count + " today"}</span>
          </div>
          
        </div>
        <p>The graph shows the number of new users for the selected dates</p>
        
        <div className="chartItem__graphic">
          <Line
            options={chartOptions}
            data={chartData}
            width={400}
            height={200}
          />
        </div>
    </div>
  )   
}