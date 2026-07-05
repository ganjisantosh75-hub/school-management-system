import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function Admin() {
  const [admissions, setAdmissions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admissions");
      const data = await response.json();

      setAdmissions(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this admission?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await fetch(`http://localhost:5000/api/admissions/${id}`, {
        method: "DELETE",
      });

      fetchAdmissions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admission List</h1>

          <input
            type="text"
            placeholder="Search by Student, Parent or Class..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border p-3">Student</th>
                <th className="border p-3">Parent</th>
                <th className="border p-3">Class</th>
                <th className="border p-3">Mobile</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {admissions.filter((item) => {
                return (
                  item.studentName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.parentName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.studentClass
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              }).length > 0 ? (
                admissions
                  .filter((item) => {
                    return (
                      item.studentName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.parentName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.studentClass
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    );
                  })
                  .map((item) => (
                    <tr key={item._id}>
                      <td className="border p-3">{item.studentName}</td>

                      <td className="border p-3">{item.parentName}</td>

                      <td className="border p-3">{item.studentClass}</td>

                      <td className="border p-3">{item.mobile}</td>

                      <td className="border p-3">{item.email}</td>

                      <td className="border p-3">
                        <div className="flex gap-2">
                          <Link
                            to={`/admin/view/${item._id}`}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                          >
                            View
                          </Link>

                          <Link
                            to={`/admin/edit/${item._id}`}
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
                    colSpan="6"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No admissions found.
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

export default Admin;