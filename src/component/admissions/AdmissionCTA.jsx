import { Link } from "react-router-dom";
import ctaImage from "../../assets/image/admissions/admission-overview.png";

const AdmissionCTA = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Begin Your Child's Journey?
        </h2>

        <p className="mt-6 text-lg text-gray-200 leading-8">
          Admissions are now open for the Academic Session 2026–27.
          Join Kamalam Public School and give your child a strong
          foundation for a bright future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">


          <Link
            to="/apply"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Apply Now
          </Link>


          <Link
            to="/contact"
            className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AdmissionCTA;