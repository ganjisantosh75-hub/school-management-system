import principalImage from "../assets/image/principal.png";

const Principal = () => {
  return (
    <section id="principal" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={principalImage}
              alt="Principal"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-2">
              Principal's Message
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to Kamalam Public School
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Dear Students, Parents and Well-Wishers,
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Education is not only about academic excellence; it is about
              building character, confidence, discipline and compassion.
              At Kamalam Public School, we strive to create an environment
              where every child feels valued, inspired and empowered to
              achieve their dreams.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Together with our dedicated teachers and supportive parents,
              we prepare our students to become responsible citizens and
              lifelong learners.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-blue-700">
                BalKrishna S Patil
              </h3>

              <p className="text-gray-500">
                Principal, Kamalam Public School
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Principal;