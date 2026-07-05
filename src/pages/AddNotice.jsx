import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function AddNotice() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    noticeDate: "",
    audience: "All",
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
      const response = await fetch(
        "http://localhost:5000/api/notices",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Notice Added Successfully");
        navigate("/notices");
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
          Add New Notice
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Notice Title */}
            <div>
              <label className="block font-semibold mb-2">
                Notice Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter Notice Title"
                required
              />
            </div>

            {/* Notice Date */}
            <div>
              <label className="block font-semibold mb-2">
                Notice Date
              </label>

              <input
                type="date"
                name="noticeDate"
                value={formData.noticeDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Audience */}
            <div>
              <label className="block font-semibold mb-2">
                Audience
              </label>

              <select
                name="audience"
                value={formData.audience}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="All">All</option>
                <option value="Students">Students</option>
                <option value="Teachers">Teachers</option>
              </select>
            </div>

          </div>

          {/* Description */}
          <div className="mt-6">

            <label className="block font-semibold mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter Notice Description"
              required
            />

          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
          >
            Publish Notice
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddNotice;