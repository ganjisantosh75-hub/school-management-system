import { teachingMethods } from "../../data/academicsData";
import MethodologyCard from "./MethodologyCard";

const TeachingMethodology = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Teaching Methodology
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our teaching approach combines innovation, practical learning,
            and individual attention to help every student achieve academic excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {teachingMethods.map((method) => (
            <MethodologyCard
              key={method.id}
              title={method.title}
              description={method.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeachingMethodology;