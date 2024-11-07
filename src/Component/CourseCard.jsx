import React from "react";

function CourseCard({ image, courseName, teacher }) {
  return (
    <div className="flex p-4 rounded-lg shadow-lg bg-white hover:bg-blue-50 transition duration-300 ease-in-out mb-4">
      {/* Profile Image */}
      <img
        src={image}
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover mr-4"
      />

      {/* Course Information */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800">{courseName}</h2>
        <p className="text-gray-600 my-1">Teacher: {teacher}</p>
        <p className="text-gray-500 text-sm my-2">
          Explore in-depth topics and gain advanced knowledge in {courseName}.
          Learn from experienced educators and get hands-on practice with
          real-world examples.
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
            Share
          </button>
          <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
