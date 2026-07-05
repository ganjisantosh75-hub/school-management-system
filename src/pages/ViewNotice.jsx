import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function ViewNotice() {
  const { id } = useParams();

  const [notice, setNotice] = useState(null);

  useEffect(() => {
    fetchNotice();
  }, []);

  const fetchNotice = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/notices/${id}`
      );

      const data = await response.json();

      if (data.success) {
        setNotice(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!notice) {
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
            Notice Details
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold">
                Title
              </h3>

              <p>{notice.title}</p>
            </div>

            <div>
              <h3 className="font-bold">
                Notice Date
              </h3>

              <p>
                {new Date(
                  notice.noticeDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Audience
              </h3>

              <p>{notice.audience}</p>
            </div>

          </div>

          <div className="mt-6">

            <h3 className="font-bold">
              Description
            </h3>

            <p className="mt-2 whitespace-pre-line">
              {notice.description}
            </p>

          </div>

          <Link
            to="/notices"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewNotice;