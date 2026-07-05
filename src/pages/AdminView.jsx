import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function AdminView() {
  const { id } = useParams();
  const [admission, setAdmission] = useState(null);

  useEffect(() => {
    fetchAdmission();
  }, []);

  const fetchAdmission = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admissions/${id}`
      );

      const data = await response.json();

      setAdmission(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      {!admission ? (
        <div className="text-center py-10 text-xl">
          Loading...
        </div>
      ) : (
        <div className="max-w-5xl mx-auto py-10 px-6">
          <h1 className="text-4xl font-bold mb-8">
            Admission Details
          </h1>

          <div className="bg-white shadow-lg rounded-lg p-8 space-y-5">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="text-gray-500 text-sm">Student Name</p>
                <p className="font-semibold text-lg">
                  {admission.studentName}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Parent Name</p>
                <p className="font-semibold text-lg">
                  {admission.parentName}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-semibold">
                  {admission.email}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Mobile</p>
                <p className="font-semibold">
                  {admission.mobile}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Class</p>
                <p className="font-semibold">
                  {admission.studentClass}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Date of Birth</p>
                <p className="font-semibold">
                  {admission.dob}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Gender</p>
                <p className="font-semibold">
                  {admission.gender}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Previous School</p>
                <p className="font-semibold">
                  {admission.previousSchool}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Parent Mobile</p>
                <p className="font-semibold">
                  {admission.parentMobile}
                </p>
              </div>

            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2">
                Address
              </p>

              <div className="border rounded-lg p-4 bg-gray-50">
                {admission.address}
              </div>
            </div>

          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminView;