import { admissionProcess } from "../../data/admissionsData";
import ProcessCard from "./ProcessCard";

const AdmissionProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-900 font-semibold uppercase tracking-widest">
            Admission Process
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Easy Admission in 4 Simple Steps
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our admission process is simple, transparent, and designed to make
            enrollment smooth for every parent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {admissionProcess.map((process) => (
            <ProcessCard
              key={process.id}
              step={process.step}
              icon={process.icon}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;