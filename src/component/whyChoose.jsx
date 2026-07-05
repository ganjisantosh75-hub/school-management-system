import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptop,
  FaFutbol,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap size={40} />,
    title: "Quality Education",
    description:
      "Providing excellent academic education with modern teaching methods.",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Expert Teachers",
    description:
      "Our experienced teachers help every student achieve success.",
  },
  {
    icon: <FaLaptop size={40} />,
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms for better learning experience.",
  },
  {
    icon: <FaFutbol size={40} />,
    title: "Sports & Activities",
    description:
      "Sports, cultural events and extracurricular activities for all students.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-4">
            We provide quality education with discipline,
            innovation and holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;