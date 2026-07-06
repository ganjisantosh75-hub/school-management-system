import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function Subjects() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await fetch(`${API_URL}/api/subjects`);
      const data = await response.json();

      if (data.success) {
        setSubjects(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Subject
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this subject?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${API_URL}/api/subjects/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Subject Deleted Successfully");

        fetchSubjects();
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
            Subject Management
          </h1>

          <Link
            to="/subjects/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Subject
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">

              <tr>
                <th className="p-4">Subject</th>
                <th className="p-4">Code</th>
                <th className="p-4">Class</th>
                <th className="p-4">Teacher</th>
                <th className="p-4">Action</th>
              </tr>

            </thead>

            <tbody>

              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <tr
                    key={subject._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {subject.subjectName}
                    </td>

                    <td className="p-4">
                      {subject.subjectCode}
                    </td>

                    <td className="p-4">
                      {subject.className}
                    </td>

                    <td className="p-4">
                      {subject.teacherName}
                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <Link
                          to={`/subjects/view/${subject._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/subjects/edit/${subject._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(subject._id)}
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
                    No subjects found.
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

export default Subjects;