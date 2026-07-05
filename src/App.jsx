import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import StudentProfile from "./pages/StudentProfile";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Notifications from "./pages/Notifications";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <div className="main-content">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/students" element={<StudentList />} />

            <Route path="/profile" element={<StudentProfile />} />

            <Route path="/courses" element={<Courses />} />

            <Route path="/attendance" element={<Attendance />} />

            <Route path="/notifications" element={<Notifications />} />

          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;