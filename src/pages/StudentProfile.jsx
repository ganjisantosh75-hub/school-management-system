import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";
import API_URL from "../config";

function StudentProfile() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("studentToken");

      const response = await fetch(`${API_URL}/api/student/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      

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

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <p className="text-gray-500">First Name</p>
            <h2 className="text-xl font-semibold">
              {student.firstName}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Last Name</p>
            <h2 className="text-xl font-semibold">
              {student.lastName}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Admission Number</p>
            <h2 className="text-xl font-semibold">
              {student.admissionNumber}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Roll Number</p>
            <h2 className="text-xl font-semibold">
              {student.rollNumber}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Class</p>
            <h2 className="text-xl font-semibold">
              {student.className}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Section</p>
            <h2 className="text-xl font-semibold">
              {student.section}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Gender</p>
            <h2 className="text-xl font-semibold">
              {student.gender}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Date of Birth</p>
            <h2 className="text-xl font-semibold">
              {new Date(student.dateOfBirth).toLocaleDateString()}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Father Name</p>
            <h2 className="text-xl font-semibold">
              {student.fatherName}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Mother Name</p>
            <h2 className="text-xl font-semibold">
              {student.motherName}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Parent Phone</p>
            <h2 className="text-xl font-semibold">
              {student.parentPhone}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <h2 className="text-xl font-semibold">
              {student.email}
            </h2>
          </div>

        </div>

        <div className="mt-8">

          <p className="text-gray-500">
            Address
          </p>

          <div className="bg-gray-100 rounded-lg p-4 mt-2">
            {student.address}
          </div>

        </div>

      </div>

    </StudentLayout>
  );
}

export default StudentProfile;