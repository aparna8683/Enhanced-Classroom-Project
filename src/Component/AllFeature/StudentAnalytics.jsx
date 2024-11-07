import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Data for the line chart
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Course Completion Rate",
      data: [65, 70, 80, 90, 85, 92, 95],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: "Engagement Level",
      data: [60, 65, 75, 80, 85, 90, 95],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`,
      },
    },
  },
};

const StudentAnalytics = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          Real-Time Student Analytics
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Track student engagement, course completion rates, and performance
          metrics in real-time.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
            View Analytics
          </button>
          <button className="px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 transition">
            Export Data
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <Line data={data} options={options} />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-6">
          Insights & Analysis
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          With these analytics, you can identify areas of improvement for your
          students, track their progress over time, and provide targeted
          interventions.
        </p>
      </div>
    </div>
  );
};

export default StudentAnalytics;
