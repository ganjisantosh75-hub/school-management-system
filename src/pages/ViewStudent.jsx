import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function ViewStudent() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/students/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setStudent(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!student) {
    return (
      <AdminLayout>
        <div className="p-10 text-center text-xl">
          Loading...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto py-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-8">
            Student Details
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold">First Name</h3>
              <p>{student.firstName}</p>
            </div>

            <div>
              <h3 className="font-bold">Last Name</h3>
              <p>{student.lastName}</p>
            </div>

            <div>
              <h3 className="font-bold">Gender</h3>
              <p>{student.gender}</p>
            </div>

            <div>
              <h3 className="font-bold">Date of Birth</h3>
              <p>
                {new Date(student.dateOfBirth).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="font-bold">Class</h3>
              <p>{student.className}</p>
            </div>

            <div>
              <h3 className="font-bold">Section</h3>
              <p>{student.section}</p>
            </div>

            <div>
              <h3 className="font-bold">Roll Number</h3>
              <p>{student.rollNumber}</p>
            </div>

            <div>
              <h3 className="font-bold">Admission Number</h3>
              <p>{student.admissionNumber}</p>
            </div>

            <div>
              <h3 className="font-bold">Father Name</h3>
              <p>{student.fatherName}</p>
            </div>

            <div>
              <h3 className="font-bold">Mother Name</h3>
              <p>{student.motherName}</p>
            </div>

            <div>
              <h3 className="font-bold">Parent Phone</h3>
              <p>{student.parentPhone}</p>
            </div>

            <div>
              <h3 className="font-bold">Email</h3>
              <p>{student.email}</p>
            </div>

          </div>

          <div className="mt-6">
            <h3 className="font-bold">Address</h3>
            <p>{student.address}</p>
          </div>

          <Link
            to="/students"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewStudent;