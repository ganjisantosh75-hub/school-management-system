import { curriculum } from "../../data/academicsData";
import ClassCard from "./ClassCard";

const Curriculum = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Curriculum
          </h2>

          <p className="text-gray-600 mt-4">
            We provide a well-structured curriculum that nurtures knowledge,
            creativity, discipline, and overall personality development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {curriculum.map((item) => (
            <ClassCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Curriculum;