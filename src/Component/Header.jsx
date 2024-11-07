import React from "react";
import CoverPage from "./CoverPage.mp4"; // Import video

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-between h-[80vh] p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        {/* Section for Left Text and Right Video */}
        <div className="flex w-full h-full">
          {/* Left side (Text) */}
          <div className="flex-1 flex flex-col justify-center text-white p-8">
            <p className="text-4xl font-semibold mb-4">
              Welcome to the Enhanced Learning Program
            </p>
            <p className="text-lg mb-6">
              Explore a wide range of interactive courses that cater to all
              learning levels. Advance your skills with engaging content and
              hands-on learning.
            </p>
            <p className="text-lg mb-6 font-bold">
              Join thousands of learners and begin your educational journey
              today!
            </p>
            <p className="text-md mb-6">
              Our platform offers personalized learning paths, real-time
              feedback, and a community to support your growth. Whether you're
              looking to upskill or learn something new, we have something for
              you.
            </p>
            <p className="text-md mb-6">
              Start your journey with our expert-designed courses and track your
              progress through interactive quizzes and challenges.
            </p>
            <button className="bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Right side (Video) */}
          <div className="flex-1 h-full">
            <video
              src={CoverPage}
              controls
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-gray-700"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Gap Between Header and Section */}
      <div className="h-[8vh] bg-transparent"></div>

      {/* Your other content can follow here */}
    </div>
  );
};

export default Header;
