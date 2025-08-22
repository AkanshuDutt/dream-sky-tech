"use client";

// import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />

      {/* Video Background Section */}
      <div className="relative w-full h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50" />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12">
          {/* Left Content */}
          <div className="text-white max-w-xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="text-blue-400">Dream Sky Tech</span>
            </h1>
            <p className="text-lg mb-6 text-gray-200">
              We provide world-class technology solutions for your business
              growth. Let’s build something amazing together 🚀
            </p>
            <button className="px-6 py-3 rounded-lg bg-[#000080] text-white font-semibold shadow-md hover:opacity-90 transition">
              Learn More
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900">
              Schedule Your Appointment
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              We are here to help you 24/7 with experts
            </p>

            <form className="space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                pattern="^[0-9]{10}$"
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              {/* Website */}
              <input
                type="text"
                placeholder="Your Website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#000080] text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
