import React from "react";  
import { Bar } from 'react-chartjs-2';  
import { Scatter } from 'react-chartjs-2';  
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';  

// Register necessary chart components  
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement);  

const DashboardHome = () => {  
  const barData = {  
    labels: ['Home decoration', 'Bags', 'Wall-clock', 'Lamp'],  
    datasets: [  
      {  
        label: 'Top Product',  
        data: [40, 15, 30, 28],  
        backgroundColor: [  
          'rgba(255, 99, 132, 0.2)',  
          'rgba(54, 162, 235, 0.2)',  
          'rgba(255, 206, 86, 0.2)',  
          'rgba(75, 192, 192, 0.2)',  
        ],  
        borderColor: [  
          'rgba(255, 99, 132, 1)',  
          'rgba(54, 162, 235, 1)',  
          'rgba(255, 206, 86, 1)',  
          'rgba(75, 192, 192, 1)',  
        ],  
        borderWidth: 1,  
      },  
    ],  
  };  

  const barOptions = {  
    scales: {  
      y: {  
        beginAtZero: true,  
      },  
    },  
  };  

  const scatterData = {  
    datasets: [  
      {  
        label: 'Top Revenue',  
        data: [  
          { x: 0.2, y: 0.3 }, { x: 1, y: 1 }, { x: 2, y: 1.2 },  
          { x: 2.5, y: 0.7 }, { x: 3, y: 0.9 }, { x: 3.5, y: 1.5 }, { x: 4, y: 1.8 },  
        ],  
        backgroundColor: 'rgb(255, 205, 86)',  
        pointRadius: 5,  
      },  
      {  
        label: 'Top Target',  
        data: [  
          { x: 0.5, y: 0.8 }, { x: 1.5, y: 1.4 }, { x: 2.8, y: 1.9 },  
          { x: 3.3, y: 0.5 }, { x: 4.2, y: 1.1 },  
        ],  
        backgroundColor: 'rgb(54, 162, 235)',  
        pointRadius: 5,  
      },  
    ],  
  };  

  const scatterOptions = {  
    scales: {  
      x: { type: 'linear', position: 'bottom' },  
      y: {},  
    },  
  };  

  return (  
    <div className="p-6 bg-gray-50 min-h-screen">  
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>  

      {/* Top Metrics Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {['Top Sales', 'Total Orders', 'Top Purchase', 'Total Revenue'].map((title, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-4 mb-2">#32,499.93</p>
            <p className="text-sm text-gray-500">12.95% compared to last month</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Scatter Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Revenue Distribution</h3>
          <Scatter data={scatterData} options={scatterOptions} />
          <p className="text-gray-500 text-sm mt-4">Revenue data comparison over recent months</p>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Top Products</h3>
          <Bar data={barData} options={barOptions} />
          <p className="text-gray-500 text-sm mt-4">Insights into top-selling product categories</p>
        </div>
      </div>
    </div>  
  );  
};  

export default DashboardHome;



