import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Course from "./Component/Course";
import Feature from "./Component/Feature";
import Profile from "./Component/Profile";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Nav/Navbar";
import FeaturesPage from "./Component/Feature";
import ProfilePage from "./Nav/ProfilePage";

// Importing individual feature pages
import Activity from "./Component/AllFeature/Activity";
import Assignment from "./Component/AllFeature/Assignment";
import Attendance from "./Component/AllFeature/Attendance";
import Communication from "./Component/AllFeature/Communication";
import Customizable from "./Component/AllFeature/Costomizable";
import Progress from "./Component/AllFeature/Progress";
import Quizzes from "./Component/AllFeature/Quizzes";
import StudentAnalytics from "./Component/AllFeature/StudentAnalytics";
import VirtualClassroom from "./Component/AllFeature/VirtualClassroom";
import FocusedMode from "./Component/AllFeature/focused-mode";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Individual Feature Pages */}
        <Route path="/features/activity" element={<Activity />} />
        <Route path="/features/assignment" element={<Assignment />} />
        <Route path="/features/attendance" element={<Attendance />} />
        <Route path="/features/communication" element={<Communication />} />
        <Route path="/features/customizable" element={<Customizable />} />
        <Route path="/features/progress" element={<Progress />} />
        <Route path="/features/quizzes" element={<Quizzes />} />
        <Route
          path="/features/student-analytics"
          element={<StudentAnalytics />}
        />
        <Route
          path="/features/virtual-classroom"
          element={<VirtualClassroom />}
        />
        <Route path="/features/focused" element={<FocusedMode />} />
        <Route path="/my-profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
