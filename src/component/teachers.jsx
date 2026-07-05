import teacher1 from "../assets/image/teacher1.png";
import teacher2 from "../assets/image/teacher2.png";
import teacher3 from "../assets/image/teacher3.png";
import teacher4 from "../assets/image/teacher4.png";

const teachers = [
    {
        id: 1,
        image: teacher1,
        name: "Dr. Rajesh Sharma",
        subject: "Principal",
    },
    {
        id: 2,
        image: teacher2,
        name: "Anita Verma",
        subject: "Mathematics",
    },
    {
        id: 3,
        image: teacher3,
        name: "Rohit Patel",
        subject: "Science",
    },
    {
        id: 4,
        image: teacher4,
        name: "Neha Singh",
        subject: "English",
    },
];

const Teachers = () => {
    return (
        <section id="teachers" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 uppercase font-semibold tracking-widest">
                        Our Teachers
                    </p>

                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Meet Our Expert Faculty
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our experienced and dedicated teachers inspire students to
                        achieve academic excellence and develop strong values.
                    </p>
                </div>

                {/* Teacher Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {teachers.map((teacher) => (
                        <div
                            key={teacher.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {teacher.name}
                                </h3>

                                <p className="text-blue-600 mt-2">
                                    {teacher.subject}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Teachers;