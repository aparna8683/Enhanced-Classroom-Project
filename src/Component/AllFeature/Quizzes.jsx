import React, { useState } from "react";
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
import { FaCheckCircle, FaListUl } from "react-icons/fa";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Quizzes = () => {
  // Sample data for quizzes and progress
  const quizzes = [
    { id: 1, name: "Math Quiz 1", date: "2024-11-15", status: "Upcoming" },
    { id: 2, name: "Science Quiz 1", date: "2024-11-20", status: "Upcoming" },
    { id: 3, name: "History Quiz 1", date: "2024-11-25", status: "Completed" },
  ];

  const progressData = {
    labels: ["Quiz 1", "Quiz 2", "Quiz 3"],
    datasets: [
      {
        label: "Your Progress",
        data: [80, 90, 85], // Example progress in percentage
        fill: true,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const [isQuizTaken, setIsQuizTaken] = useState(false);
  const [marks, setMarks] = useState(0);

  const handleQuizSubmit = () => {
    // Placeholder for quiz submission logic
    setIsQuizTaken(true);
    setMarks(90); // Example marks after submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Quizzes</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Take your quizzes, track your progress, and review your results!
        </p>
      </div>

      {/* Upcoming Quizzes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{quiz.name}</h3>
              <p className="text-gray-400">Date: {quiz.date}</p>
              <p
                className={`text-${
                  quiz.status === "Completed" ? "green" : "orange"
                }-500`}
              >
                {quiz.status}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Progress */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quiz Progress</h2>
        <Line data={progressData} options={{ responsive: true }} />
      </div>

      {/* Quiz Actions */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleQuizSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
        >
          Start Quiz
        </button>

        {isQuizTaken && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold">Quiz Submitted!</h3>
            <p>Your marks: {marks}</p>
          </div>
        )}
      </div>

      {/* Quiz Stats */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Quiz Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <FaListUl className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Quizzes Left</h3>
            <p>2</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <FaCheckCircle className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Completed Quizzes</h3>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
