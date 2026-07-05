import { whyChooseUs } from "../../data/admissionsData";
import WhyChooseCard from "./WhyChooseCard";

const WhyParentsChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-900 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Why Parents Choose Kamalam Public School
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide a safe, modern, and inspiring environment where every
            child can learn, grow, and achieve success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {whyChooseUs.map((item) => (
            <WhyChooseCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyParentsChooseUs;