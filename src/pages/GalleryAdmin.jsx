import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function GalleryAdmin() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch(`${API_URL}/api/gallery`);

      const data = await response.json();

      if (data.success) {
        setGallery(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this gallery item?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
  `${API_URL}/api/gallery/${id}`,
  {
    method: "DELETE",
  }
);

      const data = await response.json();

      if (data.success) {
        alert("Gallery Item Deleted Successfully");
        fetchGallery();
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
            Gallery Management
          </h1>

          <Link
            to="/gallery-admin/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Gallery
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Event Date</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {gallery.length > 0 ? (
                gallery.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">{item.title}</td>

                    <td className="p-4">{item.category}</td>

                    <td className="p-4">
                      {new Date(item.eventDate).toLocaleDateString()}
                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <Link
                          to={`/gallery-admin/view/${item._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/gallery-admin/edit/${item._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(item._id)}
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
                    No Gallery Items Found
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

export default GalleryAdmin;