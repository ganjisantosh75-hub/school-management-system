import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events`);
      const data = await response.json();

      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Event
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
     const response = await fetch(
  `${API_URL}/api/events/${id}`,
  {
    method: "DELETE",
  }
);
        

      const data = await response.json();

      if (data.success) {
        alert("Event Deleted Successfully");
        fetchEvents();
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
            Event Management
          </h1>

          <Link
            to="/events/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            + Add Event
          </Link>

        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">

              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Event Date</th>
                <th className="p-4">Location</th>
                <th className="p-4">Action</th>
              </tr>

            </thead>

            <tbody>

              {events.length > 0 ? (
                events.map((event) => (
                  <tr
                    key={event._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {event.title}
                    </td>

                    <td className="p-4">
                      {new Date(
                        event.eventDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      {event.location}
                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <Link
                          to={`/events/view/${event._id}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                          View
                        </Link>

                        <Link
                          to={`/events/edit/${event._id}`}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(event._id)}
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
                    colSpan="4"
                    className="text-center p-8 text-gray-500"
                  >
                    No events found.
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

export default Events;