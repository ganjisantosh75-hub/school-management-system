const ClassCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      <h3 className="text-2xl font-bold text-blue-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
};

export default ClassCard;