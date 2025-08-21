"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaMapMarkerAlt, FaInstagram, FaFacebookF, FaClock, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);       // Services Dropdown
  const [isHomeOpen, setIsHomeOpen] = useState(false); // Home Dropdown
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
   const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  return (
   <>
     <div className="flex justify-between items-center px-6 py-2 text-sm border-b border-b-blue-200">
          <div className="flex space-x-6 items-center">
            <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer">
              <FaMapMarkerAlt />
              <span>A-43, Noida Sector 63, Uttar Pradesh, 201301</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer">
              <FaClock />
              <span>Office Hours 10:00 am to 06:00 pm</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Visit our social pages</span>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/dreamskyairwayspvtltd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@dreamskyairways?si=pQLQuRttBlG401Pd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/dreamskyairways/profilecard/?igsh=aTNtbWw0emNvcDFv" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
          </div>
        </div>
   <header className="sticky top-0 z-50  w-full shadow-sm bg-[#000080]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 text-white">
        {/* Logo */}
       <div className="flex items-center space-x-2 text-2xl font-bold">
        
        <span>Dream Sky tech</span>
      </div>

           

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
           {/* Home Dropdown */}
            <Link href="/contact" className="block hover:text-gray-200">
            Home
          </Link>
          
         



          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>

             {/* Dropdown Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center hover:text-yellow-300">
              Services <ChevronDown size={18} className="ml-1" />
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <Link href="/services/web-dev" className="block px-4 py-2 hover:bg-blue-100">
                  Web Development
                </Link>
                <Link href="/services/software-dev" className="block px-4 py-2 hover:bg-blue-100">
                  Software Development
                </Link>
                <Link href="/services/analytics" className="block px-4 py-2 hover:bg-blue-100">
                  Analytics Solutions
                </Link>
                <Link href="/services/solutions" className="block px-4 py-2 hover:bg-blue-100">
                  IT Solutions
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-200">
            About
          </Link>
          <Link href="/services" className="block hover:text-gray-200">
            Services
          </Link>
          <Link href="/pages" className="block hover:text-gray-200">
            Pages
          </Link>
          <Link href="/blogs" className="block hover:text-gray-200">
            Blogs
          </Link>
          <Link href="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
        </div>
      )}
    </header>
   </>
  )
}

export default Header;
