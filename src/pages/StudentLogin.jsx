// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../config";

// function StudentLogin() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         admissionNumber: "",
//         password: "",
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 `${API_URL}/api/student/login`,
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 }
//             );

//             const data = await response.json();

//             if (data.success) {
//                 localStorage.setItem(
//                     "studentToken",
//                     data.token
//                 );

//                 navigate("/student-dashboard");
//             } else {
//                 alert(data.message);
//             }

//         } catch (error) {
//             console.log(error);
//             alert("Login Failed");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">

//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white shadow-xl rounded-xl p-10 w-[420px]"
//             >

//                 <h1 className="text-4xl font-bold text-center mb-8">
//                     Student Login
//                 </h1>

//                 <input
//                     type="text"
//                     name="admissionNumber"
//                     placeholder="Admission Number"
//                     value={formData.admissionNumber}
//                     onChange={handleChange}
//                     className="w-full border rounded-lg p-3 mb-5"
//                     required
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full border rounded-lg p-3 mb-6"
//                     required
//                 />

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
//                 >
//                     {loading ? "Logging In..." : "Login"}
//                 </button>

//             </form>

//         </div>
//     );
// }

// export default StudentLogin;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../config";

// function StudentLogin() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ==========================================
//   // Wake up backend when login page opens
//   // ==========================================

//   useEffect(() => {
//     const wakeBackend = async () => {
//       try {
//         await fetch(`${API_URL}/`);
//         console.log("Backend is ready");
//       } catch (error) {
//         console.log("Backend wake-up error:", error);
//       }
//     };

//     wakeBackend();
//   }, []);

//   // ==========================================
//   // Handle Input Change
//   // ==========================================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error while typing
//     if (error) {
//       setError("");
//     }
//   };

//   // ==========================================
//   // Student Login
//   // ==========================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");
//     setLoading(true);

//     const controller = new AbortController();

//     // 5 second timeout
//     const timeout = setTimeout(() => {
//       controller.abort();
//     }, 5000);

//     try {
//       const response = await fetch(
//         `${API_URL}/api/student/login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//           signal: controller.signal,
//         }
//       );

//       clearTimeout(timeout);

//       const data = await response.json();

//       // ==========================================
//       // Login Success
//       // ==========================================

//       if (response.ok && data.success) {
//         // Save JWT token
//         localStorage.setItem("token", data.token);

//         // Optional student login information
//         localStorage.setItem("studentEmail", formData.email);

//         // Direct student dashboard
//         navigate("/student-dashboard", {
//           replace: true,
//         });

//         return;
//       }

//       // ==========================================
//       // Login Failed
//       // ==========================================

//       setError(
//         data.message || "Invalid email or password."
//       );

//     } catch (error) {
//       clearTimeout(timeout);

//       console.error("LOGIN ERROR:", error);

//       if (error.name === "AbortError") {
//         setError(
//           "Server is taking too long to respond. Please try again."
//         );
//       } else {
//         setError(
//           "Unable to connect to server. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // Back to Login Portal
//   // ==========================================

//   const handleBack = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-sky-500 flex items-center justify-center px-4 py-8">

//       {/* Main Login Container */}
//       <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

//         {/* ==========================================
//             LEFT PANEL
//         ========================================== */}

//         <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white p-8 sm:p-10 md:p-14 flex flex-col justify-center">

//           {/* Student Icon */}
//           <div className="mb-6">
//             <div className="text-7xl sm:text-8xl">
//               🎓
//             </div>
//           </div>

//           {/* Portal Title */}
//           <h1 className="text-4xl sm:text-5xl font-bold mb-5">
//             Student Portal
//           </h1>

//           {/* Description */}
//           <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
//             Welcome to the Student Learning Portal.
//           </p>

//           <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
//             Login to view attendance, timetable, homework, exam results, fees status, notices, and track your academic progress.
//           </p>

//           {/* Divider */}
//           <div className="w-full max-w-xl h-px bg-white/40 my-8"></div>

//           {/* School Name */}
//           <h2 className="text-2xl sm:text-3xl font-bold">
//             Kamalam Public School
//           </h2>

//           <p className="text-lg text-white/80 mt-2">
//             Excellence in Education
//           </p>

//         </div>

//         {/* ==========================================
//             RIGHT LOGIN PANEL
//         ========================================== */}

//         <div className="w-full md:w-1/2 bg-white p-7 sm:p-10 md:p-14 flex items-center">

//           <div className="w-full max-w-xl mx-auto">

//             {/* Heading */}
//             <div className="text-center mb-8">

//               <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
//                 Student Login
//               </h2>

//               <p className="text-gray-500 text-base sm:text-lg mt-4">
//                 Please login using your student account details.
//               </p>

//             </div>

//             {/* ==========================================
//                 ERROR MESSAGE
//             ========================================== */}

//             {error && (
//               <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 text-sm sm:text-base">
//                 <div className="flex items-start gap-2">
//                   <span>⚠️</span>
//                   <span>{error}</span>
//                 </div>
//               </div>
//             )}

