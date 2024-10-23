import React from "react";  
import { Bar } from 'react-chartjs-2';  
import { Scatter } from 'react-chartjs-2';  
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';  

// Register necessary chart components  
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement);  

const DashboardHome = () => {  
  // Bar chart data  
  const barData = {  
    labels: ['Home decoration', 'Bags', 'Wall-clock', 'Lamp'],  
    datasets: [  
      {  
        label: 'Top Product',  
        data: [40, 15, 30, 28],  // Example data for each category  
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

  // Scatter chart data  
  const scatterData = {  
    datasets: [  
      {  
        label: 'Top revenue',  
        data: [  
          { x: 0.2, y: 0.3 },  
          { x: 1, y: 1 },  
          { x: 2, y: 1.2 },  
          { x: 2.5, y: 0.7 },  
          { x: 3, y: 0.9 },  
          { x: 3.5, y: 1.5 },  
          { x: 4, y: 1.8 },  
        ],  
        backgroundColor: 'rgb(255, 205, 86)',  
        pointRadius: 5,  
      },  
      {  
        label: 'Top Target',  
        data: [  
          { x: 0.5, y: 0.8 },  
          { x: 1.5, y: 1.4 },  
          { x: 2.8, y: 1.9 },  
          { x: 3.3, y: 0.5 },  
          { x: 4.2, y: 1.1 },  
        ],  
        backgroundColor: 'rgb(54, 162, 235)',  
        pointRadius: 5,  
      },  
    ],  
  };  

  const scatterOptions = {  
    scales: {  
      x: {  
        type: 'linear',  
        position: 'bottom',  
        title: {  
          display: true,  
          text: '',  
        },  
      },  
      y: {  
        title: {  
          display: true,  
          text: '',  
        },  
      },  
    },  
    plugins: {  
      title: {  
        display: true,  
        text: '',  
      },  
    },  
  };  

  return (  
    <div className="p-6">  
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>  

      {/* Top sales section */}  
      <div className="flex gap-4 mb-6">  
        
          <div className=" p-6  flex-1">  
            <div className="flex justify-between">  
              <h3 className="text-lg font-bold mb-2">Top sales</h3>  
              <p>...</p>  
            </div>  
            <p className="pt-10">#32499.93</p>  
            <p className="text-gray-600 pt-10">12.95% compared to last month</p>   
          </div>  


          <div className=" p-6  flex-1">  
            <div className="flex justify-between">  
              <h3 className="text-lg font-bold mb-2">Total order</h3>  
              <p>...</p>  
            </div>  
            <p className="pt-10">#32499.</p>  
            <p className="text-gray-600 pt-10">12.95% compared to last month</p>   
          </div>  



          <div className=" p-6  flex-1">  
            <div className="flex justify-between">  
              <h3 className="text-lg font-bold mb-2">Top Purchase</h3>  
              <p>...</p>  
            </div>  
            <p className="pt-10">#32499.93</p>  
            <p className="text-gray-600 pt-10">12.95% compared to last month</p>   
          </div>  


          <div className=" p-6  flex-1">  
            <div className="flex justify-between">  
              <h3 className="text-lg font-bold mb-2">Top sales</h3>  
              <p>...</p>  
            </div>  
            <p className="pt-10">#32499.93</p>  
            <p className="text-gray-600 pt-10">12.95% compared to last month</p>   
          </div>  
        
      </div >  
<div className="flex">

      {/* Scatter Chart Section */}  
      <div className="bg-white p-6 shadow-lg rounded-lg w-[40vw]">  
        <h3 className="text-lg font-bold mb-4">Revenue</h3>  
        <Scatter data={scatterData} options={scatterOptions} />  
        <p className="text-gray-700 mt-4"></p>  
      </div>  

      {/* Bar Chart Section */}  
      <div className="bg-white p-6 shadow-lg rounded-lg w-[30vw]">  
        <h3 className="text-lg font-bold mb-4">Top product</h3>  
        <Bar data={barData} options={barOptions} />  
        <p className="text-gray-700"></p>  
      </div>  
</div>
    </div>  
  );  
};  

export default DashboardHome;


