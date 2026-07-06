import { useEffect, useState } from "react";
import TeacherLayout from "../component/teacher/TeacherLayout";
import API_URL from "../config";

function TeacherAttendance() {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [teacher, setTeacher] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeacher();
        fetchStudents();
    }, []);

    // ===========================
    // Teacher Profile
    // ===========================

    const fetchTeacher = async () => {
        try {
            const token = localStorage.getItem("teacherToken");

            const response = await fetch(
                `${API_URL}/api/teacher/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.success) {
                setTeacher(data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // ===========================
    // Students
    // ===========================

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

                const defaultAttendance = {};

                data.data.forEach((student) => {
                    defaultAttendance[student._id] = "Present";
                });

                setAttendance(defaultAttendance);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Failed to load students");
        }

        setLoading(false);
    };

    // ===========================
    // Toggle Attendance
    // ===========================

    const toggleAttendance = (studentId) => {
        setAttendance((prev) => ({
            ...prev,
            [studentId]:
                prev[studentId] === "Present"
                    ? "Absent"
                    : "Present",
        }));
    };

    // ===========================
    // Save Attendance
    // ===========================

    const saveAttendance = async () => {
        try {
            const token = localStorage.getItem("teacherToken");

            const attendanceData = students.map((student) => ({
                student: student._id,
                status: attendance[student._id],
            }));

            const today = new Date().toISOString().split("T")[0];

            const response = await fetch(
                `${API_URL}/api/attendance/save`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        date: today,
                        attendance: attendanceData,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                alert("Attendance Saved Successfully");
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Failed to save attendance");
        }
    };

    // ===========================
    // Counts
    // ===========================

    const totalStudents = students.length;

    const presentCount = Object.values(attendance).filter(
        (status) => status === "Present"
    ).length;

    const absentCount = totalStudents - presentCount;

    return (
        <TeacherLayout>

            <h1 className="text-4xl font-bold mb-6">
                Student Attendance
            </h1>

            {/* Header Card */}

            <div className="bg-blue-50 border rounded-xl p-6 mb-8">

                <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

                    <div>
                        <p className="text-gray-500 text-sm">
                            Class
                        </p>

                        <h2 className="text-xl font-bold">
                            {teacher.className}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">
                            Section
                        </p>

                        <h2 className="text-xl font-bold">
                            {teacher.section}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">
                            Date
                        </p>

                        <h2 className="text-lg font-semibold">
                            {new Date().toLocaleDateString()}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">
                            Total Students
                        </p>

                        <h2 className="text-xl font-bold text-blue-700">
                            {totalStudents}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">
                            Present / Absent
                        </p>

                        <h2 className="text-xl font-bold">
                            <span className="text-green-600">
                                {presentCount}
                            </span>

                            {" / "}

                            <span className="text-red-600">
                                {absentCount}
                            </span>
                        </h2>
                    </div>

                </div>

            </div>

            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-blue-700 text-white">

                            <tr>
                                <th className="p-4">Roll No</th>
                                <th className="p-4">Student Name</th>
                                <th className="p-4">Attendance</th>
                            </tr>

                        </thead>

                        <tbody>

                            {students.map((student) => (

                                <tr
                                    key={student._id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-4">
                                        {student.rollNumber}
                                    </td>

                                    <td className="p-4 font-semibold">
                                        {student.firstName} {student.lastName}
                                    </td>

                                    <td className="p-4">

                                        <button
                                            onClick={() =>
                                                toggleAttendance(student._id)
                                            }
                                            className={`px-6 py-2 rounded-lg font-semibold text-white transition ${attendance[student._id] === "Present"
                                                ? "bg-green-600 hover:bg-green-700"
                                                : "bg-red-600 hover:bg-red-700"
                                                }`}
                                        >
                                            {attendance[student._id]}
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                    <div className="flex justify-end p-6">

                        <button
                            onClick={saveAttendance}
                            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
                        >
                            Save Attendance
                        </button>

                    </div>

                </div>
            )}

        </TeacherLayout>
    );
}

export default TeacherAttendance;