import React, { useState } from "react";
import ProfileImage from "./Profile.png"; // Ensure you have this image available
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    bio: "A passionate learner who loves exploring new technologies.",
    joined: "January 2022",
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />
            <div>
              <h2 className="text-3xl font-semibold">{userData.name}</h2>
              <p className="text-lg text-gray-400">{userData.email}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-500 transition-all"
          >
            Go Back
          </button>
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Phone Number:</p>
              <p>{userData.phone}</p>
            </div>
            <div>
              <p className="font-medium">Joined:</p>
              <p>{userData.joined}</p>
            </div>
            <div>
              <p className="font-medium">Bio:</p>
              <p>{userData.bio}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-8">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-500 transition-all"
            onClick={() => alert("Profile Edited")}
          >
            Edit Profile
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-500 transition-all"
            onClick={() => alert("Account Deleted")}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
