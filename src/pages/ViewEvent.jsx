import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function ViewEvent() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await fetch(
  `${API_URL}/api/events/${id}`
);

      const data = await response.json();

      if (data.success) {
        setEvent(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!event) {
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
            Event Details
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-bold">
                Event Title
              </h3>

              <p>{event.title}</p>
            </div>

            <div>
              <h3 className="font-bold">
                Event Date
              </h3>

              <p>
                {new Date(
                  event.eventDate
                ).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Location
              </h3>

              <p>{event.location}</p>
            </div>

          </div>

          <div className="mt-6">

            <h3 className="font-bold">
              Description
            </h3>

            <p className="mt-2 whitespace-pre-line">
              {event.description}
            </p>

          </div>

          <Link
            to="/events"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ViewEvent;