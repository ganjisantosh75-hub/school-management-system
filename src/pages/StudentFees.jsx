import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";

function StudentFees() {

    const [fee, setFee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeeStatus();
    }, []);

    const fetchFeeStatus = async () => {

        try {

            const token = localStorage.getItem("studentToken");

            const response = await fetch(
                "http://localhost:5000/api/fees/student",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (data.success) {
                setFee(data.data);
            }

        } catch (error) {

            console.log(error);

        }

        setLoading(false);

    };

    if (loading) {
        return (
            <StudentLayout>
                <h2 className="text-2xl">Loading...</h2>
            </StudentLayout>
        );
    }

    if (!fee) {
        return (
            <StudentLayout>
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    <h2 className="text-2xl font-bold">
                        Fee Record Not Found
                    </h2>
                </div>
            </StudentLayout>
        );
    }

    return (
        <StudentLayout>

            <div>

                <h1 className="text-4xl font-bold mb-2">
                    Fee Status
                </h1>

                <p className="text-gray-600 mb-8">
                    View your current fee details.
                </p>

                {/* Summary Cards */}

                <div className="grid md:grid-cols-3 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500 mb-2">
                            Total Fee
                        </p>

                        <h2 className="text-3xl font-bold text-blue-700">
                            ₹ {fee.totalFee}
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500 mb-2">
                            Paid Amount
                        </p>

                        <h2 className="text-3xl font-bold text-green-600">
                            ₹ {fee.paidAmount}
                        </h2>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-500 mb-2">
                            Pending Amount
                        </p>

                        <h2 className="text-3xl font-bold text-red-600">
                            ₹ {fee.pendingAmount}
                        </h2>
                    </div>

                </div>

                {/* Fee Details */}

                <div className="bg-white rounded-xl shadow p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Payment Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <p className="text-gray-500">
                                Student Name
                            </p>

                            <h3 className="font-semibold text-lg">
                                {fee.studentName}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">
                                Roll Number
                            </p>

                            <h3 className="font-semibold text-lg">
                                {fee.rollNumber}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">
                                Class
                            </p>

                            <h3 className="font-semibold text-lg">
                                {fee.className}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">
                                Payment Date
                            </p>

                            <h3 className="font-semibold text-lg">
                                {new Date(fee.paymentDate).toLocaleDateString()}
                            </h3>
                        </div>

                        <div>
                            <p className="text-gray-500">
                                Status
                            </p>

                            <span
                                className={`px-4 py-2 rounded-full text-white font-semibold ${
                                    fee.status === "Paid"
                                        ? "bg-green-600"
                                        : "bg-yellow-500"
                                }`}
                            >
                                {fee.status}
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </StudentLayout>
    );
}

export default StudentFees;