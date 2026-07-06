import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

function TeacherLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/teacher/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(
          "teacherToken",
          data.token
        );

        localStorage.setItem(
          "teacher",
          JSON.stringify(data.teacher)
        );

        alert("Login Successful");

        navigate("/teacher-dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-700 text-white p-12 flex flex-col justify-center">

          <div className="text-7xl mb-6">
            👨‍🏫
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Teacher Portal
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Welcome to the Teacher Management Portal.
          </p>

          <p className="mt-3 text-blue-200">
            Login to manage attendance,
            homework, marks, notices
            and student records.
          </p>

          <div className="mt-10 border-t border-blue-300 pt-6">

            <h2 className="text-2xl font-semibold">
              Kamalam Public School
            </h2>

            <p className="text-blue-200 mt-2">
              Excellence in Education
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-12">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-800">
              Teacher Login
            </h2>

            <p className="text-gray-500 mt-3">
              Please login using your registered account.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10"
          >

            {/* Email */}

            <div className="mb-6">

              <label className="block font-semibold mb-2 text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="teacher@gmail.com"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-600 outline-none transition"
                required
              />

            </div>

            {/* Password */}

            <div className="mb-6">

              <label className="block font-semibold mb-2 text-gray-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pr-14 focus:border-purple-600 outline-none transition"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-3 text-gray-600"
                >
                  {showPassword
                    ? "🙈"
                    : "👁️"}
                </button>

              </div>

            </div>

            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg disabled:opacity-60"
            >
              {loading
                ? "Please Wait..."
                : "Login"}
            </button>

          </form>

          <div className="text-center mt-8">

            <Link
              to="/login"
              className="text-purple-700 font-semibold hover:underline"
            >
              ← Back to Login Portal
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TeacherLogin;