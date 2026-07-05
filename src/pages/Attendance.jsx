import React from "react";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";

function Attendance() {
  const students = [
    { name: "Muthu", status: "Present", percent: 85 },
    { name: "Priya", status: "Absent", percent: 60 },
    { name: "Devi", status: "Present", percent: 92 },
    { name: "Selvi", status: "Present", percent: 78 }
  ];

  const total = students.length;
  const present = students.filter(s => s.status === "Present").length;

  return (
    <div className="page modern-page">
      <h2>📊 Attendance Dashboard</h2>

      {/* Summary Cards */}
      <div className="attendance-summary">
        <div className="summary-card green">
          <FaUserCheck />
          <h3>{present}</h3>
          <p>Present</p>
        </div>

        <div className="summary-card red">
          <FaUserTimes />
          <h3>{total - present}</h3>
          <p>Absent</p>
        </div>
      </div>

      {/* Attendance List */}
      <div className="glass-card">
        {students.map((s, index) => (
          <div key={index} className="attendance-row">
            <div>
              <h4>{s.name}</h4>
              <p>{s.percent}% Attendance</p>
            </div>

            <span className={s.status === "Present" ? "tag green" : "tag red"}>
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;