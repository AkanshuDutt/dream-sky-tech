"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Section 1: Hero with Features */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Software Development
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Turning Your Ideas Into Digital Reality
            </h2>
            <p className="text-gray-600 mt-4">
              At DreamSkyTech, we provide smart software solutions that automate
              workflows, boost efficiency, and help businesses scale with
              confidence. With a strong focus on innovation, we deliver
              cutting-edge digital products tailored to your unique goals.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Contact Us
            </button>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm text-center">
                <span className="block text-blue-600 font-bold text-2xl">👨‍💻</span>
                <h4 className="mt-2 font-semibold">Expert Team</h4>
                <p className="text-sm text-gray-500">
                  Skilled professionals delivering top-notch solutions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm text-center">
                <span className="block text-blue-600 font-bold text-2xl">🚀</span>
                <h4 className="mt-2 font-semibold">Fast Execution</h4>
                <p className="text-sm text-gray-500">
                  Agile and adaptive workflows for faster delivery.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm text-center">
                <span className="block text-blue-600 font-bold text-2xl">💡</span>
                <h4 className="mt-2 font-semibold">Innovative Ideas</h4>
                <p className="text-sm text-gray-500">
                  Creative solutions that transform businesses digitally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="flex justify-center">
            <video
              src="/meeting.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-3xl h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Section 2: Software Development Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Software Development Technologies We Use
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              At DreamSkyTech, we utilize the latest technologies to deliver
              scalable, secure, and high-performing software solutions. From
              frontend to backend, databases to cloud – our stack covers
              everything you need for success.
            </p>

            {/* Technologies Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h4 className="font-semibold text-lg text-blue-600">
                  Frontend Development
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  React, Next.js, Angular, Vue.js for building interactive and
                  responsive user interfaces.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h4 className="font-semibold text-lg text-blue-600">
                  Backend Development
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Node.js, Express.js, Python, Java – powering scalable APIs and
                  server-side logic.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h4 className="font-semibold text-lg text-blue-600">
                  Databases
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  MySQL, PostgreSQL, MongoDB, Firebase – secure and efficient
                  data management.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h4 className="font-semibold text-lg text-blue-600">
                  Cloud & DevOps
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  AWS, Azure, Docker, CI/CD – ensuring smooth deployment and
                  reliable infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src="/bg.jpg"
                alt="DreamSkyTech Team"
                width={900}
                height={800}
                className="shadow-lg rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Empowering Businesses With Technology
              </h2>
              <p className="text-gray-600 mt-4">
                DreamSkyTech has helped companies across industries by building
                scalable software, modern web platforms, and secure digital
                solutions. Trusted by clients for innovation, reliability, and
                growth-focused strategies.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Software Development</span>
                    <span>95%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Web Development</span>
                    <span>88%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>SEO & Digital Marketing</span>
                    <span>82%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full  h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[82%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cyber Security</span>
                    <span>76%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[76%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
