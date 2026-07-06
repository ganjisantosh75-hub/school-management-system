import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";
import API_URL from "../config";

function StudentMarks() {

    const [marks, setMarks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMarks();
    }, []);

    const fetchMarks = async () => {

        try {

            const token = localStorage.getItem("studentToken");

           const response = await fetch(
    `${API_URL}/api/marks/student`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.success) {
                setMarks(data.data);
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

            <div>

                <h1 className="text-4xl font-bold mb-2">
                    My Marks
                </h1>

                <p className="text-gray-600 mb-8">
                    View your exam marks and performance.
                </p>

                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-blue-700 text-white">

                            <tr>

                                <th className="p-4">
                                    Subject
                                </th>

                                <th className="p-4">
                                    Exam
                                </th>

                                <th className="p-4">
                                    Marks
                                </th>

                                <th className="p-4">
                                    Total
                                </th>

                                <th className="p-4">
                                    %
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                marks.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="text-center p-8"
                                        >
                                            No Marks Found
                                        </td>

                                    </tr>

                                ) : (

                                    marks.map((item) => (

                                        <tr
                                            key={item._id}
                                            className="border-b hover:bg-gray-50"
                                        >

                                            <td className="p-4">
                                                {item.subject.subjectName}
                                            </td>

                                            <td className="p-4">
                                                {item.examName}
                                            </td>

                                            <td className="p-4 font-semibold">
                                                {item.marksObtained}
                                            </td>

                                            <td className="p-4">
                                                {item.totalMarks}
                                            </td>

                                            <td className="p-4">

                                                <span
                                                    className={`px-3 py-1 rounded-full text-white ${
                                                        item.percentage >= 80
                                                            ? "bg-green-600"
                                                            : item.percentage >= 50
                                                            ? "bg-yellow-500"
                                                            : "bg-red-600"
                                                    }`}
                                                >
                                                    {item.percentage}%
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                )
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </StudentLayout>

    );
}

export default StudentMarks;