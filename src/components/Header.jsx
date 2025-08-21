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
   <header className="sticky top-0 z-50  w-full shadow-sm bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 text-white">
        {/* Logo */}
       <div className="flex items-center space-x-2 text-2xl font-bold">
        {/* <Image
          src="/sky.png"
          alt="Dream Sky Tech Logo"
          width={200}
          height={40}
          className="rounded-full"
          priority
        /> */}
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

               {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPagesOpen(true)}
            onMouseLeave={() => setIsPagesOpen(false)}
          >
            <button className="flex items-center hover:text-yellow-300">
              Pages <ChevronDown size={18} className="ml-1" />
            </button>
            {isPagesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg">
                <ul className="p-2 space-y-1">
                  <li><Link href="#">Services</Link></li>
                  <li><Link href="#">Our Team</Link></li>
                  <li><Link href="#">Single Team</Link></li>
                  <li><Link href="#">Case Studies</Link></li>
                  
                  {/* Shop Nested Dropdown */}
                  <li
                    className="relative"
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full">
                      Shop <ChevronDown size={16} className="ml-1" />
                    </button>
                    {isShopOpen && (
                      <div className="absolute left-full top-0 ml-2 w-48 bg-white text-black rounded-md shadow-lg">
                        <ul className="p-2 space-y-1">
                          <li><Link href="#">Shop</Link></li>
                          <li><Link href="#">Shop Single</Link></li>
                          <li><Link href="#">Cart</Link></li>
                          <li><Link href="#">Checkout</Link></li>
                          <li><Link href="#">My Account</Link></li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>



 {/* Blogs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsBlogsOpen(true)}
            onMouseLeave={() => setIsBlogsOpen(false)}
          >
            <button className="flex items-center hover:text-yellow-300">
              Blogs <ChevronDown size={18} className="ml-1" />
            </button>
            {isBlogsOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <ul className="p-2 space-y-1">
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Blog Details</Link></li>
                </ul>
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
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint, odit qui repellat nulla labore quod voluptatum sit perferendis vero cum ducimus ex nostrum saepe ipsam neque magnam, est suscipit?</p>
    </div>
   </>
  )
}

export default Header;
