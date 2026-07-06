import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function ViewSubject() {
  const { id } = useParams();

  const [subject, setSubject] = useState(null);

  useEffect(() => {
    fetchSubject();
  }, []);

  const fetchSubject = async () => {
    try {
      const response = await fetch(
  `${API_URL}/api/subjects/${id}`
);

      const data = await response.json();

      if (data.success) {
        setSubject(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!subject) {
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
            Subject Details
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold">Subject Name</h3>
              <p>{subject.subjectName}</p>
            </div>

            <div>
              <h3 className="font-bold">Subject Code</h3>
              <p>{subject.subjectCode}</p>
            </div>

            <div>
              <h3 className="font-bold">Class</h3>
              <p>{subject.className}</p>
            </div>

            <div>
              <h3 className="font-bold">Teacher</h3>
              <p>{subject.teacherName}</p>
            </div>

            <div>
              <h3 className="font-bold">Credits</h3>
              <p>{subject.credits}</p>
            </div>

          </div>

          <div className="mt-6">
            <h3 className="font-bold">Description</h3>
            <p>{subject.description}</p>
          </div>

          <Link
            to="/subjects"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewSubject;