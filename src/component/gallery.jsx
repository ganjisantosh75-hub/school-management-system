import galleryData from "../data/galleryData";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            Gallery
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Our School Moments
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore memorable moments, celebrations, and activities
            that make our school a vibrant place for learning.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryData.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-12">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            View All Gallery
          </button>

        </div>

      </div>

    </section>
  );
};

export default Gallery;