const GalleryCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">

      <img
        src={item.image}
        alt={item.title}
        className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

        <h3 className="text-white text-xl font-bold">
          {item.title}
        </h3>

      </div>

    </div>
  );
};

export default GalleryCard;