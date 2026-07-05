import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function EditAdmission() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    mobile: "",
    studentClass: "",
    dob: "",
    gender: "",
    previousSchool: "",
    parentMobile: "",
    address: "",
  });

  useEffect(() => {
    fetchAdmission();
  }, []);

  const fetchAdmission = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admissions/${id}`
      );

      const data = await response.json();

      setFormData(data.data);
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
        `http://localhost:5000/api/admissions/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      alert(data.message);

      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          Edit Admission
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8">

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student Name"
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent Name"
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="border rounded-lg px-4 py-3"
            />

            <select
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Select Class</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              placeholder="Previous School"
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="parentMobile"
              value={formData.parentMobile}
              onChange={handleChange}
              placeholder="Parent Mobile"
              className="border rounded-lg px-4 py-3"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              placeholder="Address"
              className="md:col-span-2 border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition"
            >
              Update Admission
            </button>

          </form>

        </div>

      </div>
    </AdminLayout>
  );
}

export default EditAdmission;