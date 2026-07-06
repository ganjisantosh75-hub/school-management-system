import { useEffect, useState } from "react";
import TeacherLayout from "../component/teacher/TeacherLayout";
import API_URL from "../config";

function TeacherMarks() {

    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [marks, setMarks] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        student: "",
        subject: "",
        examName: "",
        marksObtained: "",
        totalMarks: 100,
    });

    useEffect(() => {
        fetchStudents();
        fetchSubjects();
        fetchMarks();
    }, []);

    // ==========================
    // Handle Input
    // ==========================

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ==========================
    // Load Students
    // ==========================

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
            }

        } catch (error) {
            console.log(error);
        }

    };

    // ==========================
    // Load Subjects
    // ==========================

    const fetchSubjects = async () => {

        try {

            const token = localStorage.getItem("teacherToken");

            const response = await fetch(
                `${API_URL}/api/subjects`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.success) {
                setSubjects(data.data);
            }

        } catch (error) {
            console.log(error);
        }

    };

    // ==========================
    // Load Marks
    // ==========================

    const fetchMarks = async () => {

        try {

            const token = localStorage.getItem("teacherToken");

            const response = await fetch(
                `${API_URL}/api/marks`,
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

    // ==========================
    // Save Marks
    // ==========================

    const saveMarks = async () => {

        try {

            const token = localStorage.getItem("teacherToken");

            const response = await fetch(
                `${API_URL}/api/marks/save`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (data.success) {

                alert("Marks Saved Successfully");

                setFormData({
                    student: "",
                    subject: "",
                    examName: "",
                    marksObtained: "",
                    totalMarks: 100,
                });

                fetchMarks();

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Failed to Save Marks");

        }

    };

    // ==========================
    // Delete Marks
    // ==========================

    const deleteMark = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this mark?"
        );

        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem("teacherToken");

            const response = await fetch(
                `${API_URL}/api/marks/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.success) {

                alert("Marks Deleted Successfully");

                fetchMarks();

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Failed to Delete Marks");

        }

    };

    return (
        <TeacherLayout>

            <h1 className="text-4xl font-bold mb-8">
                Marks Management
            </h1>

            <div className="bg-white rounded-xl shadow p-8">

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Student */}

                    <div>

                        <label className="block mb-2 font-semibold">
                            Student
                        </label>

                        <select
                            name="student"
                            value={formData.student}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >

                            <option value="">
                                Select Student
                            </option>

                            {students.map((student) => (

                                <option
                                    key={student._id}
                                    value={student._id}
                                >
                                    {student.rollNumber} - {student.firstName} {student.lastName}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* Subject */}

                    <div>

                        <label className="block mb-2 font-semibold">
                            Subject
                        </label>

                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >

                            <option value="">
                                Select Subject
                            </option>

                            {subjects.map((subject) => (

                                <option
                                    key={subject._id}
                                    value={subject._id}
                                >
                                    {subject.subjectName}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* Exam */}

                    <div>

                        <label className="block mb-2 font-semibold">
                            Exam
                        </label>

                        <select
                            name="examName"
                            value={formData.examName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >

                            <option value="">
                                Select Exam
                            </option>

                            <option>
                                Unit Test 1
                            </option>

                            <option>
                                Unit Test 2
                            </option>

                            <option>
                                Half Yearly
                            </option>

                            <option>
                                Pre Board
                            </option>

                            <option>
                                Annual Exam
                            </option>

                        </select>

                    </div>

                    {/* Marks */}

                    <div>

                        <label className="block mb-2 font-semibold">
                            Marks Obtained
                        </label>

                        <input
                            type="number"
                            name="marksObtained"
                            value={formData.marksObtained}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter Marks"
                        />

                    </div>

                    {/* Total */}

                    <div>

                        <label className="block mb-2 font-semibold">
                            Total Marks
                        </label>

                        <input
                            type="number"
                            name="totalMarks"
                            value={formData.totalMarks}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                </div>

                <div className="mt-8">

                    <button
                        onClick={saveMarks}
                        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
                    >
                        Save Marks
                    </button>



                    <div className="mt-10 bg-white rounded-xl shadow overflow-hidden">

                        <table className="w-full">

                            <thead className="bg-blue-700 text-white">

                                <tr>
                                    <th className="p-4">Student</th>
                                    <th className="p-4">Subject</th>
                                    <th className="p-4">Exam</th>
                                    <th className="p-4">Marks</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">Percentage</th>
                                    <th className="p-4">Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {loading ? (

                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-8"
                                        >
                                            Loading...
                                        </td>
                                    </tr>

                                ) : marks.length === 0 ? (

                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-8"
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
                                                {item.student?.firstName} {item.student?.lastName}
                                            </td>

                                            <td className="p-4">
                                                {item.subject?.subjectName}
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

                                            <td className="p-4 text-green-700 font-bold">
                                                {(
                                                    (item.marksObtained / item.totalMarks) *
                                                    100
                                                ).toFixed(1)}
                                                %
                                            </td>

                                            <td className="p-4">

                                                <button
                                                    onClick={() => deleteMark(item._id)}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </TeacherLayout>
    );
}

export default TeacherMarks;