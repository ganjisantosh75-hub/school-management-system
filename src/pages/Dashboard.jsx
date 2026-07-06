import { useEffect, useState } from "react";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function Dashboard() {
  const [totalAdmissions, setTotalAdmissions] = useState(0);
  const [boys, setBoys] = useState(0);
  const [girls, setGirls] = useState(0);
  const [todayAdmissions, setTodayAdmissions] = useState(0);
  const [recentAdmissions, setRecentAdmissions] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admissions`);
      const data = await response.json();

      const admissions = data.data;

      // Total Admissions
      setTotalAdmissions(admissions.length);

      // Boys Count
      const boysCount = admissions.filter(
        (item) => item.gender === "Male"
      ).length;
      setBoys(boysCount);

      // Girls Count
      const girlsCount = admissions.filter(
        (item) => item.gender === "Female"
      ).length;
      setGirls(girlsCount);

      // Today's Admissions
      const today = new Date().toDateString();

      const todayCount = admissions.filter((item) => {
        return new Date(item.createdAt).toDateString() === today;
      }).length;

      setTodayAdmissions(todayCount);

      // Recent 5 Admissions
      setRecentAdmissions(admissions.slice(0, 5));

    } catch (error) {
      console.log(error);
    }
  };

  return (
  <AdminLayout>

    <div className="max-w-7xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">
            Total Admissions
          </h2>

          <p className="text-4xl font-bold mt-4">
            {totalAdmissions}
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">
            Boys
          </h2>

          <p className="text-4xl font-bold mt-4">
            {boys}
          </p>
        </div>

        <div className="bg-pink-600 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">
            Girls
          </h2>

          <p className="text-4xl font-bold mt-4">
            {girls}
          </p>
        </div>

        <div className="bg-orange-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">
            Today's Admissions
          </h2>

          <p className="text-4xl font-bold mt-4">
            {todayAdmissions}
          </p>
        </div>

      </div>

      {/* Recent Admissions */}

      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Admissions
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-300">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border p-3">Student</th>
                <th className="border p-3">Class</th>
                <th className="border p-3">Parent</th>
                <th className="border p-3">Mobile</th>
              </tr>
            </thead>

            <tbody>

              {recentAdmissions.length > 0 ? (

                recentAdmissions.map((item) => (

                  <tr key={item._id}>

                    <td className="border p-3">
                      {item.studentName}
                    </td>

                    <td className="border p-3">
                      {item.studentClass}
                    </td>

                    <td className="border p-3">
                      {item.parentName}
                    </td>

                    <td className="border p-3">
                      {item.mobile}
                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500"
                  >
                    No Admissions Found
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </AdminLayout>
);
}

export default Dashboard;