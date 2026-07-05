import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const footerData = {
  quickLinks: [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Academics", link: "#academics" },
    { name: "Admissions", link: "#admissions" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ],

  contact: [
    "Ved Road, Surat",
    "+91 9876543210",
    "info@kamalampublicschool.com",
  ],

  social: [
    {
      icon: FaFacebookF,
      link: "#",
      color: "bg-blue-600",
    },
    {
      icon: FaInstagram,
      link: "#",
      color: "bg-pink-600",
    },
    {
      icon: FaYoutube,
      link: "#",
      color: "bg-red-600",
    },
    {
      icon: FaLinkedinIn,
      link: "#",
      color: "bg-sky-600",
    },
  ],
};

export default footerData;