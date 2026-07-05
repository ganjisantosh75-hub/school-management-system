import {
  FaBook,
  FaLaptopCode,
  FaFlask,
  FaFutbol,
  FaBus,
  FaFirstAid,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaBook size={40} />,
    title: "Library",
    description: "A well-stocked library with thousands of books and digital resources.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Computer Lab",
    description: "Modern computer lab with high-speed internet and latest software.",
  },
  {
    icon: <FaFlask size={40} />,
    title: "Science Lab",
    description: "Fully equipped Physics, Chemistry and Biology laboratories.",
  },
  {
    icon: <FaFutbol size={40} />,
    title: "Sports",
    description: "Indoor and outdoor sports facilities for students' fitness.",
  },
  {
    icon: <FaBus size={40} />,
    title: "Transport",
    description: "Safe and secure school buses covering nearby areas.",
  },
  {
    icon: <FaFirstAid size={40} />,
    title: "Medical Room",
    description: "First-aid and emergency medical support available on campus.",
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Facilities
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Facilities We Provide
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide modern facilities that help students learn, grow,
            and achieve excellence in academics as well as extracurricular activities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-600 mb-5">
                {facility.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {facility.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {facility.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Facilities;