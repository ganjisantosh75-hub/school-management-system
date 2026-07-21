import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function AddFee() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    student: "",
    studentName: "",
    rollNumber: "",
    className: "",
    totalFee: "",
    paidAmount: "",
    pendingAmount: "",
    status: "Pending",
    paymentDate: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/students`);
      const data = await response.json();

      if (data.success) {
        setStudents(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStudentChange = (e) => {
    const studentId = e.target.value;

    const selectedStudent = students.find(
      (student) => student._id === studentId
    );

    if (!selectedStudent) return;

    setFormData({
      ...formData,
      student: selectedStudent._id,
      studentName:
        selectedStudent.firstName + " " + selectedStudent.lastName,
      rollNumber: selectedStudent.rollNumber,
      className: selectedStudent.className,
      totalFee: "",
      paidAmount: "",
      pendingAmount: "",
      status: "Pending",
      paymentDate: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedData = {
      ...formData,
      [name]: value,
    };

    if (name === "totalFee" || name === "paidAmount") {
      const total = Number(
        name === "totalFee" ? value : updatedData.totalFee
      );

      const paid = Number(
        name === "paidAmount" ? value : updatedData.paidAmount
      );

      updatedData.pendingAmount = total - paid;

      if (updatedData.pendingAmount < 0) {
        updatedData.pendingAmount = 0;
      }

      updatedData.status =
        updatedData.pendingAmount === 0
          ? "Paid"
          : "Pending";
    }

    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.student) {
      return alert("Please select a student.");
    }

    try {
      const response = await fetch(`${API_URL}/api/fees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Fee Added Successfully");
        navigate("/fees");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-4xl font-bold mb-8">
          Add Fee Record
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Student */}

            <div>
              <label className="block font-semibold mb-2">
                Student
              </label>

              <select
                value={formData.student}
                onChange={handleStudentChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">
                  Select Student
                </option>

                {students.map((student) => (
                  <option
                    key={student._id}
                    value={student._id}
                  >
                    {student.firstName} {student.lastName}
                  </option>
                ))}
              </select>
            </div>            {/* Roll Number */}
            <div>
              <label className="block font-semibold mb-2">
                Roll Number
              </label>

              <input
                type="text"
                value={formData.rollNumber}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              />
            </div>

            {/* Class */}
            <div>
              <label className="block font-semibold mb-2">
                Class
              </label>

              <input
                type="text"
                value={formData.className}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              />
            </div>

            {/* Total Fee */}
            <div>
              <label className="block font-semibold mb-2">
                Total Fee
              </label>

              <input
                type="number"
                name="totalFee"
                value={formData.totalFee}
                onChange={handleChange}
                placeholder="Enter Total Fee"
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Paid Amount */}
            <div>
              <label className="block font-semibold mb-2">
                Paid Amount
              </label>

              <input
                type="number"
                name="paidAmount"
                value={formData.paidAmount}
                onChange={handleChange}
                placeholder="Enter Paid Amount"
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Pending Amount */}
            <div>
              <label className="block font-semibold mb-2">
                Pending Amount
              </label>

              <input
                type="number"
                value={formData.pendingAmount}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block font-semibold mb-2">
                Status
              </label>

              <input
                type="text"
                value={formData.status}
                readOnly
                className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              />
            </div>

            {/* Payment Date */}
            <div>
              <label className="block font-semibold mb-2">
                Payment Date
              </label>

              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
            >
              Save Fee
            </button>

            <button
              type="button"
              onClick={() => navigate("/fees")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddFee;