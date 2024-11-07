import React from "react";
import { FaUserTie, FaUserGraduate, FaClipboardList } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-bold text-lg">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to EduExcel</h1>
            <p className="text-2xl mt-4">Empowering Interactive Learning</p>
            <div className="mt-6">
              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-600">
                Explore Courses
              </button>
              <button className="bg-secondary text-white px-8 py-4 ml-4 rounded-full hover:bg-secondary-dark">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-8 py-16 bg-[#f0f0f0]">
        <div className="text-center w-[250px] p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300">
          <FaUserTie className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-2xl text-primary">Focused Mode</h3>
          <p className="text-lg text-gray-700 mt-2">
            Helps students stay focused with distraction-free sessions.
          </p>
        </div>
        <div className="text-center w-[250px] p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300">
          <FaUserGraduate className="text-4xl text-green-500 mb-4" />
          <h3 className="text-2xl text-primary">Student Progress</h3>
          <p className="text-lg text-gray-700 mt-2">
            Track student activities and monitor progress easily.
          </p>
        </div>
        <div className="text-center w-[250px] p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300">
          <FaClipboardList className="text-4xl text-red-500 mb-4" />
          <h3 className="text-2xl text-primary">Quizzes</h3>
          <p className="text-lg text-gray-700 mt-2">
            Engage students with interactive quizzes and tests.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">About EduExcel</h2>
        <p className="text-2xl mt-4">
          EduExcel is an innovative platform designed to provide an enhanced
          learning experience for both students and educators.
        </p>
        <p className="text-lg mt-4">
          With features like course tracking, activity monitoring, and focused
          study modes, EduExcel is committed to transforming classrooms.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="flex justify-center bg-green-500 py-12 text-white text-center">
        <div>
          <h2 className="text-4xl font-bold">Join EduExcel Today!</h2>
          <p className="text-2xl mt-4">
            Unlock a world of knowledge and innovation.
          </p>
          <button className="bg-white text-green-500 px-10 py-4 mt-6 rounded-full hover:bg-green-400">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 EduExcel. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
