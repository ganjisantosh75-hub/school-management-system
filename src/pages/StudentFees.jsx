import { useEffect, useState } from "react";
import StudentLayout from "../component/student/StudentLayout";
import API_URL from "../config";

function StudentFees() {
  const [fee, setFee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeeStatus();
  }, []);

  const fetchFeeStatus = async () => {
    try {
      const token = localStorage.getItem("studentToken");

      console.log("Student Token:", token);

      const response = await fetch(`${API_URL}/api/student/fees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Status:", response.status);

      const data = await response.json();

      console.log("Full Response:", data);
      console.log("Fee Object:", data.data);

      if (data.success) {
        setFee(data.data);
        console.log("State Set:", data.data);
      } else {
        setFee(null);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      setFee(null);
    }

    setLoading(false);
  };

  console.log("Current Fee State:", fee);

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
          <h2 className="text-2xl font-bold text-red-600">
            Fee Record Not Found
          </h2>
        </div>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout>
      <h1 className="text-4xl font-bold mb-8">Fee Status</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <p>Total Fee</p>
          <h2 className="text-3xl font-bold text-blue-600">
            ₹ {fee.totalFee}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p>Paid Amount</p>
          <h2 className="text-3xl font-bold text-green-600">
            ₹ {fee.paidAmount}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p>Pending Amount</p>
          <h2 className="text-3xl font-bold text-red-600">
            ₹ {fee.pendingAmount}
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

        <p>
          <b>Student Name:</b> {fee.studentName}
        </p>

        <p>
          <b>Roll Number:</b> {fee.rollNumber}
        </p>

        <p>
          <b>Class:</b> {fee.className}
        </p>

        <p>
          <b>Payment Date:</b>{" "}
          {fee.paymentDate
            ? new Date(fee.paymentDate).toLocaleDateString()
            : "No Date"}
        </p>

        <p>
          <b>Status:</b> {fee.status}
        </p>
      </div>
    </StudentLayout>
  );
}

export default StudentFees;