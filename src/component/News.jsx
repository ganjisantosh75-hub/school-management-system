import newsData from "../data/newsData";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            Latest News
          </p>

          <h2 className="text-4xl font-bold mt-2">
            News & Events
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest events, announcements and activities happening at our school.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))}

        </div>

        {/* Button */}

        <div className="text-center mt-12">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            View All News
          </button>

        </div>

      </div>

    </section>
  );
};

export default News;