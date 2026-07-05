import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We're always happy to answer your questions about admissions,
            academics, facilities, or campus visits. Feel free to contact us.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  Kamalam Public School,<br />
                  Your City, State, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  info@kamalampublicschool.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-blue-700 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">School Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday <br />
                  8:00 AM - 4:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;