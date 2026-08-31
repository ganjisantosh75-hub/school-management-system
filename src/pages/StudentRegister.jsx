import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

function StudentRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
    className: "",
    rollNumber: "",
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
        `${API_URL}/api/student/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            studentId: formData.studentId,
            className: formData.className,
            rollNumber: formData.rollNumber,
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

      navigate("/student-login", {
        replace: true,
      });
    } catch (error) {
      console.error(error);
      setError("Server connection failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-7 sm:p-10">

        <div className="text-center mb-8">

          <div className="text-6xl">
            🎓
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Student Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Create your Student Portal account
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
            placeholder="Student Full Name"
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
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
            required
          />

          <input
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
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
            className="md:col-span-2 bg-blue-700 text-white font-bold rounded-xl py-3.5 disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Create Student Account"}
          </button>

        </form>

        <div className="text-center mt-7">
          <Link
            to="/student-login"
            className="text-blue-700 font-semibold"
          >
            ← Back to Student Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default StudentRegister;