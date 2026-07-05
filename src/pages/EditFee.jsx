import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function EditFee() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchFee();
  }, []);

  const fetchFee = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/fees/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setFormData({
          studentName: data.data.studentName || "",
          rollNumber: data.data.rollNumber || "",
          className: data.data.className || "",
          totalFee: data.data.totalFee || "",
          paidAmount: data.data.paidAmount || "",
          pendingAmount: data.data.pendingAmount || "",
          status: data.data.status || "Pending",
          paymentDate: data.data.paymentDate
            ? data.data.paymentDate.split("T")[0]
            : "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/fees/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Fee Updated Successfully");
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
          Edit Fee
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                required
              />
            </div>

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
                required
              />
            </div>

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
                required
              />
            </div>

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
                required
              />
            </div>

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
                required
              />
            </div>

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
                required
              />
            </div>

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
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg"
          >
            Update Fee
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditFee;