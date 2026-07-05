const FacilityCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <h3 className="text-2xl font-bold text-blue-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
};

export default FacilityCard;