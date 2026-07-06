import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";
import API_URL from "../config";

function StudentAttendance() {

    const [attendance, setAttendance] = useState([]);
    const [summary, setSummary] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAttendance();
    }, []);

    const fetchAttendance = async () => {

        try {

            const token = localStorage.getItem("studentToken");

            const response = await fetch(`${API_URL}/api/student/attendance`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Status:", response.status);

            const data = await response.json();

            console.log(JSON.stringify(data, null, 2));



            if (data.success) {

                setAttendance(data.data);

                setSummary({
                    totalDays: data.totalDays,
                    presentDays: data.presentDays,
                    absentDays: data.absentDays,
                    percentage: data.percentage,
                });

            }

        } catch (error) {

            console.log(error);

        }

        setLoading(false);

    };

    if (loading) {
        return (
            <StudentLayout>
                <h2 className="text-2xl">
                    Loading...
                </h2>
            </StudentLayout>
        );
    }

    return (
        <StudentLayout>

            <h1 className="text-4xl font-bold mb-8">
                My Attendance
            </h1>

            {/* Summary */}

            <div className="grid md:grid-cols-4 gap-6 mb-8">

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Total Days</p>
                    <h2 className="text-3xl font-bold">
                        {summary.totalDays}
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Present</p>
                    <h2 className="text-3xl font-bold text-green-600">
                        {summary.presentDays}
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Absent</p>
                    <h2 className="text-3xl font-bold text-red-600">
                        {summary.absentDays}
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-gray-500">Attendance %</p>
                    <h2 className="text-3xl font-bold text-blue-700">
                        {summary.percentage}%
                    </h2>
                </div>

            </div>

            {/* Table */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-700 text-white">

                        <tr>

                            <th className="p-4">
                                Date
                            </th>

                            <th className="p-4">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            attendance.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="2"
                                        className="text-center p-8"
                                    >
                                        No Attendance Found
                                    </td>

                                </tr>

                            ) : (

                                attendance.map((item) => (

                                    <tr
                                        key={item._id}
                                        className="border-b"
                                    >

                                        <td className="p-4">
                                            {item.attendanceDate}
                                        </td>

                                        <td className="p-4">

                                            <span
                                                className={`px-4 py-1 rounded-full text-white ${item.status === "Present"
                                                    ? "bg-green-600"
                                                    : "bg-red-600"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))

                            )
                        }

                    </tbody>

                </table>

            </div>

        </StudentLayout>
    );
}

export default StudentAttendance;