import { facilities } from "../../data/academicsData";
import FacilityCard from "./FacilityCard";

const AcademicFacilities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Academic Facilities
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our campus provides modern facilities that create an excellent
            learning environment for every student.
          </p>
        </div>

        {/* Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              title={facility.title}
              description={facility.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default AcademicFacilities;