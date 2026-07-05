import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";

function StudentSubjects() {

    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {

        try {

            const token = localStorage.getItem("studentToken");

            const response = await fetch(
                "http://localhost:5000/api/subjects/student",
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
                My Subjects
            </h1>

            <p className="text-gray-600 mb-8">
                Subjects assigned to your class.
            </p>

            {
                subjects.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-8 text-center">

                        <h2 className="text-2xl font-semibold">
                            No Subjects Found
                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {
                            subjects.map((subject) => (

                                <div
                                    key={subject._id}
                                    className="bg-white rounded-xl shadow p-6"
                                >

                                    <h2 className="text-2xl font-bold text-blue-700 mb-4">
                                        {subject.subjectName}
                                    </h2>

                                    <div className="space-y-3">

                                        <p>
                                            <strong>Subject Code :</strong>{" "}
                                            {subject.subjectCode}
                                        </p>

                                        <p>
                                            <strong>Teacher :</strong>{" "}
                                            {subject.teacherName}
                                        </p>

                                        <p>
                                            <strong>Credits :</strong>{" "}
                                            {subject.credits}
                                        </p>

                                        <p>
                                            <strong>Description :</strong>
                                        </p>

                                        <p className="text-gray-600">
                                            {subject.description}
                                        </p>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>

    </StudentLayout>
);
}

export default StudentSubjects;