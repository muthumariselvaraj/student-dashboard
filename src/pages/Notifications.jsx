import React from "react";
import { FaBell } from "react-icons/fa";

function Notifications() {
  const notifications = [
    "New React class scheduled tomorrow",
    "Assignment deadline extended",
    "Attendance updated",
    "New course added: Python"
  ];

  return (
    <div className="page modern-page">
      <h2>🔔 Notifications</h2>

      <div className="glass-card">
        {notifications.map((note, index) => (
          <div key={index} className="modern-item">
            <FaBell />
            <span>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;