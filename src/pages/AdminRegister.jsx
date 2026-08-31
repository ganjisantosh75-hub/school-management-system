import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

function AdminRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/admin/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(
          data.message ||
            "Registration failed"
        );
        setLoading(false);
        return;
      }

      // No alert
      navigate("/login/admin", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to server"
      );

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-purple-700 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-7 sm:p-10">

        <div className="text-center mb-8">

          <div className="text-6xl">
            👨‍💼
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Admin Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Create administrator account
          </p>

        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mb-5">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-600"
            required
            minLength={6}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white font-bold py-3.5 rounded-xl disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Create Admin Account"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?
        </p>

        <Link
          to="/login/admin"
          className="block text-center text-blue-700 font-semibold mt-2"
        >
          Login
        </Link>

      </div>
    </div>
  );
}

export default AdminRegister;