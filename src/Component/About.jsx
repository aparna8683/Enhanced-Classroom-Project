import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaStar,
  FaHandshake,
  FaRegCommentDots,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">About EduExcel</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          EduExcel is the ultimate learning platform designed to revolutionize
          the educational experience for students and teachers. With engaging
          tools, real-time collaboration, and personalized learning paths,
          EduExcel empowers learners to achieve their full potential.
        </p>
      </div>

      {/* App Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all">
          <div className="text-center mb-6">
            <FaApple className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">iOS App</h3>
            <p className="text-gray-400">
              Download the EduExcel app for seamless learning on your iPhone and
              iPad.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/us/app/eduexcel/id1234567890"
              className="bg-gray-700 text-white py-2 px-4 rounded-lg transform transition-all hover:scale-105 mr-4"
            >
              <FaApple className="inline-block mr-2" /> Download on the App
              Store
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all">
          <div className="text-center mb-6">
            <FaGooglePlay className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Android App</h3>
            <p className="text-gray-400">
              Access EduExcel on your Android phone and tablet for an optimized
              learning experience.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.eduexcel"
              className="bg-gray-700 text-white py-2 px-4 rounded-lg transform transition-all hover:scale-105"
            >
              <FaGooglePlay className="inline-block mr-2" /> Get it on Google
              Play
            </a>
          </div>
        </div>

        {/* Rating and Feedback Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all">
          <div className="text-center mb-6">
            <FaStar className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">App Ratings</h3>
            <p className="text-gray-400">
              We appreciate your feedback! See why users love EduExcel and check
              out our ratings.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-xl font-semibold text-yellow-400 mb-2">
                4.8/5
              </div>
              <div className="flex justify-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-gray-600" />
              </div>
              <p className="text-gray-400 mt-2">Based on 1,250+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white mb-6">Features</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all max-w-xs">
            <FaHandshake className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Real-time Collaboration
            </h3>
            <p className="text-gray-400">
              Students and teachers can collaborate in real-time to enhance the
              learning experience.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transform transition-all max-w-xs">
            <FaRegCommentDots className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Communication Hub</h3>
            <p className="text-gray-400">
              Our platform offers a built-in communication forum to facilitate
              discussions and Q&A.
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          We Value Your Feedback!
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-lg text-white mb-2">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              rows="4"
              className="w-full p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="We'd love to hear your thoughts..."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>

      {/* Footer with Download and Ratings */}
      <div className="text-center mt-12 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Download the App
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://apps.apple.com/us/app/eduexcel/id1234567890"
            className="bg-gray-700 text-white py-2 px-4 rounded-lg transform transition-all hover:scale-105"
          >
            <FaApple className="inline-block mr-2" /> Download on the App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.eduexcel"
            className="bg-gray-700 text-white py-2 px-4 rounded-lg transform transition-all hover:scale-105"
          >
            <FaGooglePlay className="inline-block mr-2" /> Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
