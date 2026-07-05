import { faqs } from "../../data/admissionsData";
import FAQItem from "./FAQItem";

const AdmissionFAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-blue-900 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about admissions.
          </p>

        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdmissionFAQ;