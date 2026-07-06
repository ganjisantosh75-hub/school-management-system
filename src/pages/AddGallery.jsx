import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function AddGallery() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "Annual Day",
    eventDate: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploadData = new FormData();

      uploadData.append("title", formData.title);
      uploadData.append("category", formData.category);
      uploadData.append("eventDate", formData.eventDate);
      uploadData.append("description", formData.description);
      uploadData.append("image", formData.image);

      // Debug
      console.log("Form Data:", formData);

      const response = await fetch(
        `${API_URL}/api/gallery`,
        {
          method: "POST",
          body: uploadData,
        }
      );

      console.log("Response Status:", response.status);

      // JSON ki jagah pehle text read karenge
      const text = await response.text();

      console.log("Server Response:");
      console.log(text);

      // Agar JSON hai tabhi parse karo
      try {
        const data = JSON.parse(text);

        if (data.success) {
          alert("Gallery Item Added Successfully");
          navigate("/gallery-admin");
        } else {
          alert(data.message);
        }
      } catch (err) {
        console.error("Response is not JSON");
        alert("Server returned HTML instead of JSON. Check browser console.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-4xl font-bold mb-8">
          Add Gallery Item
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title */}
            <div>
              <label className="block font-semibold mb-2">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Annual Day Celebration"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option>Annual Day</option>
                <option>Sports Day</option>
                <option>Independence Day</option>
                <option>Republic Day</option>
                <option>Science Exhibition</option>
                <option>Cultural Program</option>
                <option>Picnic</option>
                <option>Workshop</option>
                <option>Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block font-semibold mb-2">
                Event Date
              </label>

              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
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
              placeholder="Write event description..."
              required
            />
          </div>

          {/* Gallery Image */}
          <div className="mt-6">
            <label className="block font-semibold mb-2">
              Gallery Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div className="mt-6">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                className="w-64 h-48 object-cover rounded-lg border"
              />
            </div>
          )}

          <button
            type="submit"
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Save Gallery Item
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddGallery;