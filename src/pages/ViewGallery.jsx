import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function ViewGallery() {
  const { id } = useParams();

  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
     const response = await fetch(
  `${API_URL}/api/gallery/${id}`
);

      const data = await response.json();

      if (data.success) {
        setGallery(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!gallery) {
    return (
      <AdminLayout>
        <div className="p-10 text-xl">
          Loading...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-4xl font-bold mb-8">
          View Gallery
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
  src={`${API_URL}/${gallery.image}`}
  alt={gallery.title}
  className="w-full h-[450px] object-cover"
/>

          <div className="p-8">

            <h2 className="text-3xl font-bold">
              {gallery.title}
            </h2>

            <p className="mt-4">
              <span className="font-semibold">
                Category:
              </span>{" "}
              {gallery.category}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Event Date:
              </span>{" "}
              {new Date(gallery.eventDate).toLocaleDateString()}
            </p>

            <p className="mt-6 text-gray-700 leading-7">
              {gallery.description}
            </p>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewGallery;