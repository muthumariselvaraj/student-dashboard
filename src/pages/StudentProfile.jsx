import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaBook, FaIdBadge } from "react-icons/fa";

function StudentProfile() {
  return (
    <div className="page modern-page">
      <h2>👤 Student Profile</h2>

      <div className="profile-container">
        {/* Left Card */}
        <div className="profile-card-main">
          <div className="avatar-big">JD</div>
          <h3>Muthu</h3>
          <p>Full Stack Developer Student</p>
        </div>

        {/* Right Info */}
        <div className="glass-card profile-info-box">
          <div className="info-row">
            <FaIdBadge />
            <span>Student ID: STU101</span>
          </div>

          <div className="info-row">
            <FaUser />
            <span>Name: Muthu</span>
          </div>

          <div className="info-row">
            <FaEnvelope />
            <span>muthu@example.com</span>
          </div>

          <div className="info-row">
            <FaPhone />
            <span>+91 9876543210</span>
          </div>

          <div className="info-row">
            <FaBook />
            <span>React JS, Node JS, MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;