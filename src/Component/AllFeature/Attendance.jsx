import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaExclamationTriangle } from "react-icons/fa";

ChartJS.register(CategoryScale, BarElement, Title, Tooltip, Legend);

const Attendance = () => {
  const subjects = [
    "Data Structures",
    "Web Development",
    "OOPPs",
    "Cyber Security",
    "Computer Organization",
    "Python",
  ];

  // Sample data for total classes and attended classes
  const initialAttendanceData = {
    "Data Structures": { total: 30, attended: 28 },
    "Web Development": { total: 30, attended: 18 },
    OOPPs: { total: 30, attended: 22 },
    "Cyber Security": { total: 30, attended: 23 },
    "Computer Organization": { total: 30, attended: 30 },
    Python: { total: 30, attended: 27 },
  };

  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

  // Calculate attendance percentage for each subject
  const calculateAttendancePercentage = (subject) => {
    const { attended, total } = attendanceData[subject];
    return ((attended / total) * 100).toFixed(2);
  };

  // Data for the chart
  const chartData = {
    labels: subjects,
    datasets: [
      {
        label: "Attendance Percentage",
        data: subjects.map((subject) => calculateAttendancePercentage(subject)),
        backgroundColor: subjects.map((subject) =>
          calculateAttendancePercentage(subject) < 70
            ? "rgba(255, 99, 132, 0.6)"
            : "rgba(75, 192, 192, 0.6)"
        ),
        borderColor: subjects.map((subject) =>
          calculateAttendancePercentage(subject) < 70
            ? "rgba(255, 99, 132, 1)"
            : "rgba(75, 192, 192, 1)"
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Attendance Tracker
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Track the attendance for all your subjects and ensure you maintain a
          healthy attendance rate.
        </p>
      </div>

      {/* Chart Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Attendance Summary</h2>
        <div style={{ height: "300px", width: "80%", margin: "auto" }}>
          <Bar
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-800 rounded-lg shadow-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-white">Subject</th>
              <th className="px-6 py-4 text-left text-white">Total Classes</th>
              <th className="px-6 py-4 text-left text-white">Attended</th>
              <th className="px-6 py-4 text-left text-white">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => {
              const percentage = calculateAttendancePercentage(subject);
              return (
                <tr
                  key={subject}
                  className="hover:bg-gray-700 transform transition-all hover:scale-105"
                >
                  <td className="px-6 py-4 text-white">{subject}</td>
                  <td className="px-6 py-4">{attendanceData[subject].total}</td>
                  <td className="px-6 py-4">
                    {attendanceData[subject].attended}
                  </td>
                  <td
                    className={`px-6 py-4 font-bold ${
                      percentage < 70 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {percentage}%
                    {percentage < 70 && (
                      <FaExclamationTriangle className="inline-block ml-2 text-red-500" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Button Section */}
      <div className="text-center mt-8">
        <button
          onClick={() => alert("Attendance Updated")}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
        >
          Update Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;
