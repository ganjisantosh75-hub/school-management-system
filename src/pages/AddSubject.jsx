import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function AddSubject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subjectName: "",
    subjectCode: "",
    className: "",
    teacherName: "",
    credits: "",
    description: "",
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
        "http://localhost:5000/api/subjects",
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
        alert("Subject Added Successfully");
        navigate("/subjects");
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
          Add New Subject
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Subject Name */}
            <div>
              <label className="block font-semibold mb-2">
                Subject Name
              </label>

              <input
                type="text"
                name="subjectName"
                value={formData.subjectName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Mathematics"
                required
              />
            </div>

            {/* Subject Code */}
            <div>
              <label className="block font-semibold mb-2">
                Subject Code
              </label>

              <input
                type="text"
                name="subjectCode"
                value={formData.subjectCode}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="MATH101"
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

            {/* Teacher Name */}
            <div>
              <label className="block font-semibold mb-2">
                Teacher Name
              </label>

              <input
                type="text"
                name="teacherName"
                value={formData.teacherName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Rahul Sharma"
                required
              />
            </div>

            {/* Credits */}
            <div>
              <label className="block font-semibold mb-2">
                Credits
              </label>

              <input
                type="number"
                name="credits"
                value={formData.credits}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="5"
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
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter Subject Description"
              required
            />

          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
          >
            Save Subject
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddSubject;