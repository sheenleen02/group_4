import React from 'react';
import { Radar, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  ArcElement, 
  Tooltip, 
  Legend, 
  LineElement, 
  CategoryScale, 
  PointElement 
} from 'chart.js';

// Register the necessary chart components
ChartJS.register(
  RadialLinearScale, 
  ArcElement, 
  Tooltip, 
  Legend, 
  LineElement, 
  CategoryScale, 
  PointElement
);

const Analytics = () => {
  const radarData = {
    labels: ['NIGERIA', 'Kwara', 'ogun', 'lagos', 'osun', 'oyo'],
    datasets: [
      {
        label: 'Sales by region',
        data: [2698, 2408, 2738, 2545, 2728, 3228],
        backgroundColor: 'rgba(128, 0, 128, 0.3)', // Light purple
        borderColor: 'rgba(128, 0, 128, 1)', // Darker purple
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['X', 'facebook'],
    datasets: [
      {
        label: 'Sales by Platform',
        data: [55, 45],
        backgroundColor: ['black', 'blue'], // Custom colors for platforms
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { display: false },
        suggestedMin: 2000,
        suggestedMax: 3500,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      {/* Sales by Region */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4">Sales by region</h2>
        <Radar data={radarData} options={radarOptions} />
      </div>

      {/* Sales by Platform */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4">Sales by Platform</h2>
        <Doughnut data={doughnutData} />
        <div className="mt-4">
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-black text-white block mr-2"></span> x - 55%
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-blue-500 block mr-2"></span> facebook - 45%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;


