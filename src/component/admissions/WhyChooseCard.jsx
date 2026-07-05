const WhyChooseCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-900 transition duration-300">
        <span className="group-hover:scale-110 transition duration-300">
          {icon}
        </span>
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

export default WhyChooseCard;