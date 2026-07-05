import { FaCalendarAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      <img
        src={news.image}
        alt={news.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-2 text-blue-600 mb-3">
          <FaCalendarAlt />
          <span>{news.date}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {news.title}
        </h3>

        <p className="text-gray-600 leading-7 mb-5">
          {news.description}
        </p>

        <button className="text-blue-600 font-semibold hover:text-blue-800">
          Read More →
        </button>

      </div>

    </div>
  );
};

export default NewsCard;