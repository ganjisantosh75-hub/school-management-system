import { FaCheckCircle } from "react-icons/fa";
import admissionImage from "../../assets/image/admissions/admission-overview.png";
import { admissionOverview } from "../../data/admissionsData";

const AdmissionOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src={admissionImage}
              alt="Admission"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Content */}
          <div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
              {admissionOverview.badge}
            </span>

            <h2 className="text-4xl font-bold text-blue-900 mt-6">
              {admissionOverview.title}
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              {admissionOverview.description}
            </p>

            <div className="mt-8 space-y-4">

              {admissionOverview.features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-600 text-xl" />

                  <span className="text-gray-700">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <button className="mt-10 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              {admissionOverview.buttonText}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AdmissionOverview;