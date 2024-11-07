import React, { useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChartBar, FaCheckCircle, FaUsers, FaTasks } from "react-icons/fa";

// Register chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Progress = () => {
  const [selectedData, setSelectedData] = useState("overall");

  // Data for the charts
  const studentProgressData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        data: [75, 15, 10],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
        hoverBackgroundColor: ["#45A049", "#F57C00", "#D32F2F"],
      },
    ],
  };

  const activityData = {
    labels: ["Assignments", "Attendance", "Discussions"],
    datasets: [
      {
        label: "Student Activity",
        data: [80, 60, 90],
        backgroundColor: ["#FF9800", "#2196F3", "#8BC34A"],
        borderColor: ["#F57C00", "#1976D2", "#4CAF50"],
        borderWidth: 1,
      },
    ],
  };

  const progressData = {
    labels: ["John", "Jane", "Mark", "Emily"],
    datasets: [
      {
        label: "Student Progress",
        data: [85, 70, 50, 90],
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-600 mb-6">
          Progress Dashboard
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Keep track of class progress, student activity, and performance.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-8 mb-12">
        <button
          onClick={() => setSelectedData("overall")}
          className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
        >
          Overall Progress
        </button>
        <button
          onClick={() => setSelectedData("activity")}
          className="px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-green-700"
        >
          Student Activity
        </button>
        <button
          onClick={() => setSelectedData("students")}
          className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-purple-700"
        >
          Student Progress
        </button>
      </div>

      {/* Main Content */}
      {selectedData === "overall" && (
        <div className="space-y-8">
          {/* Overall Progress Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
                Total Students <FaUsers className="inline" />
              </h2>
              <p className="text-xl text-gray-300">100</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
                Completed Assignments <FaCheckCircle className="inline" />
              </h2>
              <p className="text-xl text-gray-300">80%</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-4">
                Active Discussions <FaTasks className="inline" />
              </h2>
              <p className="text-xl text-gray-300">90%</p>
            </div>
          </div>

          {/* Doughnut Chart (Overall Progress) */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
              Student Progress Overview
            </h2>
            <Doughnut data={studentProgressData} />
          </div>
        </div>
      )}

      {selectedData === "activity" && (
        <div className="space-y-8">
          {/* Student Activity Chart */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
              Student Activity Breakdown
            </h2>
            <Bar data={activityData} />
          </div>
        </div>
      )}

      {selectedData === "students" && (
        <div className="space-y-8">
          {/* Student Progress Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
              Individual Student Progress
            </h2>
            <Bar data={progressData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;
