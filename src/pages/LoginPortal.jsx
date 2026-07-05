import { Link } from "react-router-dom";

function LoginPortal() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 flex items-center justify-center px-6 py-10">
            <div className="max-w-6xl w-full">

                {/* <img
                    src={logo}
                    alt="School Logo"
                    className="w-24 h-24 mx-auto mb-6"
                /> */}

                {/* Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-5xl font-bold text-white">
                        Kamalam Public School
                    </h1>

                    <p className="text-blue-100 mt-4 text-lg">
                        Welcome to the School Management Portal
                    </p>

                    <p className="text-blue-200 mt-2">
                        Please choose your login portal
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Admin */}
                    <Link
                        to="/login/admin"
                        className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                    >
                        <div className="text-6xl mb-5">👨‍💼</div>

                        <h2 className="text-3xl font-bold text-gray-800">
                            Admin
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Manage admissions, teachers,
                            students and school records.
                        </p>

                        <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                            Login
                        </button>
                    </Link>

                    {/* Teacher */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                        <div className="text-6xl mb-5">👨‍🏫</div>

                        <h2 className="text-3xl font-bold text-gray-800">
                            Teacher
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Attendance, homework,
                            marks and class management.
                        </p>

                        <Link
                            to="/teacher-login"
                            className="inline-block mt-8 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
                        >
                            Login
                        </Link>

                    </div>

                    {/* Student */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                        <div className="text-6xl mb-5">👨‍🎓</div>

                        <h2 className="text-3xl font-bold text-gray-800">
                            Student
                        </h2>

                        <p className="text-gray-600 mt-3">
                            View attendance, results,
                            homework and notices.
                        </p>

                        <Link
                            to="/student-login"
                            className="inline-block mt-8 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default LoginPortal;