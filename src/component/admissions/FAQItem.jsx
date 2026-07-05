import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 bg-white hover:bg-blue-50 transition"
      >
        <h3 className="text-lg font-semibold text-gray-800 text-left">
          {question}
        </h3>

        {open ? (
          <FaChevronUp className="text-blue-900" />
        ) : (
          <FaChevronDown className="text-blue-900" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-5 text-gray-600 leading-7">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;