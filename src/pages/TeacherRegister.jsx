import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

function TeacherRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    employeeId: "",
    subject: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
        `${API_URL}/api/teacher/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            employeeId: formData.employeeId,
            subject: formData.subject,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message);
        setLoading(false);
        return;
      }

      navigate("/teacher-login", {
        replace: true,
      });
    } catch (error) {
      console.error(error);
      setError("Server connection failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-7 sm:p-10">

        <div className="text-center mb-8">
          <div className="text-6xl">👩‍🏫</div>

          <h1 className="text-3xl font-bold mt-4">
            Teacher Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Create Teacher Portal account
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-5">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
            minLength={6}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-700 text-white font-bold rounded-xl py-3 disabled:opacity-50"
          >
            {loading
              ? "Creating..."
              : "Create Teacher Account"}
          </button>

        </form>

        <div className="text-center mt-7">
          <Link
            to="/teacher-login"
            className="text-purple-700 font-semibold"
          >
            ← Back to Teacher Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default TeacherRegister;