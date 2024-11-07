import React, { useState } from "react";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  // Teacher & Parent Portal State
  const [portal, setPortal] = useState("none");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSuccess(true);
      setMessage("");
      setEmail("");
      setName("");
    } else {
      setSuccess(false);
    }
  };

  const handlePortalLogin = (e) => {
    e.preventDefault();
    // Basic login validation, real authentication logic goes here
    if (emailLogin && passwordLogin && otp) {
      setPortal("none"); // Close portal after successful login
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Contact Your Teacher
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Have questions or need help? Reach out to your teacher directly
          through the contact form below.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              rows="5"
              placeholder="Enter your message to the teacher"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <FaPaperPlane className="inline-block mr-2" />
              Send Message
            </button>
          </div>
        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-6 text-green-500 text-center font-semibold">
            Message Sent Successfully! We will get back to you soon.
          </div>
        )}
      </div>

      {/* Contact Info Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <FaEnvelope className="text-3xl text-blue-500" />
            <span className="text-xl text-white">teacher@example.com</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <FaPhone className="text-3xl text-green-500" />
            <span className="text-xl text-white">+1 234 567 890</span>
          </div>
        </div>
      </div>

      {/* Parent Portal & Teacher Portal */}
      <div className="mt-16 text-center">
        <button
          onClick={() => setPortal("parent")}
          className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 mr-4"
        >
          Parent Portal
        </button>
        <button
          onClick={() => setPortal("teacher")}
          className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
        >
          Teacher Portal
        </button>
      </div>

      {/* Login Portal for Parent and Teacher */}
      {portal !== "none" && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              {portal === "parent"
                ? "Parent Portal Login"
                : "Teacher Portal Login"}
            </h2>

            <form onSubmit={handlePortalLogin}>
              <div className="mb-6">
                <label htmlFor="emailLogin" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="emailLogin"
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="passwordLogin" className="block text-lg mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="passwordLogin"
                    value={passwordLogin}
                    onChange={(e) => setPasswordLogin(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {portal === "teacher" && (
                <div className="mb-6">
                  <label htmlFor="otp" className="block text-lg mb-2">
                    OTP (2FA)
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                    placeholder="Enter OTP"
                    required
                  />
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
