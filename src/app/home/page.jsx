"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
     const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
        toast.success(data.message || "Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
   } catch (error) {
     toast.error("Network error! Please try again.");
   }
  };

  return (
    <>
      <Header />

      {/* Video Background Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/landingPageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-12 gap-10">
          {/* Left Content */}
          <div className="text-white max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Welcome to{" "}
              <span className="text-blue-400">Dream Sky Tech</span>
            </h1>
            <p className="text-base sm:text-lg mb-6 text-gray-200">
              We provide world-class technology solutions for your business
              growth. Let’s build something amazing together 🚀
            </p>
            <button className="px-6 py-3 rounded-lg bg-[#000080] text-white font-semibold shadow-md hover:opacity-90 transition">
              Learn More
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Schedule Your Appointment
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              We are here to help you 24/7 with experts
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="^[0-9]{10}$"
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Website */}
              {/* Subject Selector */}
            
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                required
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                          focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#000080] text-white font-semibold 
                           shadow-md hover:opacity-90 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Home;
