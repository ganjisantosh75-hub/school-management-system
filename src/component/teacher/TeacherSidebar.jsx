import { Link, NavLink } from "react-router-dom";

function TeacherSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-900 text-white">

      <div className="p-6 border-b border-blue-700">
        <h1 className="text-2xl font-bold">
          Teacher Panel
        </h1>
      </div>

      <nav className="p-5">

        <ul className="space-y-3">

          <li>
            <Link
              to="/teacher-dashboard"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/teacher-students"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Students
            </Link>
          </li>

          <li>
            <Link
              to="/teacher/attendance"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Attendance
            </Link>
          </li>

          <NavLink
            to="/teacher/marks"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${isActive
                ? "bg-blue-700 text-white"
                : "hover:bg-gray-100"
              }`
            }
          >
            📊 Marks Management
          </NavLink>

          {/* <li>
            <Link
              to="/teacher-homework"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Homework
            </Link>
          </li>  */}
          {/* 
          <li>
            <Link
              to="/teacher-marks"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Marks
            </Link>
          </li> */}

          <Link
            to="/teacher/attendance-history"
            className="block px-4 py-2 hover:bg-blue-700 rounded"
          >
            Attendance History
          </Link>

          <li>
            <Link
              to="/teacher-profile"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              My Profile
            </Link>
          </li>

          <li>
            <Link
              to="/teacher-change-password"
              className="block px-4 py-3 rounded-lg hover:bg-blue-700"
            >
              Change Password
            </Link>
          </li>

        </ul>

      </nav>

    </aside>
  );
}

export default TeacherSidebar;