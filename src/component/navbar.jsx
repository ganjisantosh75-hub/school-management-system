import { useState } from "react";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaBars,
    FaTimes,
    FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/logo/logo.jpeg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top Header */}


            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

                    <div className="hidden md:flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaEnvelope />
                            <span>info@kamalampublicschool.com</span>
                        </div>
                    </div>

                    <div className="flex gap-4 text-lg mx-auto md:mx-0">
                        <FaFacebookF className="cursor-pointer hover:text-yellow-300" />
                        <FaInstagram className="cursor-pointer hover:text-yellow-300" />
                        <FaYoutube className="cursor-pointer hover:text-yellow-300" />
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="sticky top-0 bg-white shadow-md z-50">

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-3">

                        <img
                            src={logo}
                            alt="logo"
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                            <h1 className="text-2xl font-bold text-blue-900">
                                Kamalam Public School
                            </h1>

                            <p className="text-gray-500 text-sm">
                                English Medium | Hindi Medium | Marathi Medium
                            </p>
                        </div>

                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 font-semibold">

                        <li className="hover:text-blue-700">
                            <a href="#home">home</a>
                        </li>

                        <li className="hover:text-blue-700">
                            <a href="#about">About</a>
                        </li>

                        <li className="hover:text-blue-700">
                            <Link to="/academics">Academics</Link>
                        </li>

                        <li className="hover:text-blue-700">
                            <Link to="/admissions">Admissions</Link>
                        </li>

                        <li className="hover:text-blue-700">
                            <Link to="/gallery">Gallery</Link>
                        </li>

                        <li className="hover:text-blue-700">
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                    <Link
                        to="/apply"
                        className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Apply Now
                        <FaArrowRight />
                    </Link>

                    <Link
                        to="/login"
                        className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition duration-300"
                    >
                        Login
                    </Link>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div >

                {/* Mobile Menu */}
                {
                    isOpen && (
                        <div className="md:hidden bg-white border-t">

                            <ul className="flex flex-col gap-4 p-5 font-medium">

                                <a href="#home">Home</a>

                                <a href="#about">About</a>

                                {/* <Link to="/about">About</Link> */}

                                <Link to="/academics">Academics</Link>

                                <Link to="/admissions">Admissions</Link>

                                <Link to="/gallery">Gallery</Link>

                                <Link to="/contact">Contact</Link>

                                <Link
                                    to="/apply"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    Apply Now
                                    <FaArrowRight />
                                </Link>

                            </ul>

                        </div>
                    )
                }
            </nav >
        </>
    );
}

export default Navbar;