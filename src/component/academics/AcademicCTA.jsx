import { Link } from "react-router-dom";

const AcademicCTA = () => {
  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-white">
          Ready to Join Kamalam Public School?
        </h2>

        <p className="text-blue-100 mt-6 text-lg leading-8">
          Give your child the opportunity to learn, grow, and succeed in a
          nurturing environment with experienced teachers and modern facilities.
        </p>

        <Link
          to="/admissions"
          className="inline-block mt-8 bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition duration-300"
        >
          Apply for Admission
        </Link>

      </div>
    </section>
  );
};

export default AcademicCTA;