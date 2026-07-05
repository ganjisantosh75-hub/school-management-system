import { useEffect, useState } from "react";

function GalleryGrid() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/gallery");
      const data = await response.json();

      console.log("Gallery Data:", data);

      if (data.success) {
        setGallery(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Moments at Kamalam Public School
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore glimpses of our vibrant campus life, classrooms,
            celebrations, sports, and student activities.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-xl">
              No Gallery Images Found
            </div>
          ) : (
            gallery.map((item) => {
              const imageUrl = item.image.startsWith("http")
                ? item.image
                : `http://localhost:5000/${item.image}`;

              return (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.log("Image Failed:", imageUrl);
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Image+Not+Found";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-200 text-sm">
                      {item.category}
                    </p>

                    <p className="text-gray-300 text-xs mt-1">
                      {new Date(item.eventDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              );
            })
          )}

        </div>

      </div>
    </section>
  );
}

export default GalleryGrid;