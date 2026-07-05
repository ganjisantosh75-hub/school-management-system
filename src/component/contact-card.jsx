const ContactCard = ({ item }) => {
    const Icon = item.icon;

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300">

            <Icon className="text-4xl text-blue-600 mx-auto mb-4" />

            <h3 className="text-xl font-bold mb-3">
                {item.title}
            </h3>

            <p className="text-gray-600">
                {item.value}
            </p>

        </div>
    );
};

export default ContactCard;