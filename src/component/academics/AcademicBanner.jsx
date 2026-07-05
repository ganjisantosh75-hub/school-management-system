const AcademicBanner = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <section
      className="relative h-[350px] md:h-[450px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          {subtitle}
        </p>

        <p className="mt-6 text-sm">
          Home / {title}
        </p>
      </div>
    </section>
  );
};

export default AcademicBanner;