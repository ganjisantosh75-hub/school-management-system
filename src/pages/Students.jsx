import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/students`);
      const data = await response.json();

      if (data.success) {
        setStudents(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Student
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${API_URL}/api/students/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Student Deleted Successfully");

        // Refresh Student List
        fetchStudents();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Student Management
          </h1>

          <Link
            to="/students/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Student
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Class</th>
                <th className="p-4">Roll No.</th>
                <th className="p-4">Parent Phone</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {students.length > 0 ? (
                students.map((student) => (
                  <tr
                    key={student._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {student.firstName} {student.lastName}
                    </td>

                    <td className="p-4">
                      {student.className}
                    </td>

                    <td className="p-4">
                      {student.rollNumber}
                    </td>

                    <td className="p-4">
                      {student.parentPhone}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">

                        <Link
                          to={`/students/view/${student._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/students/edit/${student._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(student._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-8 text-gray-500"
                  >
                    No students found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Students;