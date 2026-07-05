import { useEffect, useState } from "react";
import api from "../api/api";
import mockData from "../data/dashboard.json";
import Loader from "../components/Loader";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCalendarCheck,
  FaBell,
} from "react-icons/fa";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/dashboard");
      setData(response.data);
    } catch (error) {
      console.error("API Error:", error);
      setData(mockData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>

          <h1>Welcome Back 👋</h1>

          <p>Student Management Dashboard</p>

        </div>

        <img
          src="https://i.pravatar.cc/120"
          alt="profile"
          className="header-profile"
        />

      </div>

      {/* Statistics */}

      <div className="cards">

        <div className="card blue">

          <div>

            <h2>{data.students}</h2>

            <p>Total Students</p>

          </div>

          <FaUserGraduate className="card-icon" />

        </div>

        <div className="card purple">

          <div>

            <h2>{data.courses}</h2>

            <p>Total Courses</p>

          </div>

          <FaBookOpen className="card-icon" />

        </div>

        <div className="card green">

          <div>

            <h2>{data.attendance}</h2>

            <p>Attendance</p>

          </div>

          <FaCalendarCheck className="card-icon" />

        </div>

        <div className="card orange">

          <div>

            <h2>{data.notifications}</h2>

            <p>Notifications</p>

          </div>

          <FaBell className="card-icon" />

        </div>

      </div>

      {/* Bottom Grid */}

      <div className="dashboard-grid">

        <div className="panel">

          <h2>Student Overview</h2>

          <p>
            Welcome to the Student Dashboard. Here you can manage students,
            monitor attendance, browse courses, and receive important
            notifications.
          </p>

          <button className="btn">
            View Students
          </button>

        </div>

        <div className="panel">

          <h2>Upcoming Events</h2>

          <ul>

            <li>📘 React Assignment - Tomorrow</li>

            <li>📝 Internal Exam - Monday</li>

            <li>🎓 Seminar - Friday</li>

            <li>🏆 Placement Training - Next Week</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;