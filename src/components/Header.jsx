"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaMapMarkerAlt, FaInstagram, FaFacebookF, FaClock, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);   // Mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Services dropdown

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

  return (
    <>
      {/* Topbar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm border-b border-b-blue-200">
        <div className="flex space-x-6 items-center">
          <div className="flex items-center space-x-1 hover:text-black ">
            <FaMapMarkerAlt />
            <span>A-43, Noida Sector 63, Uttar Pradesh, 201301</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-black ">
            <FaClock />
            <span>Office Hours 10:00 am to 06:00 pm</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span>Visit our social pages</span>
          <a href="https://wa.me/8750610304" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/dreamskyairwayspvtltd" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaFacebookF /></a>
          <a href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaYoutube /></a>
          <a href="https://www.instagram.com/dreamskyairways/profilecard/?igsh=aTNtbWw0emNvcDFv" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaInstagram /></a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full h-20 shadow-sm bg-[#000080]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 text-white">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-3xl font-bold">
            <span>Dream Sky Tech</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 font-medium">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>

            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-white"
              >
                Services <ChevronDown size={18} className="ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-2 transition-all duration-300">
                  <Link href="/Web" className="block px-4 py-2 hover:bg-blue-100 rounded">Web Development</Link>
                  <Link href="/Service" className="block px-4 py-2 hover:bg-blue-100 rounded">Software Development</Link>
                  <Link href="/Analytical" className="block px-4 py-2 hover:bg-blue-100 rounded">Analytics Solutions</Link>
                  {/* <Link href="/services/solutions" className="block px-4 py-2 hover:bg-blue-100 rounded">IT Solutions</Link> */}
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-blue-600 text-white px-4 py-2 space-y-2">
            <Link href="/" className="block hover:text-gray-200">Home</Link>
            <Link href="/about" className="block hover:text-gray-200">About</Link>
            <Link href="/Web" className="block hover:text-gray-200">Web Development</Link>
            <Link href="/Service" className="block hover:text-gray-200">Software Development</Link>
            <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
          </div>
        )}
      </header>
    </>
  );
};


export default Header;
