import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function ViewFee() {
  const { id } = useParams();

  const [fee, setFee] = useState(null);

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
        setFee(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!fee) {
    return (
      <AdminLayout>
        <div className="p-10 text-center text-xl">
          Loading...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto py-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-8">
            Fee Details
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold">Student Name</h3>
              <p>{fee.studentName}</p>
            </div>

            <div>
              <h3 className="font-bold">Roll Number</h3>
              <p>{fee.rollNumber}</p>
            </div>

            <div>
              <h3 className="font-bold">Class</h3>
              <p>{fee.className}</p>
            </div>

            <div>
              <h3 className="font-bold">Total Fee</h3>
              <p>₹ {fee.totalFee}</p>
            </div>

            <div>
              <h3 className="font-bold">Paid Amount</h3>
              <p>₹ {fee.paidAmount}</p>
            </div>

            <div>
              <h3 className="font-bold">Pending Amount</h3>
              <p>₹ {fee.pendingAmount}</p>
            </div>

            <div>
              <h3 className="font-bold">Status</h3>
              <p>{fee.status}</p>
            </div>

            <div>
              <h3 className="font-bold">Payment Date</h3>
              <p>
                {new Date(fee.paymentDate).toLocaleDateString()}
              </p>
            </div>

          </div>

          <Link
            to="/fees"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewFee;