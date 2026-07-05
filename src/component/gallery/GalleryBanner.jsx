import banner from "../../assets/image/gallery/gallery-banner.jpg";

function GalleryBanner() {
  return (
    <section
      className="relative h-[350px] md:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            School Gallery
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-200">
            Discover the vibrant campus life, academic excellence,
            cultural celebrations, sports activities, and memorable
            moments at Kamalam Public School.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GalleryBanner;