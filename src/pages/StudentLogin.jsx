import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        admissionNumber: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/student/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (data.success) {
                localStorage.setItem(
                    "studentToken",
                    data.token
                );

                navigate("/student-dashboard");
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl p-10 w-[420px]"
            >

                <h1 className="text-4xl font-bold text-center mb-8">
                    Student Login
                </h1>

                <input
                    type="text"
                    name="admissionNumber"
                    placeholder="Admission Number"
                    value={formData.admissionNumber}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-5"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-6"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
                >
                    {loading ? "Logging In..." : "Login"}
                </button>

            </form>

        </div>
    );
}

export default StudentLogin;