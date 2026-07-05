import React from "react";
import { FaBook } from "react-icons/fa";

function Courses() {
  const courses = [
    "React JS",
    "Node JS",
    "Python",
    "MongoDB",
    "Data Structures"
  ];

  return (
    <div className="page modern-page">
      <h2>📚 Courses</h2>

      <div className="glass-card">
        {courses.map((course, index) => (
          <div key={index} className="modern-item">
            <FaBook />
            <span>{course}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;