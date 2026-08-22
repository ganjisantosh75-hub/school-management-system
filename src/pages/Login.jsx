// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../config";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("API_URL =", API_URL);

//     try {
//       const response = await fetch(
//   `${API_URL}/api/admin/login`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   }
// );

//       const data = await response.json();

//       if (data.success) {
//         // Save Token
//         localStorage.setItem("token", data.token);

//         alert(data.message);

//         // Redirect to Dashboard
//         navigate("/dashboard");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-8">
//           Admin Login
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="email"
//             name="email"
//             placeholder="Admin Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../config";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error when user starts typing again
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/admin/login`,
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
        // Save JWT Token
        localStorage.setItem("token", data.token);

        // Directly go to dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid email or password");
      }

    } catch (error) {
      console.error("LOGIN ERROR:", error);
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        {/* Error Message */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            autoComplete="email"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            autoComplete="current-password"
          />

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-800"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;