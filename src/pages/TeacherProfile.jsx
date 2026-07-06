


import { useEffect, useState } from "react";
import TeacherLayout from "../component/teacher/TeacherLayout";
import API_URL from "../config";

function TeacherProfile() {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    qualification: "",
    experience: "",
    address: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("teacherToken");

      const response = await fetch(
    `${API_URL}/api/teacher/profile`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);
      const data = await response.json();

      if (data.success) {
        setTeacher(data.data);

        setFormData({
          fullName: data.data.fullName || "",
          mobile: data.data.mobile || "",
          qualification: data.data.qualification || "",
          experience: data.data.experience || "",
          address: data.data.address || "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load profile");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("teacherToken");

      const response = await fetch(
        `${API_URL}/api/teacher/profile`,
    {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Profile Updated Successfully");
        setEditing(false);
        fetchProfile();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  if (loading) {
    return (
      <TeacherLayout>
        <h2 className="text-2xl font-bold">
          Loading Profile...
        </h2>
      </TeacherLayout>
    );
  }

  if (!teacher) {
  return (
    <TeacherLayout>
      <h2 className="text-2xl font-bold text-center py-20">
        Teacher Profile Not Found
      </h2>
    </TeacherLayout>
  );
}
    return (
    <TeacherLayout>
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-10">

            <div className="flex items-center justify-between flex-wrap gap-6">

              <div className="flex items-center gap-6">

                <div className="w-28 h-28 rounded-full bg-white text-6xl flex items-center justify-center">
                  👨‍🏫
                </div>

                <div>

                  <h1 className="text-4xl font-bold">
                    {teacher.fullName}
                  </h1>

                  <p className="text-purple-100 mt-2">
                    {teacher.subject} Teacher
                  </p>

                  <p className="mt-1">
                    Employee ID : {teacher.employeeId}
                  </p>

                </div>

              </div>

              {!editing ? (
                <button
                  onClick={() => setEditing(true)}
                  className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
                >
                  ✏️ Edit Profile
                </button>
              ) : (
                <div className="flex gap-3">

                  <button
                    onClick={handleUpdate}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                  >
                    💾 Save
                  </button>

                  <button
                    onClick={() => {
                      setEditing(false);

                      setFormData({
                        fullName: teacher.fullName,
                        mobile: teacher.mobile,
                        qualification: teacher.qualification,
                        experience: teacher.experience,
                        address: teacher.address,
                      });
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
                  >
                    Cancel
                  </button>

                </div>
              )}

            </div>

          </div>

          {/* Details */}

          <div className="grid md:grid-cols-2 gap-6 p-10">

            {editing ? (
              <>
                <Input
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <Info
                  title="Email"
                  value={teacher.email}
                />

                <Input
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />

                <Info
                  title="Gender"
                  value={teacher.gender}
                />

                <Input
                  label="Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                />

                <Input
                  label="Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />

                <Info
                  title="Subject"
                  value={teacher.subject}
                />

                <Info
                  title="Salary"
                  value={`₹ ${teacher.salary}`}
                />

                <Info
                  title="Joining Date"
                  value={new Date(
                    teacher.joiningDate
                  ).toLocaleDateString()}
                />

              </>
            ) : (
              <>
                <Info title="Email" value={teacher.email} />
                <Info title="Mobile" value={teacher.mobile} />
                <Info title="Gender" value={teacher.gender} />
                <Info title="Qualification" value={teacher.qualification} />
                <Info title="Experience" value={teacher.experience} />
                <Info title="Subject" value={teacher.subject} />
                <Info title="Salary" value={`₹ ${teacher.salary}`} />
                <Info
                  title="Joining Date"
                  value={new Date(
                    teacher.joiningDate
                  ).toLocaleDateString()}
                />
              </>
            )}

          </div>

          <div className="px-10 pb-10">

            <h3 className="font-bold text-xl mb-3">
              Address
            </h3>

            {editing ? (
              <textarea
                rows="4"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />
            ) : (
              <div className="border rounded-xl p-5 bg-gray-50">
                {teacher.address}
              </div>
            )}

          </div>

        </div>

      </div>
    </TeacherLayout>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 font-semibold">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-xl px-4 py-3"
      />
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="border rounded-xl p-5 bg-gray-50">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-xl font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}

export default TeacherProfile;