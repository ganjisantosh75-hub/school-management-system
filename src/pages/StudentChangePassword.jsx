import { useState } from "react";
import StudentLayout from "../component/student/StudentLayout";

function StudentChangePassword() {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert("New Password and Confirm Password do not match");
            return;
        }

        try {

            setLoading(true);

            const token = localStorage.getItem("studentToken");

            const response = await fetch(
                "http://localhost:5000/api/student/change-password",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        currentPassword,
                        newPassword,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {

                alert(data.message);

                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);
            alert("Something went wrong");

        }

        setLoading(false);
    };

    return (
        <StudentLayout>

            <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8">

                <h1 className="text-3xl font-bold mb-8">
                    Change Password
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-semibold">
                            Current Password
                        </label>

                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) =>
                                setCurrentPassword(e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-semibold">
                            New Password
                        </label>

                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-semibold">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
                    >
                        {loading
                            ? "Updating..."
                            : "Change Password"}
                    </button>

                </form>

            </div>

        </StudentLayout>
    );
}

export default StudentChangePassword;