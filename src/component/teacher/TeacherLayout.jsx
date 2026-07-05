import TeacherSidebar from "./TeacherSidebar";
import TeacherNavbar from "./TeacherNavbar";

function TeacherLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <TeacherSidebar />

      <div className="flex-1">

        <TeacherNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default TeacherLayout;