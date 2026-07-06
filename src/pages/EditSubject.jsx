import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function EditSubject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subjectName: "",
    subjectCode: "",
    className: "",
    teacherName: "",
    credits: "",
    description: "",
  });

  useEffect(() => {
    fetchSubject();
  }, []);

  const fetchSubject = async () => {
    try {
      const response = await fetch(
  `${API_URL}/api/subjects/${id}`
);
      const data = await response.json();

      if (data.success) {
        setFormData({
          subjectName: data.data.subjectName || "",
          subjectCode: data.data.subjectCode || "",
          className: data.data.className || "",
          teacherName: data.data.teacherName || "",
          credits: data.data.credits || "",
          description: data.data.description || "",
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
  `${API_URL}/api/subjects/${id}`,
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
        alert("Subject Updated Successfully");
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
          Edit Subject
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
                required
              />
            </div>

            {/* Teacher */}
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
              required
            />

          </div>

          <button
            type="submit"
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg"
          >
            Update Subject
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditSubject;