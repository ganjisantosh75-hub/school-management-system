import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/teachers");
      const data = await response.json();

      if (data.success) {
        setTeachers(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Teacher
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/teachers/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Teacher Deleted Successfully");

        // Refresh Teacher List
        fetchTeachers();
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
            Teacher Management
          </h1>

          <Link
            to="/teachers/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Teacher
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Assigned Class</th>
                <th className="p-4">Assigned Section</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">Email</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {teachers.length > 0 ? (
                teachers.map((teacher) => (
                  <tr
                    key={teacher._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {teacher.fullName}
                    </td>

                    <td className="p-4">
                      {teacher.subject}
                    </td>

                    <td className="p-4">
                      {teacher.className}
                    </td>

                    <td className="p-4">
                      {teacher.section}
                    </td>

                    <td className="p-4">
                      {teacher.mobile}
                    </td>

                    <td className="p-4">
                      {teacher.email}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">

                        <Link
                          to={`/teachers/view/${teacher._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/teachers/edit/${teacher._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(teacher._id)}
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
                    colSpan="7"
                    className="text-center p-8 text-gray-500"
                  >
                    No teachers found.
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

export default Teachers;