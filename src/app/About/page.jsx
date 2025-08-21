"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const processSteps = [
  {
    title: "Discovery",
    image: "/discovery.jpg",
    description:
      "At DreamSkyTech, we begin by deeply understanding client goals and challenges. Our team conducts research, workshops, and brainstorming sessions to gather valuable insights.",
  },
  {
    title: "Planning",
    image: "/planning.jpg",
    description:
      "We craft a clear strategy and roadmap, defining timelines, resources, and deliverables. Every step is planned to ensure smooth execution and transparency.",
  },
  {
    title: "Execute",
    image: "/execute.jpg",
    description:
      "Our skilled developers and designers bring ideas to life. We build, test, and refine solutions while keeping clients updated at every stage.",
  },
  {
    title: "Deliver",
    image: "/delivery.jpg",
    description:
      "We ensure timely delivery with quality assurance and ongoing support. At DreamSkyTech, client satisfaction is our ultimate goal.",
  },
];

export default function AboutPage() {
  // ✅ Form State & Handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Name: sirf alphabets aur space
    if (name === "name") {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    // ✅ Phone: sirf digits aur max 10
    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <>
    <Header/>
    <div className="bg-white font-sans">
      {/* About Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/about.jpg"
              alt="About Ussss"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 font-medium rounded-full mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Helping Businesses Grow With Modern Technology
            </h2>
            <p className="text-gray-700 mb-4">
              With over <b>2 years</b> of experience in IT services, we build
              powerful software applications and mobile solutions tailored for
              businesses worldwide.
            </p>
            <p className="text-gray-600">
              Our team focuses on delivering innovative, scalable, and secure
              digital solutions that help organizations improve efficiency,
              connect better with their customers, and stay ahead in the
              competitive market.
            </p>
            <button className="inline-block px-4 py-1 text-sm bg-blue-100 mt-10 text-blue-600 font-medium rounded-full mb-4">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Working Process
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20 cursor-pointer">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-48 overflow-hidden"
                whileHover={{ scale: 1.08 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 12,
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transform transition-transform duration-500"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Consultation Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Request A Free Consultation
        </h2>

        <div className="bg-[#000080] py-19 px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-white/90 shadow-lg rounded-lg overflow-hidden">
            {/* Left Side Image */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/call.jpg"
                alt="Consultation"
                fill
                className="object-cover rounded-l-lg"
              />
            </div>

            {/* Right Side Form */}
            <div className="bg-[#f8fbff] p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Free Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="10 Digit Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    name="website"
                    placeholder="Your Website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message Here"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-md resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
