import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function Fees() {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/fees");
      const data = await response.json();

      if (data.success) {
        setFees(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Fee
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this fee record?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/fees/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Fee Record Deleted Successfully");
        fetchFees();
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
      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Fees Management
          </h1>

          <Link
            to="/fees/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Fee
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Class</th>
                <th className="p-4">Total Fee</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>

              {fees.length > 0 ? (
                fees.map((fee) => (
                  <tr
                    key={fee._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {fee.studentName}
                    </td>

                    <td className="p-4">
                      {fee.className}
                    </td>

                    <td className="p-4">
                      ₹ {fee.totalFee}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          fee.status === "Paid"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {fee.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">

                        <Link
                          to={`/fees/view/${fee._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/fees/edit/${fee._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(fee._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-8 text-gray-500"
                  >
                    No fee records found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Fees;