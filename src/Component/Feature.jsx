import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUsers,
  FaClipboardCheck,
  FaClock,
  FaListUl,
  FaChalkboardTeacher,
  FaBookOpen,
} from "react-icons/fa";

const features = [
  {
    title: "Real-Time Student Analytics",
    description:
      "Track student engagement, course completion rates, and performance metrics.",
    icon: <FaCheckCircle className="text-blue-500" />,
    image: "/images/analytics.jpg",
    link: "/features/student-analytics",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600", // New gradient
    size: "large", // Larger card
  },
  {
    title: "Interactive Assignment Submissions",
    description:
      "Submit assignments and receive feedback instantly with our streamlined interface.",
    icon: <FaClipboardCheck className="text-green-500" />,
    image: "/images/assignments.jpg",
    link: "/features/assignment",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500", // New gradient
    size: "medium",
  },
  {
    title: "Customizable Course Content",
    description:
      "Tailor course content, add resources, and personalize the learning journey.",
    icon: <FaBookOpen className="text-purple-500" />,
    image: "/images/course-content.jpg",
    link: "/features/customizable",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600", // New gradient
    size: "small", // Smaller card
  },
  {
    title: "Virtual Classroom Environment",
    description:
      "Engage in real-time virtual classes with HD video, screen sharing, and chat options.",
    icon: <FaChalkboardTeacher className="text-red-500" />,
    image: "/images/virtual-classroom.jpg",
    link: "/features/virtual-classroom",
    gradient: "bg-gradient-to-br from-red-500 to-yellow-600", // New gradient
    size: "medium",
  },
  {
    title: "Comprehensive Progress Dashboard",
    description:
      "Visualize overall progress with easy-to-read graphs and insights.",
    icon: <FaCheckCircle className="text-orange-500" />,
    image: "/images/progress-dashboard.jpg",
    link: "/features/progress",
    gradient: "bg-gradient-to-br from-orange-400 to-yellow-500", // New gradient
    size: "small",
  },
  {
    title: "Focused Mode",
    description:
      "Minimize distractions to help students stay focused on learning tasks.",
    icon: <FaClipboardCheck className="text-red-500" />,
    image: "/images/focused-mode.jpg",
    link: "/features/focused",
    gradient: "bg-gradient-to-br from-pink-500 to-purple-600", // New gradient
    size: "large",
  },
  {
    title: "Communication Forum",
    description: "Facilitate open discussions between teachers and students.",
    icon: <FaUsers className="text-green-500" />,
    image: "/images/communication.jpg",
    link: "/features/communication",
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-600", // New gradient
    size: "medium",
  },
  {
    title: "Attendance Tracker",
    description: "Track and manage student attendance easily.",
    icon: <FaClock className="text-yellow-500" />,
    image: "/images/attendance.jpg",
    link: "/features/attendance",
    gradient: "bg-gradient-to-br from-yellow-500 to-orange-600", // New gradient
    size: "small",
  },
  {
    title: "Quizzes",
    description:
      "Interactive quizzes to assess student understanding and track progress.",
    icon: <FaListUl className="text-purple-500" />,
    image: "/images/quizzes.jpg",
    link: "/features/quizzes",
    gradient: "bg-gradient-to-br from-indigo-400 to-violet-500", // New gradient
    size: "medium",
  },
  {
    title: "Activity Tracking",
    description:
      "Monitor and report on each student’s activities and progress.",
    icon: <FaCheckCircle className="text-orange-500" />,
    image: "/images/activity.jpg",
    link: "/features/activity",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600", // New gradient
    size: "small",
  },
];

const FeaturesPage = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Our Features
        </h1>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto">
          Explore the tools and functionalities that make our platform stand out
          and enhance the learning experience.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <Link
            to={feature.link} // Direct link to the path
            key={index}
            className={`transform transition-all hover:scale-105 hover:rotate-3d ${
              feature.size === "large"
                ? "col-span-2"
                : feature.size === "small"
                ? "col-span-1"
                : "col-span-1"
            }`}
          >
            <div
              className={`p-6 ${feature.gradient} rounded-lg shadow-lg transition-all hover:shadow-2xl transform duration-300 hover:scale-105`}
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                perspective: "1000px",
              }}
            >
              <div className="bg-black bg-opacity-60 p-4 rounded-lg">
                <div className="flex items-center mb-4 text-white">
                  {feature.icon}
                  <h2 className="ml-2 text-2xl font-semibold">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
