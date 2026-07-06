import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";
import API_URL from "../config";

function AddStudent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    dateOfBirth: "",
    className: "",
    section: "",
    rollNumber: "",
    admissionNumber: "",
    fatherName: "",
    motherName: "",
    parentPhone: "",
    email: "",
    address: "",
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
     const response = await fetch(`${API_URL}/api/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Student Added Successfully");
        navigate("/students");
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
          Add New Student
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* First Name */}
            <div>
              <label className="block font-semibold mb-2">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter First Name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-semibold mb-2">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter Last Name"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block font-semibold mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-semibold mb-2">
                Date of Birth
              </label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
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
                placeholder="Class"
                required
              />
            </div>

            {/* Section */}
            <div>
              <label className="block font-semibold mb-2">
                Section
              </label>

              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="A"
                required
              />
            </div>

            {/* Roll Number */}
            <div>
              <label className="block font-semibold mb-2">
                Roll Number
              </label>

              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="101"
                required
              />
            </div>

            {/* Admission Number */}
            <div>
              <label className="block font-semibold mb-2">
                Admission Number
              </label>

              <input
                type="text"
                name="admissionNumber"
                value={formData.admissionNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="ADM001"
                required
              />
            </div>

            {/* Father Name */}
            <div>
              <label className="block font-semibold mb-2">
                Father Name
              </label>

              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Father Name"
                required
              />
            </div>

            {/* Mother Name */}
            <div>
              <label className="block font-semibold mb-2">
                Mother Name
              </label>

              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Mother Name"
                required
              />
            </div>

            {/* Parent Phone */}
            <div>
              <label className="block font-semibold mb-2">
                Parent Phone
              </label>

              <input
                type="text"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="9876543210"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="student@gmail.com"
              />
            </div>

          </div>

          {/* Address */}
          <div className="mt-6">

            <label className="block font-semibold mb-2">
              Address
            </label>

            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter Address"
              required
            />

          </div>

          {/* Student Photo (Future Use) */}
          <div className="mt-6">

            <label className="block font-semibold mb-2">
              Student Photo
            </label>

            <input
              type="file"
              className="w-full border rounded-lg px-4 py-3"
            />

          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
          >
            Save Student
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddStudent;