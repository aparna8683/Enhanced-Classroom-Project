import React, { useState } from "react";
import {
  FaUserPlus,
  FaThumbsUp,
  FaRegCommentDots,
  FaExclamationTriangle,
  FaUserShield,
  FaUsers,
  FaPlusCircle,
  FaBan,
} from "react-icons/fa";

const Communication = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "Can anyone help with the homework?",
      replies: [],
      reported: false,
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "I have a question about the class schedule.",
      replies: [],
      reported: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [role, setRole] = useState("student"); // "admin" or "student"

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: "Current User",
          content: newMessage,
          replies: [],
          reported: false,
        },
      ]);
      setNewMessage("");
    }
  };

  const handleReportMessage = (messageId) => {
    setMessages(
      messages.map((msg) =>
        msg.id === messageId ? { ...msg, reported: true } : msg
      )
    );
  };

  const handleBlockMessage = (messageId) => {
    setMessages(messages.filter((msg) => msg.id !== messageId));
  };

  const handleAddMember = () => {
    // Implement logic to add new member (this can be more advanced with forms or API calls)
    alert("Adding a new member...");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-600 mb-6">
          Communication Forum
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A platform for teachers and students to communicate and collaborate.
        </p>
      </div>

      {/* Role-based Buttons (Admin/Student Portals) */}
      <div className="flex justify-center gap-8 mb-12">
        <button
          onClick={() => setRole("admin")}
          className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-red-700"
        >
          Admin Portal
        </button>
        <button
          onClick={() => setRole("student")}
          className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
        >
          Student Portal
        </button>
      </div>

      {/* Forum Section */}
      <div className="space-y-8">
        {/* New Message Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
            Post a Message
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">{message.user}</div>
                <div className="flex gap-2">
                  {/* Report Button */}
                  <button
                    onClick={() => handleReportMessage(message.id)}
                    className={`px-4 py-2 rounded-lg transform transition hover:scale-105 ${
                      message.reported ? "bg-red-600" : "bg-yellow-600"
                    }`}
                    disabled={message.reported}
                  >
                    <FaExclamationTriangle className="inline mr-2" />
                    {message.reported ? "Reported" : "Report"}
                  </button>
                  {/* Block Button */}
                  <button
                    onClick={() => handleBlockMessage(message.id)}
                    className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-red-700"
                  >
                    <FaBan className="inline mr-2" />
                    Block
                  </button>
                </div>
              </div>
              <p className="text-gray-300 mt-2">{message.content}</p>

              {/* Replies Section */}
              <div className="mt-4 ml-8">
                {message.replies.length > 0 ? (
                  message.replies.map((reply, idx) => (
                    <div key={idx} className="bg-gray-700 p-4 rounded-lg mt-2">
                      <div className="font-semibold">Reply {idx + 1}:</div>
                      <p>{reply}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No replies yet.</p>
                )}
              </div>

              {/* Add Reply */}
              <div className="flex gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Add a reply..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-700">
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Features (Add Member) */}
      {role === "admin" && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
            Admin Actions <FaUserShield className="inline" />
          </h2>
          <button
            onClick={handleAddMember}
            className="px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-purple-700"
          >
            <FaUserPlus className="inline mr-2" />
            Add New Member
          </button>
        </div>
      )}
    </div>
  );
};

export default Communication;