//             {/* ==========================================
//                 LOGIN FORM
//             ========================================== */}

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//             >

//               {/* Email */}
//               <div>

//                 <label
//                   htmlFor="email"
//                   className="block text-base sm:text-lg font-semibold text-slate-800 mb-3"
//                 >
//                   Email Address
//                 </label>

//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   placeholder="student@gmail.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   autoComplete="email"
//                   required
//                   disabled={loading}
//                   className="w-full h-14 px-5 rounded-xl border border-gray-300 text-base sm:text-lg text-gray-800 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200 disabled:bg-gray-100"
//                 />

//               </div>

//               {/* Password */}
//               <div>

//                 <label
//                   htmlFor="password"
//                   className="block text-base sm:text-lg font-semibold text-slate-800 mb-3"
//                 >
//                   Password
//                 </label>

//                 <div className="relative">

//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     autoComplete="current-password"
//                     required
//                     disabled={loading}
//                     className="w-full h-14 px-5 pr-14 rounded-xl border border-gray-300 text-base sm:text-lg text-gray-800 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-200 disabled:bg-gray-100"
//                   />

//                   {/* Show Password */}
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowPassword(!showPassword)
//                     }
//                     disabled={loading}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:scale-110 transition disabled:opacity-50"
//                     aria-label={
//                       showPassword
//                         ? "Hide password"
//                         : "Show password"
//                     }
//                   >
//                     {showPassword ? "🙈" : "👁️"}
//                   </button>

//                 </div>

//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full h-14 rounded-xl text-white text-lg font-bold transition-all duration-200 shadow-lg ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.99]"
//                 }`}
//               >
//                 {loading ? (
//                   <span className="flex items-center justify-center gap-3">
//                     <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                     Logging in...
//                   </span>
//                 ) : (
//                   "Login"
//                 )}
//               </button>

//             </form>

//             {/* Back to Login Portal */}
//             <div className="text-center mt-8">

//               <button
//                 type="button"
//                 onClick={handleBack}
//                 disabled={loading}
//                 className="text-purple-600 hover:text-purple-800 font-semibold text-base sm:text-lg transition disabled:opacity-50"
//               >
//                 ← Back to Login Portal
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default StudentLogin;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../config";

function StudentLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Backend Wake Up Call
  useEffect(() => {
    const wakeBackend = async () => {
      try {
        await fetch(`${API_URL}/`);
      } catch (err) {
        console.log("Backend connection error:", err);
      }
    };
    wakeBackend();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    try {
      const response = await fetch(`${API_URL}/api/student/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("studentEmail", formData.email);
        navigate("/student-dashboard", { replace: true });
        return;
      }

      setError(data.message || "Invalid credentials. Please try again.");
    } catch (err) {
      clearTimeout(timeout);
      if (err.name === "AbortError") {
        setError("Request timed out. Please check your internet connection.");
      } else {
        setError("Unable to connect to the server. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden font-sans">
      
      {/* Background Glow Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Glass Card */}
      <div className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* ================= LEFT DESIGN & HIGHLIGHTS PANEL ================= */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-gradient-to-br from-cyan-600/20 via-sky-600/10 to-transparent flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Kamalam Student Portal
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Learn, Achieve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                & Excel Everyday.
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Access your personalized learning hub, check real-time attendance, track assignment status, and view exam results smoothly.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="text-xl sm:text-2xl mb-1">📚</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Homework & Tasks</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">Track daily work</div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="text-xl sm:text-2xl mb-1">📊</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Report Cards</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">Instant marks access</div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="text-xl sm:text-2xl mb-1">🗓️</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Attendance</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">Live status updates</div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div className="text-xl sm:text-2xl mb-1">🔔</div>
                <div className="text-white text-xs sm:text-sm font-semibold">Notice Board</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">School updates</div>
              </div>
            </div>
          </div>

          {/* School Branding Footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Kamalam Public School</span>
            <span className="text-cyan-400">Excellence in Education</span>
          </div>
        </div>

        {/* ================= RIGHT FORM PANEL ================= */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-slate-950/40">
          
          <div className="max-w-md w-full mx-auto">
            
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Student Sign In
              </h2>
              <p className="text-slate-400 text-sm">
                Enter your credentials to access your student dashboard.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
                <span className="text-base">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Input */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                  Student Email / Roll ID
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={loading}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@kamalam.edu"
                    className="w-full h-12 px-4 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition disabled:opacity-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                    📧
                  </span>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    disabled={loading}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full h-12 px-4 pr-12 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm tracking-wide transition duration-200 shadow-lg shadow-cyan-500/25 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Access Dashboard →</span>
                )}
              </button>
            </form>

            {/* Back to Portal Switcher */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={() => navigate("/login")}
                disabled={loading}
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-cyan-400 transition flex items-center justify-center gap-2 mx-auto"
              >
                <span>←</span> Back to Main Portal Selection
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentLogin;