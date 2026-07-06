import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import TeacherProtectedRoute from "./component/teacher/TeacherProtectedRoute";
import TeacherAttendanceHistory from "./pages/TeacherAttendanceHistory";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/gallery";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";

import Login from "./pages/Login";
import LoginPortal from "./pages/LoginPortal";

import Dashboard from "./pages/Dashboard";

import Admin from "./pages/Admin";
import AdminView from "./pages/AdminView";
import EditAdmission from "./pages/EditAdmission";

// Teacher Pages
import Teachers from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import ViewTeacher from "./pages/ViewTeacher";
import EditTeacher from "./pages/EditTeacher";

// Student Pages
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import ViewStudent from "./pages/ViewStudent";
import EditStudent from "./pages/EditStudent";

// Subject Pages
import Subjects from "./pages/Subjects";
import AddSubject from "./pages/AddSubject";
import ViewSubject from "./pages/ViewSubject";
import EditSubject from "./pages/EditSubject";

// Notice Pages
import Notices from "./pages/Notices";
import AddNotice from "./pages/AddNotice";
import ViewNotice from "./pages/ViewNotice";
import EditNotice from "./pages/EditNotice";

// Event Pages
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import ViewEvent from "./pages/ViewEvent";
import EditEvent from "./pages/EditEvent";

// Fees Pages
import Fees from "./pages/Fees";
import AddFee from "./pages/AddFee";
import ViewFee from "./pages/ViewFee";
import EditFee from "./pages/EditFee";


import GalleryAdmin from "./pages/GalleryAdmin";
import AddGallery from "./pages/AddGallery";
import ViewGallery from "./pages/ViewGallery";
import EditGallery from "./pages/EditGallery";

import ChangePassword from "./pages/ChangePassword";
import TeacherLogin from "./pages/TeacherLogin";

import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherProfile from "./pages/TeacherProfile";
import TeacherChangePassword from "./pages/TeacherChangePassword";

import TeacherStudents from "./pages/TeacherStudents";
import TeacherStudentView from "./pages/TeacherStudentView";
import TeacherAttendance from "./pages/TeacherAttendance";
// import TeacherAttendanceHistory from "./pages/TeacherAttendanceHistory";
import TeacherMarks from "./pages/TeacherMarks";

import StudentProtectedRoute from "./component/student/StudentProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard";
import StudentLogin from "./pages/StudentLogin";
import StudentProfile from "./pages/StudentProfile";
import StudentSubjects from "./pages/StudentSubjects";
import StudentAttendance from "./pages/StudentAttendance";
import StudentMarks from "./pages/StudentMarks";
import StudentChangePassword from "./pages/StudentChangePassword";
import StudentFees from "./pages/StudentFees";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/teacher-profile" element={<TeacherProfile />} />

      {/* Login */}

      <Route path="/login" element={<LoginPortal />} />
      <Route path="/login/admin" element={<Login />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />


      {/* Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Admission Module */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/view/:id"
        element={
          <ProtectedRoute>
            <AdminView />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <ProtectedRoute>
            <EditAdmission />
          </ProtectedRoute>
        }
      />

      {/* Teacher Module */}

      <Route
        path="/teachers"
        element={
          <ProtectedRoute>
            <Teachers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teachers/add"
        element={
          <ProtectedRoute>
            <AddTeacher />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teachers/view/:id"
        element={
          <ProtectedRoute>
            <ViewTeacher />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teachers/edit/:id"
        element={
          <ProtectedRoute>
            <EditTeacher />
          </ProtectedRoute>
        }
      />

      {/* Student Module */}

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/add"
        element={
          <ProtectedRoute>
            <AddStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/view/:id"
        element={
          <ProtectedRoute>
            <ViewStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/edit/:id"
        element={
          <ProtectedRoute>
            <EditStudent />
          </ProtectedRoute>
        }
      />

      {/* Subject Module */}

      <Route
        path="/subjects"
        element={
          <ProtectedRoute>
            <Subjects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subjects/add"
        element={
          <ProtectedRoute>
            <AddSubject />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subjects/view/:id"
        element={
          <ProtectedRoute>
            <ViewSubject />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subjects/edit/:id"
        element={
          <ProtectedRoute>
            <EditSubject />
          </ProtectedRoute>
        }
      />

      {/* Notice Module */}

      <Route
        path="/notices"
        element={
          <ProtectedRoute>
            <Notices />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notices/add"
        element={
          <ProtectedRoute>
            <AddNotice />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notices/view/:id"
        element={
          <ProtectedRoute>
            <ViewNotice />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notices/edit/:id"
        element={
          <ProtectedRoute>
            <EditNotice />
          </ProtectedRoute>
        }
      />
      {/* Event Module */}

      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events/add"
        element={
          <ProtectedRoute>
            <AddEvent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events/view/:id"
        element={
          <ProtectedRoute>
            <ViewEvent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events/edit/:id"
        element={
          <ProtectedRoute>
            <EditEvent />
          </ProtectedRoute>
        }
      />

      {/* Fees Module */}

      <Route
        path="/fees"
        element={
          <ProtectedRoute>
            <Fees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/fees/add"
        element={
          <ProtectedRoute>
            <AddFee />
          </ProtectedRoute>
        }
      />

      <Route
        path="/fees/view/:id"
        element={
          <ProtectedRoute>
            <ViewFee />
          </ProtectedRoute>
        }
      />

      <Route
        path="/fees/edit/:id"
        element={
          <ProtectedRoute>
            <EditFee />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gallery-admin"
        element={
          <ProtectedRoute>
            <GalleryAdmin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gallery-admin/add"
        element={
          <ProtectedRoute>
            <AddGallery />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gallery-admin/view/:id"
        element={
          <ProtectedRoute>
            <ViewGallery />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gallery-admin/edit/:id"
        element={
          <ProtectedRoute>
            <EditGallery />
          </ProtectedRoute>
        }
      />

      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teacher-dashboard"
        element={
          <TeacherProtectedRoute>
            <TeacherDashboard />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher-students"
        element={
          <TeacherProtectedRoute>
            <TeacherStudents />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher-profile"
        element={
          <TeacherProtectedRoute>
            <TeacherProfile />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher-change-password"
        element={
          <TeacherProtectedRoute>
            <TeacherChangePassword />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher/student/:id"
        element={
          <TeacherProtectedRoute>
            <TeacherStudentView />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher/attendance"
        element={
          <TeacherProtectedRoute>
            <TeacherAttendance />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher/attendance-history"
        element={
          <TeacherProtectedRoute>
            <TeacherAttendanceHistory />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/teacher/marks"
        element={
          <TeacherProtectedRoute>
            <TeacherMarks />
          </TeacherProtectedRoute>
        }
      />

      <Route
        path="/student-dashboard"
        element={
          <StudentProtectedRoute>
            <StudentDashboard />
          </StudentProtectedRoute>
        }
      />

      <Route
        path="/student-profile"
        element={
          <StudentProtectedRoute>
            <StudentProfile />
          </StudentProtectedRoute>
        }
      />

      <Route
        path="/student-subjects"
        element={
          <StudentProtectedRoute>
            <StudentSubjects />
          </StudentProtectedRoute>
        }
      />

      <Route
        path="/student-attendance"
        element={
          <StudentProtectedRoute>
            <StudentAttendance />
          </StudentProtectedRoute>
        }
      />

      <Route
        path="/student-marks"
        element={
          <StudentProtectedRoute>
            <StudentMarks />
          </StudentProtectedRoute>
        }
      />

      <Route
        path="/student-change-password"
        element={
          <StudentProtectedRoute>
            <StudentChangePassword />
          </StudentProtectedRoute>
        }
      />

      <Route
  path="/student-fees"
  element={<StudentFees />}
/>

<Route path="/student-login" element={<StudentLogin />} />

    </Routes>


  );
}

export default App;