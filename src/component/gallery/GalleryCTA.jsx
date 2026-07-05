import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function GalleryCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          Experience Our Campus in Person
        </h2>

        <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
          The best way to understand the learning environment at Kamalam Public
          School is by visiting our campus. Meet our teachers, explore our
          facilities, and see our students in action.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-7 py-3 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Apply for Admission
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GalleryCTA;