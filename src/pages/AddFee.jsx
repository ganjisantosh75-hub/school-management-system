import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function AddFee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    className: "",
    totalFee: "",
    paidAmount: "",
    pendingAmount: "",
    status: "Pending",
    paymentDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

            {/* Student Name */}
            <div>
              <label className="block font-semibold mb-2">
                Student Name
              </label>

              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter Student Name"
                required
              />
            </div>

            {/* Roll Number */}
            <div>
              <label className="block font-semibold mb-2">
                Roll Number
              </label>

              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="101"
                required
              />
            </div>

            {/* Class */}
            <div>
              <label className="block font-semibold mb-2">
                Class
              </label>

              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="10"
                required
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
                className="w-full border rounded-lg px-4 py-3"
                placeholder="25000"
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
                className="w-full border rounded-lg px-4 py-3"
                placeholder="15000"
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
                name="pendingAmount"
                value={formData.pendingAmount}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="10000"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block font-semibold mb-2">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
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

          <button
            type="submit"
            className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
          >
            Save Fee
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddFee;