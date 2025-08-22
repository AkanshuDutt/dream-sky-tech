"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaClock,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Services dropdown
  const [isVisible, setIsVisible] = useState(true); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".services-dropdown")) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Detect scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Topbar */}
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-center px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm border-b border-b-blue-200 gap-2 md:gap-0 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 space-y-1 md:space-y-0 items-start md:items-center">
          <div className="flex items-center space-x-1 hover:text-black">
            <FaMapMarkerAlt className="text-sm sm:text-base" />
            <span>A-43, Noida Sector 63, Uttar Pradesh, 201301</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-black">
            <FaClock className="text-sm sm:text-base" />
            <span>Office Hours 10:00 am to 06:00 pm</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 mt-2 md:mt-0">
          <span className="hidden md:block text-xs sm:text-sm">
            Visit our social pages
          </span>
          <a
            href="https://wa.me/8750610304"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaWhatsapp className="text-sm sm:text-base" />
          </a>
          <a
            href="https://www.facebook.com/dreamskyairwayspvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaFacebookF className="text-sm sm:text-base" />
          </a>
          <a
            href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaYoutube className="text-sm sm:text-base" />
          </a>
          <a
            href="https://www.instagram.com/dreamskyairways/profilecard/?igsh=aTNtbWw0emNvcDFv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaInstagram className="text-sm sm:text-base" />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 w-full shadow-sm bg-[#000080] text-white transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-xl sm:text-2xl md:text-3xl font-bold">
            <span>Dream Sky Tech</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-4 lg:gap-6 font-medium text-sm md:text-base">
            <Link href="/home" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-gray-300"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-2 transition-all duration-300">
                  <Link
                    href="/Service"
                    className="block px-3 py-2 hover:bg-blue-100 rounded text-sm"
                  >
                    Software Development
                  </Link>
                  <Link
                    href="/Analytical"
                    className="block px-3 py-2 hover:bg-blue-100 rounded text-sm"
                  >
                    Analytics Solutions
                  </Link>
                  <Link
                    href="/Web"
                    className="block px-3 py-2 hover:bg-blue-100 rounded text-sm"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/It"
                    className="block px-3 py-2 hover:bg-blue-100 rounded text-sm"
                  >
                    IT Solutions
                  </Link>
                  <Link
                    href="/Cyber"
                    className="block px-3 py-2 hover:bg-blue-100 rounded text-sm"
                  >
                    Cyber Security
                  </Link>
                </div>
              )}
            </div>

            <Link href="/Contact" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div
            className={`md:hidden bg-[#000080] text-white px-4 py-3 space-y-2 animate-slideDown transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }`}
          >
            <Link href="/home" className="block hover:text-gray-300 text-sm">
              Home
            </Link>
            <Link href="/about" className="block hover:text-gray-300 text-sm">
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center w-full justify-between py-2 hover:text-gray-300 text-sm"
              >
                Services <ChevronDown size={16} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    href="/Service"
                    className="block hover:text-gray-300 text-sm"
                  >
                    Software Development
                  </Link>
                  <Link
                    href="/Analytical"
                    className="block hover:text-gray-300 text-sm"
                  >
                    Analytics Solutions
                  </Link>
                  <Link href="/Web" className="block hover:text-gray-300 text-sm">
                    Web Development
                  </Link>
                  <Link href="/It" className="block hover:text-gray-300 text-sm">
                    IT Solutions
                  </Link>
                  <Link href="/Cyber" className="block hover:text-gray-300 text-sm">
                    Cyber Security
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block hover:text-gray-300 text-sm">
              Contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;