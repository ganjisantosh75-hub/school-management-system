import contactData from "../data/contactData";
import ContactCard from "./contact-card";

const ContactPreview = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold mt-2">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to contact us for admissions, inquiries, or any
            information regarding our school.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {contactData.map((item) => (
            <ContactCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-12">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default ContactPreview;