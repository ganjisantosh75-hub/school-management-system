import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeacherLayout from "../component/teacher/TeacherLayout";

function TeacherStudentView() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const token = localStorage.getItem("teacherToken");

      const response = await fetch(
        `http://localhost:5000/api/teacher/student/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setStudent(data.data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load student");
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <TeacherLayout>
        <h2 className="text-2xl">Loading...</h2>
      </TeacherLayout>
    );
  }

  return (
    <TeacherLayout>
      <h1 className="text-4xl font-bold mb-8">
        Student Profile
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="flex justify-center mb-8">
          <img
            src={
              student.photo
                ? `http://localhost:5000/uploads/${student.photo}`
                : "https://via.placeholder.com/150"
            }
            alt={student.fullName}
            className="w-40 h-40 rounded-full object-cover border"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h3 className="font-bold">Full Name</h3>
            <p>{student.fullName}</p>
          </div>

          <div>
            <h3 className="font-bold">Roll Number</h3>
            <p>{student.rollNumber}</p>
          </div>

          <div>
            <h3 className="font-bold">Class</h3>
            <p>{student.className}</p>
          </div>

          <div>
            <h3 className="font-bold">Gender</h3>
            <p>{student.gender}</p>
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
            <h3 className="font-bold">Mobile</h3>
            <p>{student.mobile}</p>
          </div>

          <div>
            <h3 className="font-bold">Address</h3>
            <p>{student.address}</p>
          </div>

        </div>

      </div>
    </TeacherLayout>
  );
}

export default TeacherStudentView;