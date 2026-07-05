import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="text-2xl text-gray-700">
          <FaBars />
        </button>

        <h1 className="text-2xl font-bold text-gray-800">
          Admin Panel
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <button className="relative">
          <FaBell className="text-2xl text-gray-600 hover:text-blue-700 transition" />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            0
          </span>
        </button>

        <div className="flex items-center gap-2">

          <FaUserCircle className="text-4xl text-blue-700" />

          <div>
            <h2 className="font-semibold">
              Admin
            </h2>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;