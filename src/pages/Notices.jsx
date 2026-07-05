import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notices");
      const data = await response.json();

      if (data.success) {
        setNotices(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Notice
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/notices/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Notice Deleted Successfully");

        fetchNotices();
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
            Notice Board
          </h1>

          <Link
            to="/notices/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Notice
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Date</th>
                <th className="p-4">Audience</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {notices.length > 0 ? (
                notices.map((notice) => (
                  <tr
                    key={notice._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {notice.title}
                    </td>

                    <td className="p-4">
                      {new Date(
                        notice.noticeDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      {notice.audience}
                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <Link
                          to={`/notices/view/${notice._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/notices/edit/${notice._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(notice._id)
                          }
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
                    colSpan="4"
                    className="text-center p-8 text-gray-500"
                  >
                    No notices found.
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

export default Notices;