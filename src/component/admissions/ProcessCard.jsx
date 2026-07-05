const ProcessCard = ({ step, icon, title, description }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      {/* Step Number */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg shadow-lg">
        {step}
      </div>

      {/* Icon */}
      <div className="text-5xl mt-6 mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-blue-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
};

export default ProcessCard;