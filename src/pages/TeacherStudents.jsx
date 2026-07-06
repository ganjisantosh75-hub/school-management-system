import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TeacherLayout from "../component/teacher/TeacherLayout";
import API_URL from "../config";

function TeacherStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const token = localStorage.getItem("teacherToken");

           const response = await fetch(
    `${API_URL}/api/teacher/students`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);

            const data = await response.json();

            if (data.success) {
                setStudents(data.data);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Failed to load students");
        }

        setLoading(false);
    };

    return (
        <TeacherLayout>
            <h1 className="text-4xl font-bold mb-8">
                My Students
            </h1>

            {loading ? (
                <h2 className="text-xl">Loading...</h2>
            ) : (
                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-blue-700 text-white">

                            <tr>
                                <th className="p-4 text-left">Photo</th>
                                <th className="p-4 text-left">Roll No</th>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Class</th>
                                <th className="p-4 text-left">Gender</th>
                                <th className="p-4 text-left">Mobile</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {students.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No students assigned to your class.
                                    </td>
                                </tr>
                            )}

                            {students.map((student) => (

                                <tr
                                    key={student._id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-4">
                                        <img
                                            src={
    student.photo
        ? `${API_URL}/uploads/${student.photo}`
        : "https://via.placeholder.com/50"
}
                                            alt={`${student.firstName} ${student.lastName}`}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </td>

                                    <td className="p-4">
                                        {student.rollNumber}
                                    </td>

                                    <td className="p-4 font-semibold">
                                         {student.firstName} {student.lastName}
                                    </td>

                                    <td className="p-4">
                                        {student.className}
                                    </td>

                                    <td className="p-4">
                                        {student.gender}
                                    </td>

                                    <td className="p-4">
                                        {student.parentPhone}
                                    </td>

                                    <td className="p-4 text-center">
                                        <Link
                                            to={`/teacher/student/${student._id}`}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        >
                                            View
                                        </Link>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>
            )}
        </TeacherLayout>
    );
}

export default TeacherStudents;