import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './Graphs.css';
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

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TempGraph = () => {
  
    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return `${d.getMonth() + 1}/${d.getDate()}`; // Format as MM/DD
    }).reverse();

    const data = {
        labels: last7Days,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: [0], // Update this array with your actual data
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='TempBackground'>
            <h2>Temperature Over Time</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default TempGraph;