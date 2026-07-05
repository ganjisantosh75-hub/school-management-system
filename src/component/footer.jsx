import logo from "../assets/logo/logo.jpeg";
import footerData from "../data/footerData";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>
            <img
              src={logo}
              alt="School Logo"
              className="w-20 h-20 rounded-full mb-4"
            />

            <h2 className="text-2xl font-bold">
              Kamalam Public School
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Providing quality education with discipline,
              values and excellence.
            </p>
          </div>

          {/* Quick Links */}

          <FooterColumn
            title="Quick Links"
            items={footerData.quickLinks}
          />

          {/* Contact */}

          <FooterColumn
            title="Contact"
            items={footerData.contact}
          />

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              {footerData.social.map((social, index) => {

                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    className={`${social.color} p-3 rounded-full hover:scale-110 transition`}
                  >
                    <Icon />
                  </a>
                );

              })}

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © 2025 Kamalam Public School. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;