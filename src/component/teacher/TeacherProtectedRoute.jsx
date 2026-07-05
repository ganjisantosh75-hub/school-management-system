import { Navigate } from "react-router-dom";

function TeacherProtectedRoute({ children }) {
  const token = localStorage.getItem("teacherToken");

  if (!token) {
    return <Navigate to="/teacher-login" replace />;
  }

  return children;
}

export default TeacherProtectedRoute;