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
                        <FaFacebookF className="cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125" />
                        <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125" />
                        <FaYoutube className="cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:scale-125"/>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            {/* <nav className="sticky top-0 bg-white shadow-md z-50"> */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg transition-all duration-300">

                <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-3">

                        <img
                            src={logo}
                            alt="logo"
                            // className="w-16 h-16 rounded-full object-cover"
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 shadow-md"
                        />

                        <div>
                            <h1 className="text-2xl font-extrabold text-blue-900 tracking-wide">
                                Kamalam Public School
                            </h1>

                            <p className="text-gray-500 text-sm">
                                English Medium | Hindi Medium | Marathi Medium
                            </p>
                        </div>

                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700">

                        <li className="relative cursor-pointer transition-all duration-300 hover:text-blue-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
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
                        className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Apply Now
                        <FaArrowRight />
                    </Link>

                    <Link
                        to="/login"
                        className="bg-white border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-md"
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
                                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
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