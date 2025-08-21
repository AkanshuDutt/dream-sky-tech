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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque doloribus tempore, corrupti totam veritatis quis velit repellendus molestias suscipit repellat eum, laudantium sed laboriosam consequatur, dolore ut harum quaerat.
      Natus ut magni perspiciatis expedita, dolor sapiente recusandae molestiae temporibus hic delectus quasi nesciunt quisquam. Obcaecati, nemo quisquam quos veniam temporibus odit nihil blanditiis necessitatibus voluptatibus consequatur mollitia, itaque at!
      Eum ratione, unde fugit doloribus voluptatem tempore quas ullam labore. Eos sit doloremque soluta consequuntur rem, repellat maxime aliquid ducimus, labore quaerat distinctio error, delectus vitae possimus tempore deserunt. Ea.
      Atque totam, eius aspernatur enim, porro maxime voluptas commodi in molestiae consectetur magni quia laboriosam corrupti vitae, blanditiis dolor quasi ducimus consequuntur quae voluptate iure vel? Eius quas unde cupiditate?
      Rem ullam, unde minima beatae nihil quasi reprehenderit tempore mollitia aliquid velit aperiam ex saepe repellendus accusamus sapiente a iste voluptates consequuntur veritatis voluptatem odio commodi ducimus est illum? Explicabo.
      Aspernatur quo similique quam laudantium optio odit debitis inventore at natus vel minima error dolorem eligendi maiores ratione, architecto facilis, dolores, hic distinctio ducimus sequi? Pariatur vitae repellendus soluta quis!
      Doloribus possimus, excepturi, non totam similique laudantium nisi ut repellat vitae quaerat blanditiis. Quae perferendis est eum iure maxime, minima sed accusamus! Quisquam quasi modi debitis deserunt doloremque enim. Nesciunt.
      Exercitationem sequi unde ab cum fugit cumque numquam reiciendis saepe commodi aspernatur? Praesentium natus sapiente eum quidem quaerat aut dolorum nobis officia ducimus eius voluptatum, recusandae maxime suscipit quod ipsum.
      Quaerat neque labore alias, quibusdam officia itaque adipisci soluta explicabo, facilis laudantium cumque natus rerum repellat incidunt minus quisquam odio sequi eos assumenda veniam tenetur sint ad. Iure, et ex?
      Eum sed rem inventore. Error neque, incidunt velit iste, natus vero laboriosam rem corrupti reiciendis placeat modi fuga quibusdam, ipsam asperiores qui accusamus perspiciatis fugit recusandae nesciunt ducimus quam ipsum?
      Sapiente consequuntur deleniti omnis, consectetur rerum labore dolores blanditiis animi distinctio natus autem accusantium quia esse illum beatae reprehenderit soluta voluptas magnam laboriosam doloremque aut nulla accusamus aperiam temporibus. Quo!
      Nobis ea ipsam culpa aut quisquam vero, rem veritatis officia quidem eligendi praesentium autem hic id unde, corporis amet! Alias suscipit culpa, dicta optio eaque sapiente doloremque nobis soluta quia?
      Maxime vel dolore magni molestias a rem provident dolores recusandae id molestiae quo, dolor quas architecto? Corrupti commodi necessitatibus rerum tempora, repellat dolorem veniam non ratione! Numquam animi veniam in!
      Mollitia tempore hic modi aperiam voluptates qui odit laboriosam aspernatur quam, dolores, aliquid quos fugit assumenda dolorum error veritatis ducimus dignissimos deleniti! Eos dolorum asperiores mollitia odit, delectus dolorem fugit!
      Facilis maxime ipsam blanditiis eaque dolorum error dolores sunt commodi iste consequuntur, quo in fugiat inventore sed, voluptates delectus excepturi? Magnam dolore velit consequatur et voluptatibus ipsum, odio explicabo quibusdam!
      Ut corporis aspernatur ducimus minus temporibus magnam nihil veniam, at libero eos adipisci reiciendis quod, asperiores dolor animi optio unde incidunt aliquid aut natus! Vero debitis soluta deleniti quidem nisi.
      Adipisci minus minima, consequatur voluptatum illum esse alias ut, incidunt libero dolores nostrum placeat! Asperiores nemo saepe ad? Quidem vitae officia ex sapiente facilis facere sit nulla laborum doloribus at!
      Iure, ducimus odit. Itaque magni vitae autem blanditiis nam quam, animi quae. Fugit, nostrum atque consequuntur sequi maiores illum. Laudantium dolore vero ad quis deleniti quisquam quae quaerat accusamus delectus.
      Voluptas illo modi cupiditate, vel fugiat exercitationem quae dolores necessitatibus dolorum molestias ad? Eius, illo architecto ullam, eveniet accusantium quos illum distinctio aliquam sint vero tempore quasi harum voluptatum ad.
      Laborum, laudantium esse hic officia, iste illum fuga itaque debitis distinctio, optio consequatur eligendi. Cumque, totam? Laudantium libero, perferendis ad beatae neque eum obcaecati, doloremque dolorum temporibus numquam doloribus at.
      Id, amet? Dolorem neque consequuntur officiis velit. Facere quam sed inventore, libero assumenda in. Molestias illum voluptatibus, non incidunt expedita quaerat rerum quas earum accusantium minima veniam exercitationem laboriosam harum.
      Porro asperiores ipsum, ducimus necessitatibus praesentium quo quae veniam explicabo adipisci cum soluta odio sunt vitae facilis debitis animi eligendi non, aliquid unde aperiam iste nesciunt velit. Eligendi, rem dolores!
      Laboriosam reiciendis aspernatur commodi minus quos nam? Molestiae minus eaque enim adipisci non blanditiis mollitia vel commodi nisi voluptatum quisquam similique dolorem itaque earum exercitationem qui, quo culpa sed modi.</p>
    </div>
   </>
  )
}

export default Header;
