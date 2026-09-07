// import { Link } from "react-router-dom";

// function LoginPortal() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 flex items-center justify-center px-6 py-10">
//             <div className="max-w-6xl w-full">

//                 {/* <img
//                     src={logo}
//                     alt="School Logo"
//                     className="w-24 h-24 mx-auto mb-6"
//                 /> */}

//                 {/* Heading */}
//                 <div className="text-center mb-14">
//                     <h1 className="text-5xl font-bold text-white">
//                         Kamalam Public School
//                     </h1>

//                     <p className="text-blue-100 mt-4 text-lg">
//                         Welcome to the School Management Portal
//                     </p>

//                     <p className="text-blue-200 mt-2">
//                         Please choose your login portal
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid md:grid-cols-3 gap-8">

//                     {/* Admin */}
//                     <Link
//                         to="/login/admin"
//                         className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
//                     >
//                         <div className="text-6xl mb-5">👨‍💼</div>

//                         <h2 className="text-3xl font-bold text-gray-800">
//                             Admin
//                         </h2>

//                         <p className="text-gray-600 mt-3">
//                             Manage admissions, teachers,
//                             students and school records.
//                         </p>

//                         <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
//                             Login
//                         </button>
//                     </Link>



//                     {/* Teacher */}
//                     <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

//                         <div className="text-6xl mb-5">👨‍🏫</div>

//                         <h2 className="text-3xl font-bold text-gray-800">
//                             Teacher
//                         </h2>

//                         <p className="text-gray-600 mt-3">
//                             Attendance, homework,
//                             marks and class management.
//                         </p>

//                         <Link
//                             to="/teacher-login"
//                             className="inline-block mt-8 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
//                         >
//                             Login
//                         </Link>

//                     </div>

//                     {/* Student */}
//                     <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

//                         <div className="text-6xl mb-5">👨‍🎓</div>

//                         <h2 className="text-3xl font-bold text-gray-800">
//                             Student
//                         </h2>

//                         <p className="text-gray-600 mt-3">
//                             View attendance, results,
//                             homework and notices.
//                         </p>

//                         <Link
//                             to="/student-login"
//                             className="inline-block mt-8 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
//                         >
//                             Login
//                         </Link>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }

// export default LoginPortal;

import { Link } from "react-router-dom";

function LoginPortal() {
    const portals = [
        {
            icon: "👨‍💼",
            title: "Admin",
            description:
                "Manage admissions, teachers, students, fees, results and complete school records.",
            loginPath: "/login/admin",
            registerPath: "/register/admin",
        },
        {
            icon: "👨‍🏫",
            title: "Teacher",
            description:
                "Manage attendance, homework, marks, students and class activities.",
            loginPath: "/teacher-login",
            registerPath: "/register/teacher",
        },
        {
            icon: "👨‍🎓",
            title: "Student",
            description:
                "View attendance, results, homework, notices and academic information.",
            loginPath: "/student-login",
            registerPath: "/register/student",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-sky-500 flex items-center justify-center px-4 py-8 sm:px-6">

            <div className="w-full max-w-7xl">

                {/* =========================
                    HEADER
                ========================= */}
                <div className="text-center mb-10 sm:mb-14">

                    <div className="text-5xl sm:text-6xl mb-4">
                        🏫
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Kamalam Public School
                    </h1>

                    <p className="text-blue-100 mt-3 sm:mt-5 text-base sm:text-xl">
                        Welcome to the School Management Portal
                    </p>

                    <p className="text-blue-200 mt-2 text-sm sm:text-base">
                        Please choose your login or registration portal
                    </p>

                </div>


                {/* =========================
                    LOGIN / REGISTER PORTALS
                ========================= */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {portals.map((portal) => (
                        <div
                            key={portal.title}
                            className="
                                bg-white
                                rounded-2xl
                                shadow-xl
                                p-6 sm:p-8
                                text-center
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-2xl
                                flex
                                flex-col
                                min-h-[420px]
                            "
                        >

                            {/* Icon */}
                            <div className="text-6xl sm:text-7xl mb-5">
                                {portal.icon}
                            </div>


                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                {portal.title}
                            </h2>


                            {/* Description */}
                            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-7 flex-grow">
                                {portal.description}
                            </p>


                            {/* =========================
                                BUTTONS
                            ========================= */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">

                                {/* LOGIN */}
                                <Link
                                    to={portal.loginPath}
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-full
                                        sm:w-auto
                                        min-w-[120px]
                                        bg-blue-900
                                        hover:bg-blue-800
                                        active:bg-blue-950
                                        text-white
                                        font-semibold
                                        px-6
                                        py-3
                                        rounded-lg
                                        transition
                                        duration-200
                                        shadow-md
                                        hover:shadow-lg
                                    "
                                >
                                    Login
                                </Link>


                                {/* REGISTER */}
                                <Link
                                    to={portal.registerPath}
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-full
                                        sm:w-auto
                                        min-w-[120px]
                                        border-2
                                        border-blue-900
                                        text-blue-900
                                        hover:bg-blue-900
                                        hover:text-white
                                        active:bg-blue-950
                                        font-semibold
                                        px-6
                                        py-3
                                        rounded-lg
                                        transition
                                        duration-200
                                    "
                                >
                                    Register
                                </Link>

                            </div>

                        </div>
                    ))}

                </div>


                {/* =========================
                    FOOTER
                ========================= */}
                <div className="text-center mt-10">

                    <p className="text-blue-100 text-sm">
                        © 2026 Kamalam Public School
                    </p>

                    <p className="text-blue-200 text-xs mt-2">
                        Secure School Management System
                    </p>

                </div>

            </div>
        </div>
    );
}

export default LoginPortal;