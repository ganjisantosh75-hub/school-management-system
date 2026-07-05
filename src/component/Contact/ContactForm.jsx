import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-2xl shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-8">
        Send a Message
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-4 rounded-lg mb-5"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border p-4 rounded-lg mb-5"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border p-4 rounded-lg mb-5"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-4 rounded-lg mb-6"
      />

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;