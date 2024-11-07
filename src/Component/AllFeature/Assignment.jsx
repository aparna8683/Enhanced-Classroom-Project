import React, { useState } from "react";
import { FaCloudUploadAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Assignment = () => {
  // State to handle the file upload and assignment status
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("not-submitted");

  // Handle file upload change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file submission
  const handleSubmit = () => {
    if (!file) {
      alert("Please upload an assignment before submitting.");
    } else {
      setStatus("submitted");
      alert("Assignment submitted successfully!");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          Interactive Assignment Submission
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Submit your assignment and check its status instantly.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto">
        {/* Status and Upload Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl transition transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 mb-6">
            Upload Your Assignment
          </h2>
          <div className="flex flex-col items-center mb-6">
            <label className="text-lg text-gray-400 mb-3">
              Choose an assignment file:
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg cursor-pointer transition hover:bg-gray-600"
            />
          </div>

          {/* Submission Button */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-green-700"
            >
              Submit Assignment
            </button>
            <button
              onClick={() => setFile(null)}
              className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-red-700"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Assignment Status Section */}
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-xl transition transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 mb-6">
            Assignment Status
          </h3>
          <div className="flex justify-center items-center gap-4">
            {status === "not-submitted" ? (
              <div className="text-lg text-gray-400">
                <FaTimesCircle className="text-red-500 text-5xl mb-2" />
                <p>Not Submitted</p>
              </div>
            ) : (
              <div className="text-lg text-gray-400">
                <FaCheckCircle className="text-green-500 text-5xl mb-2" />
                <p>Submitted</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
