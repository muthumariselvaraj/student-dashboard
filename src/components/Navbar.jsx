import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaUserCircle,
  FaBook,
  FaCalendarCheck,
  FaBell,
  FaGraduationCap,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Student List",
      path: "/students",
      icon: <FaUserGraduate />,
    },
    {
      name: "Student Profile",
      path: "/profile",
      icon: <FaUserCircle />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <FaBook />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FaCalendarCheck />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <FaBell />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <FaGraduationCap className="logo-icon" />
        <div>
          <h2>EduPortal</h2>
          <p>Student Dashboard</p>
        </div>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={
                location.pathname === item.path
                  ? "menu-link active"
                  : "menu-link"
              }
            >
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <img
          src="https://i.pravatar.cc/100"
          alt="Student"
          className="profile-image"
        />

        <h4>Rahul</h4>

        <p>Computer Science</p>
      </div>
    </div>
  );
}

export default Navbar;