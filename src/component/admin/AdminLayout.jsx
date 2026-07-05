import { Link, useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login/admin");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">

        {/* Logo */}
        <div className="text-center py-6 border-b border-blue-700">
          <h1 className="text-2xl font-bold">
            Kamalam School
          </h1>
          <p className="text-sm text-blue-200">
            Admin Panel
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">

          <Link
            to="/dashboard"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/admin"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            📝 Admissions
          </Link>

          <Link
            to="/teachers"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            👨‍🏫 Teachers
          </Link>

          <Link
            to="/students"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            🎓 Students
          </Link>

          <Link
            to="/subjects"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            📚 Subjects
          </Link>

          <Link
            to="/notices"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            📢 Notice Board
          </Link>

          <Link
            to="/events"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            🎉 Events
          </Link>

          <Link
            to="/fees"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            💰 Fees
          </Link>


          <Link
            to="/gallery-admin"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            🖼 Gallery
          </Link>

          <Link
            to="/change-password"
            className="block px-4 py-3 rounded-lg hover:bg-blue-700"
          >
            🔒 Change Password
          </Link>

        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;