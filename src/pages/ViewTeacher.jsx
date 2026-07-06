import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function ViewTeacher() {
  const { id } = useParams();

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    fetchTeacher();
  }, []);

  const fetchTeacher = async () => {
    try {
      const response = await fetch(
  `${API_URL}/api/teachers/${id}`
);

      const data = await response.json();

      if (data.success) {
        setTeacher(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!teacher) {
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
            Teacher Details
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold">Full Name</h3>
              <p>{teacher.fullName}</p>
            </div>

            <div>
              <h3 className="font-bold">Subject</h3>
              <p>{teacher.subject}</p>
            </div>

            <div>
              <h3 className="font-bold">Qualification</h3>
              <p>{teacher.qualification}</p>
            </div>

            <div>
              <h3 className="font-bold">Experience</h3>
              <p>{teacher.experience} Years</p>
            </div>

            <div>
              <h3 className="font-bold">Mobile</h3>
              <p>{teacher.mobile}</p>
            </div>

            <div>
              <h3 className="font-bold">Email</h3>
              <p>{teacher.email}</p>
            </div>

            <div>
              <h3 className="font-bold">Salary</h3>
              <p>₹ {teacher.salary}</p>
            </div>

            <div>
              <h3 className="font-bold">Gender</h3>
              <p>{teacher.gender}</p>
            </div>

          </div>

          <div className="mt-6">
            <h3 className="font-bold">Address</h3>
            <p>{teacher.address}</p>
          </div>

          <Link
            to="/teachers"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewTeacher;