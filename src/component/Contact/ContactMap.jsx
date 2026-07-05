function ContactMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Find Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visit our campus and experience our learning environment.
            We look forward to welcoming you.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Kamalam Public School Location"
            src="https://www.google.com/maps?q=Kamalam+Public+School&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default ContactMap;