import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaMicrosoft,
  FaGoogle,
  FaEnvelope,
  FaUserTie,
  FaUserPlus,
  FaUserGraduate,
} from "react-icons/fa";
import DropdownIcon from "./Dropdown.png";
import Profile from "./Profile.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showAccountTypeModal, setShowAccountTypeModal] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleLogout = () => {
    setToken(false);
    setShowLogoutPopup(true);
  };

  const handleCreateAccountClick = () => {
    setShowAccountTypeModal(true);
  };

  return (
    <div className="navbar flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        className="w-44 h-44 cursor-pointer rounded-full border-4 border-white shadow-lg transition-all hover:scale-105"
        src="./logo.jpg"
        alt="EduExcel Logo"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 text-xl font-medium text-white">
        {["Home", "Courses", "Feature", "Contact", "About"].map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className="py-2 hover:text-yellow-300"
          >
            <li className="relative group">
              {item}
              <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-none h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-200" />
            </li>
          </NavLink>
        ))}
      </ul>

      {/* Profile or Create Account */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative group">
            <img className="w-12 rounded-full" src={Profile} alt="Profile" />
            <img className="w-2.5" src={DropdownIcon} alt="Dropdown Icon" />
            <div className="absolute top-12 right-0 bg-white text-gray-800 rounded shadow-lg p-4 hidden group-hover:flex flex-col gap-2 z-10">
              <p
                onClick={() => navigate("/my-profile")}
                className="hover:text-blue-500 cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/activity")}
                className="hover:text-blue-500 cursor-pointer"
              >
                Activity
              </p>
              <p
                onClick={handleLogout}
                className="hover:text-blue-500 cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={handleCreateAccountClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700"
          >
            Create an Account
          </button>
        )}
      </div>

      {/* Account Type Modal */}
      {showAccountTypeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-96 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">
              Select Account Type
            </h2>
            <p className="text-gray-600">Are you a Teacher or a Student?</p>
            <div className="flex justify-around items-center space-x-4">
              <button
                onClick={() => setSelectedUserType("teacher")}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <FaUserTie /> Teacher
              </button>
              <button
                onClick={() => setSelectedUserType("student")}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                <FaUserGraduate /> Student
              </button>
            </div>
            <button
              onClick={() => setShowAccountTypeModal(false)}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Credential Selection Modal */}
      {selectedUserType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-96 space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">
              Login or Register as{" "}
              {selectedUserType === "teacher" ? "Teacher" : "Student"}
            </h2>
            <p className="text-gray-600">Choose a login method</p>

            {/* Conditional rendering based on user type */}
            {selectedUserType === "teacher" ? (
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/teacher-login-email")}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full justify-center"
                >
                  <FaEnvelope /> Login with Email
                </button>
                <button
                  onClick={() => navigate("/teacher-register")}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full justify-center"
                >
                  <FaUserPlus /> Register as Teacher
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/student-login-github")}
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 w-full justify-center"
                >
                  <FaGithub /> Login with GitHub
                </button>
                <button
                  onClick={() => navigate("/student-login-microsoft")}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full justify-center"
                >
                  <FaMicrosoft /> Login with Microsoft
                </button>
                <button
                  onClick={() => navigate("/student-login-google")}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 w-full justify-center"
                >
                  <FaGoogle /> Login with Google
                </button>
                <button
                  onClick={() => navigate("/student-register")}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full justify-center"
                >
                  <FaUserPlus /> Register as Student
                </button>
              </div>
            )}
            <button
              onClick={() => setSelectedUserType(null)}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
