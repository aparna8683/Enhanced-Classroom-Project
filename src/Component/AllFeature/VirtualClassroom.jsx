import React, { useState } from "react";
import {
  FaVideo,
  FaMicrophone,
  FaPhoneAlt,
  FaRegCommentDots,
  FaShareAlt,
  FaUserFriends,
  FaPen,
  FaFileUpload,
  FaHandPaper,
  FaRegSmile,
} from "react-icons/fa";

const VirtualClassroom = () => {
  const [isClassActive, setIsClassActive] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isWhiteboardActive, setIsWhiteboardActive] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [classRecording, setClassRecording] = useState(false);

  // Toggle class start/stop
  const handleStartClass = () => setIsClassActive(!isClassActive);

  // Toggle screen sharing
  const handleToggleScreenSharing = () => setIsScreenSharing(!isScreenSharing);

  // Toggle video on/off
  const handleToggleVideo = () => setIsVideoOn(!isVideoOn);

  // Toggle audio on/off
  const handleToggleAudio = () => setIsAudioOn(!isAudioOn);

  // Toggle whiteboard drawing mode
  const handleToggleWhiteboard = () =>
    setIsWhiteboardActive(!isWhiteboardActive);

  // Handle sending a message in the chat
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, newMessage]);
      setNewMessage("");
    }
  };

  // Handle raising hand
  const handleRaiseHand = () => setIsHandRaised(!isHandRaised);

  // Toggle class recording
  const handleRecordClass = () => setClassRecording(!classRecording);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-600 mb-6">
          Virtual Classroom
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Welcome to your virtual classroom. Start your class, share your
          screen, and interact with students seamlessly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Start Class Button */}
        <div className="flex justify-center">
          <button
            onClick={handleStartClass}
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
          >
            {isClassActive ? "End Class" : "Start Class"}
          </button>
        </div>

        {isClassActive && (
          <div className="space-y-6">
            {/* Virtual Classroom Controls */}
            <div className="flex justify-center gap-8">
              <button
                onClick={handleToggleVideo}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-green-700"
              >
                <FaVideo
                  className={`inline mr-2 ${
                    isVideoOn ? "text-white" : "text-gray-400"
                  }`}
                />
                {isVideoOn ? "Turn Off Video" : "Turn On Video"}
              </button>

              <button
                onClick={handleToggleAudio}
                className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-yellow-700"
              >
                <FaMicrophone
                  className={`inline mr-2 ${
                    isAudioOn ? "text-white" : "text-gray-400"
                  }`}
                />
                {isAudioOn ? "Mute Audio" : "Unmute Audio"}
              </button>

              <button
                onClick={handleToggleScreenSharing}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-purple-700"
              >
                <FaShareAlt
                  className={`inline mr-2 ${
                    isScreenSharing ? "text-white" : "text-gray-400"
                  }`}
                />
                {isScreenSharing ? "Stop Sharing Screen" : "Share Screen"}
              </button>

              <button
                onClick={handleRecordClass}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-red-700"
              >
                <FaPhoneAlt className="inline mr-2" />
                {classRecording ? "Stop Recording" : "Start Recording"}
              </button>

              {/* Whiteboard Button */}
              <button
                onClick={handleToggleWhiteboard}
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-orange-700"
              >
                <FaPen className="inline mr-2" />
                {isWhiteboardActive
                  ? "Disable Whiteboard"
                  : "Enable Whiteboard"}
              </button>

              {/* Raise Hand Button */}
              <button
                onClick={handleRaiseHand}
                className={`px-6 py-3 ${
                  isHandRaised ? "bg-green-700" : "bg-blue-600"
                } text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105`}
              >
                <FaHandPaper className="inline mr-2" />
                {isHandRaised ? "Lower Hand" : "Raise Hand"}
              </button>
            </div>

            {/* Participants List */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-pink-500 mb-4">
                Participants <FaUserFriends className="inline" />
              </h2>
              <ul className="list-disc pl-6">
                {/* Dummy participants list */}
                <li>John Doe</li>
                <li>Jane Smith</li>
                <li>Mark Wilson</li>
                <li>Emily Johnson</li>
              </ul>
            </div>

            {/* Chat Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
                Chat <FaRegCommentDots className="inline" />
              </h2>

              <div className="space-y-4 mb-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg text-gray-200"
                  >
                    {message}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-green-700"
                >
                  Send
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gradient bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
                File Upload <FaFileUpload className="inline" />
              </h2>
              <input
                type="file"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualClassroom;
