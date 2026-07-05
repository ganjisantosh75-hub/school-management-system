const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">
        {title}
      </h3>

      <ul className="space-y-3 text-gray-400">
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === "object" && item.link ? (
              <a
                href={item.link}
                className="hover:text-white transition"
              >
                {item.name}
              </a>
            ) : (
              <span>{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;