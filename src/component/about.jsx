import aboutImage from "../assets/image/about.png";

const About = () => {

    const stats = [
        { value: "500+", label: "Students" },
        { value: "50+", label: "Teachers" },
        { value: "20+", label: "Years Experience" },
        { value: "100%", label: "Result" },
    ];

    return (
        <section id="about" className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}
                    <div>
                        <img
                            src={aboutImage}
                            alt="School Building"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>

                    {/* Right Side */}
                    <div>

                        <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
                            About Our School
                        </p>

                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Welcome To Kamalam Public School
                        </h2>

                        <p className="text-gray-600 leading-8 mb-6">
                            Kamalam Public School is dedicated to providing quality education
                            that nurtures creativity, leadership, discipline, and academic
                            excellence. We believe every child has unique potential and our
                            mission is to help students achieve success in every aspect of
                            life.
                        </p>


                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">

                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-gray-100 rounded-xl p-5"
                                >
                                    <h3 className="text-3xl font-bold text-blue-600">
                                        {item.value}
                                    </h3>

                                    <p className="text-gray-600">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>



                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
                            Learn More
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;