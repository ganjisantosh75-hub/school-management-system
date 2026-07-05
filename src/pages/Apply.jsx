import { useState } from "react";

function Apply() {
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/admissions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            alert(data.message);

            console.log(data);

            setFormData({
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

        } catch (error) {
            console.log(error);
            alert("Error submitting form");
        }
    };

    return (
        <main>
            {/* Banner */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold">
                        Admission Form
                    </h1>

                    <p className="mt-4 text-lg text-blue-100">
                        Fill in the form below to begin your child's admission process at
                        Kamalam Public School.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">

                    <div className="bg-white shadow-xl rounded-2xl p-8">

                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                            Student Admission Form
                        </h2>

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
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="text"
                                name="parentName"
                                value={formData.parentName}
                                onChange={handleChange}
                                placeholder="Parent Name"
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <select
                                name="studentClass"
                                value={formData.studentClass}
                                onChange={handleChange}
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                                placeholder="Previous School Name"
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="tel"
                                name="parentMobile"
                                value={formData.parentMobile}
                                onChange={handleChange}
                                placeholder="Parent Mobile Number"
                                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Address"
                                className="md:col-span-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>

                            <button
                                type="submit"
                                className="md:col-span-2 bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold transition"
                            >
                                Apply for Admission
                            </button>

                        </form>

                    </div>

                </div>
            </section>
        </main >
    );
}

export default Apply;