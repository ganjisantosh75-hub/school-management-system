import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";



function StudentDashboard() {

    const [student, setStudent] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetchProfile();
}, []);

const fetchProfile = async () => {
    try {
        const token = localStorage.getItem("studentToken");

        const response = await fetch(
            "http://localhost:5000/api/student/profile",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const data = await response.json();

        if (data.success) {
            setStudent(data.data);
        }

    } catch (error) {
        console.log(error);
    }

    setLoading(false);
};

if (loading) {
    return (
        <StudentLayout>
            <h2 className="text-2xl">Loading...</h2>
        </StudentLayout>
    );
}
  return (
    <StudentLayout>

      <div className="bg-white rounded-xl shadow p-8">

        <h1 className="text-4xl font-bold mb-2">
          Welcome, {student?.firstName} 👋
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome to your student portal.
        </p>

        <div className="border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Student Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500">Name</p>
              <h3 className="font-semibold">
                {student?.firstName} {student?.lastName}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">Admission No</p>
              <h3 className="font-semibold">
                {student?.admissionNumber}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">Class</p>
              <h3 className="font-semibold">
                {student?.className}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">Section</p>
              <h3 className="font-semibold">
                {student?.section}
              </h3>
            </div>

          </div>

        </div>

      </div>

    </StudentLayout>
  );
}

export default StudentDashboard;