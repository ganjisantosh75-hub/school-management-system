import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout";

function AddTeacher() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    gender: "Male",
    qualification: "",
    subject: "",
    className: "",
    section: "",
    experience: "",
    mobile: "",
    email: "",
    joiningDate: "",
    salary: "",
    address: "",
    password: "",
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
      const response = await fetch("http://localhost:5000/api/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Teacher Added Successfully");

        navigate("/teachers");
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
          Add New Teacher
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Teacher Name */}
            <div>
              <label className="block font-semibold mb-2">
                Teacher Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Enter Teacher name"
                required
              />
            </div>

            {/* Employee ID */}
            <div>
              <label className="block font-semibold mb-2">
                Employee ID
              </label>

              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="EMP001"
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

            {/* Qualification */}
            <div>
              <label className="block font-semibold mb-2">
                Qualification
              </label>

              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="M.Sc, B.Ed"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block font-semibold mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Mathematics"
                required
              />
            </div>

            {/* Class */}

            <div>
              <label className="block font-semibold mb-2">
                Assigned Class
              </label>

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">
                  Select Class
                </option>

                <option value="1">
                  Class 1
                </option>

                <option value="2">
                  Class 2
                </option>

                <option value="3">
                  Class 3
                </option>

                <option value="4">
                  Class 4
                </option>

                <option value="5">
                  Class 5
                </option>

                <option value="6">
                  Class 6
                </option>

                <option value="7">
                  Class 7
                </option>

                <option value="8">
                  Class 8
                </option>

                <option value="9">
                  Class 9
                </option>

                <option value="10">
                  Class 10
                </option>

                <option value="11">
                  Class 11
                </option>

                <option value="12">
                  Class 12
                </option>

              </select>
            </div>

            {/* Assigned Section */}

            <div>
              <label className="block font-semibold mb-2">
                Assigned Section
              </label>

              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">
                  Select Section
                </option>

                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block font-semibold mb-2">
                Experience
              </label>

              <input
                type="number"
                name="experience"
                min="0"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="5"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-semibold mb-2">
                Mobile
              </label>

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
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
                placeholder="teacher@gmail.com"
                required
              />
            </div>

            {/* Joining Date */}
            <div>
              <label className="block font-semibold mb-2">
                Joining Date
              </label>

              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* Salary */}
            <div>
              <label className="block font-semibold mb-2">
                Salary
              </label>

              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="25000"
                required
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

          <div className="mt-6">
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Teacher Password"
              className="w-full border rounded-lg px-4 py-3"
              required
            />
          </div>

          {/* Photo (Future Use) */}
          <div className="mt-6">

            <label className="block font-semibold mb-2">
              Teacher Photo
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
            Save Teacher
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddTeacher;