import { Link } from "react-router-dom";

function TeacherDashboard() {
  const teacher = JSON.parse(
    localStorage.getItem("teacher")
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Teacher Dashboard
          </h1>

          <p className="text-blue-100 mt-1">
            Welcome, {teacher?.fullName}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("teacher");
            localStorage.removeItem("teacherToken");
            window.location.href = "/teacher-login";
          }}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <Link
            to="/teacher-profile"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              👤 My Profile
            </h2>

            <p className="text-gray-600 mt-3">
              View your personal information.
            </p>
          </Link>

          <Link
            to="/teacher-students"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              👨‍🎓 Students
            </h2>

            <p className="text-gray-600 mt-3">
              View assigned students.
            </p>
          </Link>

          <Link
            to="/teacher/attendance"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              📅 Attendance
            </h2>

            <p className="text-gray-600 mt-3">
              Mark student attendance.
            </p>
          </Link>

          {/* <Link
            to="/teacher/homework"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              📚 Homework
            </h2>

            <p className="text-gray-600 mt-3">
              Assign homework to students.
            </p>
          </Link> */}

          <Link
            to="/teacher/marks"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              📝 Marks
            </h2>

            <p className="text-gray-600 mt-3">
              Upload examination marks.
            </p>
          </Link>

          {/* <Link
            to="/teacher/notices"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold">
              📢 Notices
            </h2>

            <p className="text-gray-600 mt-3">
              View school notices.
            </p>
          </Link> */}

        </div>

      </div>

    </div>
  );
}

export default TeacherDashboard;