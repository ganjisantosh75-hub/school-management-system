import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherLayout from "../component/teacher/TeacherLayout";
import API_URL from "../config";

function TeacherChangePassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    if (formData.newPassword !== formData.confirmPassword) {
      return alert("New Password and Confirm Password do not match");
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("teacherToken");

      const response = await fetch(
        `${API_URL}/api/teacher/change-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Password changed successfully.\nPlease login again.");

        localStorage.removeItem("teacherToken");
        localStorage.removeItem("teacher");

        navigate("/teacher-login");
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
    <TeacherLayout>
      <div className="max-w-2xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-8">

            <h1 className="text-4xl font-bold">
              🔒 Change Password
            </h1>

            <p className="mt-2 text-purple-100">
              Update your account password securely.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6"
          >

            {/* Current Password */}

            <div>

              <label className="block font-semibold mb-2">
                Current Password
              </label>

              <div className="relative">

                <input
                  type={showCurrent ? "text" : "password"}
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrent(!showCurrent)
                  }
                  className="absolute right-4 top-3"
                >
                  {showCurrent ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* New Password */}

            <div>

              <label className="block font-semibold mb-2">
                New Password
              </label>

              <div className="relative">

                <input
                  type={showNew ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNew(!showNew)
                  }
                  className="absolute right-4 top-3"
                >
                  {showNew ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="block font-semibold mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirm(!showConfirm)
                  }
                  className="absolute right-4 top-3"
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading
                ? "Updating..."
                : "Change Password"}
            </button>

          </form>

        </div>

      </div>
    </TeacherLayout>
  );
}

export default TeacherChangePassword;