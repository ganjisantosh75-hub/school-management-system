import { useEffect, useState } from "react";
import TeacherLayout from "../component/teacher/TeacherLayout";
import API_URL from "../config";

function TeacherAttendanceHistory() {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState("");

    const totalPresent = attendance.filter(
        (item) => item.status === "Present"
    ).length;

    const totalAbsent = attendance.filter(
        (item) => item.status === "Absent"
    ).length;

    useEffect(() => {
        fetchAttendanceHistory();
    }, []);

    const fetchAttendanceHistory = async (selectedDate = "") => {
        try {
            setLoading(true);

            const token = localStorage.getItem("teacherToken");

            let url = `${API_URL}/api/attendance/history`;

            if (selectedDate) {
               url = `${API_URL}/api/attendance/history/${selectedDate}`;
            }

            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (data.success) {
                setAttendance(data.data);
            } else {
                setAttendance([]);
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Failed to load attendance history");
        }

        setLoading(false);
    };

    return (
        <TeacherLayout>

            <h1 className="text-4xl font-bold mb-8">
                Attendance History
            </h1>

            {/* Search */}

            <div className="flex gap-4 mb-8">

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border rounded-lg px-4 py-3"
                />

                <button
                    onClick={() => fetchAttendanceHistory(date)}
                    className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
                >
                    Search
                </button>

            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-5 mb-8">

                <div className="bg-blue-600 text-white rounded-xl p-6 shadow">
                    <h3 className="text-lg">Total Records</h3>

                    <p className="text-3xl font-bold mt-2">
                        {attendance.length}
                    </p>
                </div>

                <div className="bg-green-600 text-white rounded-xl p-6 shadow">
                    <h3 className="text-lg">Total Present</h3>

                    <p className="text-3xl font-bold mt-2">
                        {totalPresent}
                    </p>
                </div>

                <div className="bg-red-600 text-white rounded-xl p-6 shadow">
                    <h3 className="text-lg">Total Absent</h3>

                    <p className="text-3xl font-bold mt-2">
                        {totalAbsent}
                    </p>
                </div>

            </div>

            {loading ? (

                <h2 className="text-xl">
                    Loading...
                </h2>

            ) : (

                <div className="bg-white rounded-xl shadow overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-blue-700 text-white">

                            <tr>

                                <th className="p-4">Date</th>
                                <th className="p-4">Roll No</th>
                                <th className="p-4">Student</th>
                                <th className="p-4">Class</th>
                                <th className="p-4">Section</th>
                                <th className="p-4">Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {attendance.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No attendance history found.
                                    </td>

                                </tr>

                            ) : (

                                attendance.map((item) => (

                                    <tr
                                        key={item._id}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="p-4">
                                            {item.attendanceDate
                                                ? new Date(item.attendanceDate).toLocaleDateString()
                                                : "-"}
                                        </td>

                                        <td className="p-4">
                                            {item.student?.rollNumber}
                                        </td>

                                        <td className="p-4">
                                            {item.student?.firstName}{" "}
                                            {item.student?.lastName}
                                        </td>

                                        <td className="p-4">
                                            {item.className}
                                        </td>

                                        <td className="p-4">
                                            {item.section}
                                        </td>

                                        <td
                                            className={`p-4 font-semibold ${
                                                item.status === "Present"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {item.status}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            )}

        </TeacherLayout>
    );
}

export default TeacherAttendanceHistory;