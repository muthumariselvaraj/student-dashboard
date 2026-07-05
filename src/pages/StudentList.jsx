import { useEffect, useState } from "react";
import api from "../api/api";
import studentsData from "../data/students.json";
import Loader from "../components/Loader";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
    } catch (error) {
      console.log("API Failed. Loading Mock Data...");
      setStudents(studentsData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Student List</h1>
          <p>Manage all students from one place</p>
        </div>
      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {students.map((student, index) => (

              <tr key={index}>

                <td>

                  <img
                    src={`https://i.pravatar.cc/50?img=${index + 10}`}
                    alt={student.name}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                    }}
                  />

                </td>

                <td>{student.name}</td>

                <td>{student.department}</td>

                <td>{student.year}</td>

                <td>

                  <span
                    style={{
                      background: "#22c55e",
                      color: "white",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "13px",
                    }}
                  >
                    Active
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default StudentList;