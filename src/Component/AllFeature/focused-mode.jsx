import React, { useState, useEffect } from "react";
import { FaRegPlayCircle, FaPauseCircle, FaMusic } from "react-icons/fa";

const Focused = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [focusDuration, setFocusDuration] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [exitPrompt, setExitPrompt] = useState(false);

  // Simulate educational website restriction
  const blockNonEducationalWebsites = () => {
    // Placeholder for actual website blocking logic.
    alert("You cannot visit non-educational websites during Focused Mode!");
  };

  // Play study music
  const toggleMusic = () => {
    const audio = document.getElementById("study-music");
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Start Focused Mode timer
  const startFocusedMode = () => {
    if (focusDuration > 0) {
      setIsFocused(true);
      setTimeLeft(focusDuration);
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(countdown);
            setIsFocused(false);
            alert("Focused Mode has ended!");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      alert("Please set a valid focus duration.");
    }
  };

  // Handle Exit Focused Mode
  const exitFocusedMode = () => {
    setIsFocused(false);
    setExitPrompt(false);
    setTimeLeft(0);
    alert("You exited Focused Mode.");
  };

  useEffect(() => {
    if (isFocused) {
      blockNonEducationalWebsites();
    }
  }, [isFocused]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Focused Mode</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Set your focus time, block distractions, and listen to music to
          enhance your concentration.
        </p>
      </div>

      {/* Focus Duration Input */}
      {!isFocused && !exitPrompt && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Set Focused Mode Duration
          </h2>
          <input
            type="number"
            className="bg-gray-800 text-white p-3 rounded-lg shadow-lg mb-4"
            placeholder="Enter time in minutes"
            value={focusDuration}
            onChange={(e) => setFocusDuration(e.target.value)}
          />
          <div>
            <button
              onClick={startFocusedMode}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              Start Focused Mode
            </button>
          </div>
        </div>
      )}

      {/* Focused Mode Active */}
      {isFocused && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Focused Mode Active</h2>
          <div className="text-xl font-semibold mb-4">
            Time Remaining: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </div>
          <button
            onClick={() => setExitPrompt(true)}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
          >
            Exit Focused Mode
          </button>
        </div>
      )}

      {/* Exit Prompt */}
      {exitPrompt && !isFocused && (
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-400 mb-4">
            Are you sure you want to exit?
          </h3>
          <button
            onClick={exitFocusedMode}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
          >
            Yes, Exit
          </button>
          <button
            onClick={() => setExitPrompt(false)}
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105 ml-4"
          >
            No, Stay Focused
          </button>
        </div>
      )}

      {/* Study Music */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">Play Study Music</h3>
        <button
          onClick={toggleMusic}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105"
        >
          {isMusicPlaying ? (
            <span>
              <FaPauseCircle className="inline mr-2" />
              Pause Music
            </span>
          ) : (
            <span>
              <FaMusic className="inline mr-2" />
              Play Music
            </span>
          )}
        </button>
      </div>

      {/* Hidden Audio for Study Music */}
      <audio id="study-music" loop>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Focused;
