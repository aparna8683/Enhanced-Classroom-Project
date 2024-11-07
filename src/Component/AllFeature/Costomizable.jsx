import React, { useState } from "react";
import { FaPlusCircle, FaSave, FaTrashAlt } from "react-icons/fa";

const Costomizable = () => {
  // State to hold course content and input field data
  const [courseContent, setCourseContent] = useState({
    title: "",
    description: "",
    resources: [],
  });

  const [newResource, setNewResource] = useState("");

  // Handle input changes for course content title and description
  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setCourseContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  // Handle adding new resource to the course content
  const handleAddResource = () => {
    if (newResource.trim() !== "") {
      setCourseContent((prevContent) => ({
        ...prevContent,
        resources: [...prevContent.resources, newResource],
      }));
      setNewResource(""); // Clear the input after adding
    }
  };

  // Handle removing a resource
  const handleRemoveResource = (index) => {
    const updatedResources = courseContent.resources.filter(
      (resource, i) => i !== index
    );
    setCourseContent((prevContent) => ({
      ...prevContent,
      resources: updatedResources,
    }));
  };

  // Handle saving the course content
  const handleSaveContent = () => {
    alert("Course Content Saved!");
    // Here, you would typically send the data to your server or database
    console.log(courseContent);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mb-6">
          Customizable Course Content
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Personalize and manage your course content with ease.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Course Content Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 mb-6">
            Course Information
          </h2>

          {/* Course Title */}
          <div className="mb-6">
            <label className="block text-lg text-gray-300 mb-2">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={courseContent.title}
              onChange={handleContentChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course title"
            />
          </div>

          {/* Course Description */}
          <div className="mb-6">
            <label className="block text-lg text-gray-300 mb-2">
              Course Description
            </label>
            <textarea
              name="description"
              value={courseContent.description}
              onChange={handleContentChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course description"
              rows="4"
            />
          </div>

          {/* Resource Section */}
          <div className="mb-6">
            <label className="block text-lg text-gray-300 mb-2">
              Add Resources
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={newResource}
                onChange={(e) => setNewResource(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter resource link or description"
              />
              <button
                onClick={handleAddResource}
                className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                <FaPlusCircle />
              </button>
            </div>
          </div>

          {/* Display Added Resources */}
          {courseContent.resources.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-4">
                Resources Added
              </h3>
              <ul className="list-disc pl-6">
                {courseContent.resources.map((resource, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-300"
                  >
                    <span>{resource}</span>
                    <button
                      onClick={() => handleRemoveResource(index)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSaveContent}
              className="px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
            >
              <FaSave className="inline mr-2" />
              Save Course Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costomizable;
