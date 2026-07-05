import StudentSidebar from "./StudentSidebar";
import StudentNavbar from "./StudentNavbar";

function StudentLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <StudentSidebar />

      <div className="flex-1">

        <StudentNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default StudentLayout;