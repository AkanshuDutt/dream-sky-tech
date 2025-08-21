"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone } = formData;

    if (!name || !email) {
      Swal.fire("Error", "Name & Email are required!", "error");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address.", "warning");
      return false;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      Swal.fire("Invalid Phone", "Phone number must be 10 digits.", "warning");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      console.log("Form Submitted:", formData);
      Swal.fire("Success!", "Your message has been sent successfully.", "success");
      setFormData({ name: "", email: "", phone: "", website: "", message: "" });
    } catch (error) {
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-10">
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-br from-[#000080] to-blue-600 text-white p-10 rounded-2xl shadow-lg">
            <h4 className="uppercase text-sm mb-2">Let's Talk</h4>
            <h2 className="text-3xl font-bold leading-snug mb-8">
              Let’s Work Together to Find the Right Solution
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold">📧 Email:</p>
                <p>info@dreamskytech.com</p>
              </div>
              <div>
                <p className="font-semibold">📞 Phone:</p>
                <p>(+91) 8750610304</p>
              </div>
              <div>
                <p className="font-semibold">📍 Address:</p>
                <p>A-43, Sector-63 Noida, Uttar Pradesh, 201301</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-10 bg-white rounded-2xl shadow-xl">
            <h4 className="text-[#000080] uppercase text-sm mb-2">Get In Touch</h4>
            <h2 className="text-3xl font-bold mb-8">Fill The Form Below</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-xl shadow-md p-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent rounded-xl focus:outline-none"
                    required
                  />
                </div>

                <div className="bg-gray-100 rounded-xl shadow-md p-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent rounded-xl focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-xl shadow-md p-1">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent rounded-xl focus:outline-none"
                  />
                </div>

                <div className="bg-gray-100 rounded-xl shadow-md p-1">
                  <input
                    type="text"
                    name="website"
                    placeholder="Your Website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl shadow-md p-1">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent rounded-xl focus:outline-none"
                ></textarea>
              </div>

              {/* Elevated Button like Flutter */}
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 w-full rounded-xl font-semibold shadow-lg transition 
                  ${loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#000080] text-white hover:bg-blue-900"}`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
