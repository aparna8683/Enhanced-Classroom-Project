import React from "react";
import CourseCard from "./CourseCard";
import Prof1 from "./prof1.png";
import Prof2 from "./Prof2.png";
import Prof3 from "./Prof3.png";
import Prof4 from "./Prof4.png";
import Prof5 from "./Prof5.png";

const Course = () => {
  // Course data with sample profile images
  const courses = [
    {
      name: "Data Structure and Algorithm",
      teacher: "Dr. Smith",
      image: Prof1,
    },
    {
      name: "Computer Network",
      teacher: "Prof. Johnson",
      image: Prof2,
    },
    {
      name: "Web Development",
      teacher: "Ms. Davis",
      image: Prof3,
    },
    {
      name: "Object Oriented Programming",
      teacher: "Mr. Lee",
      image: Prof4,
    },
    {
      name: "DBMS",
      teacher: "Dr. Miller",
      image: Prof5,
    },
    {
      name: "Operating System",
      teacher: "Prof. Brown",
      image: Prof5,
    },
    {
      name: "Cyber Security",
      teacher: "Ms. Wilson",
      image: Prof5,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.name}
            teacher={course.teacher}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
