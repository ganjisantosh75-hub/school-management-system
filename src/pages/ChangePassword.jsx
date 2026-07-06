  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import AdminLayout from "../component/admin/AdminLayout";
  import API_URL from "../config";
  

  function ChangePassword() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: "admin@gmail.com",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.newPassword !== formData.confirmPassword) {
        alert("New Password and Confirm Password do not match");
        return;
      }

      try {
        const response = await fetch(
  `${API_URL}/api/admin/change-password`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.email,
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    }),
  }
);

        const data = await response.json();

        if (data.success) {
          alert(data.message);

          // Logout
          localStorage.removeItem("token");

          navigate("/login");
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };

    return (
      <AdminLayout>
        <div className="max-w-xl mx-auto py-10">

          <h1 className="text-4xl font-bold mb-8">
            Change Password
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 space-y-5"
          >

            <div>
              <label className="block mb-2 font-semibold">
                Current Password
              </label>

              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                New Password
              </label>

              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
            >
              Change Password
            </button>

          </form>

        </div>
      </AdminLayout>
    );
  }

  export default ChangePassword;