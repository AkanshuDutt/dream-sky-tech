"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AnalyticsSolutions() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Section 1: Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Analytics Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Unlock Insights. Drive Smarter Decisions.
            </h2>
            <p className="text-gray-600 mt-4">
              At DreamSkyTech, our analytics solutions transform raw data into 
              meaningful insights. We empower businesses with predictive analytics, 
              dashboards, and AI-driven reporting that improve decision-making, 
              efficiency, and growth. 
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Get a Demo
            </button>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm text-center">
                <span className="block text-blue-600 font-bold text-2xl">📊</span>
                <h4 className="mt-2 font-semibold">Data Visualization</h4>
                <p className="text-sm text-gray-500">
                  Interactive dashboards & reports for real-time decisions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm text-center">
                <span className="block text-blue-600 font-bold text-2xl">🤖</span>
                <h4 className="mt-2 font-semibold">AI & Predictive Models</h4>
                <p className="text-sm text-gray-500">
                  Forecast trends with advanced machine learning insights.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 shadow-sm text-center">
                <span className="block text-blue-600 font-bold text-2xl">🔒</span>
                <h4 className="mt-2 font-semibold">Secure Data</h4>
                <p className="text-sm text-gray-500">
                  End-to-end security for data-driven solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image / Video */}
          <div className="flex justify-center">
            <video
              src="/analytics.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-3xl h-[400px] object-cover"
            />
          </div>
        </section>

        {/* Section 2: Our Analytics Stack */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase text-sm text-blue-600 font-semibold">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Analytics Technologies We Use
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We integrate cutting-edge analytics tools and technologies to provide 
              businesses with accurate and scalable solutions.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">Power BI</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">Tableau</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">Python (Pandas, NumPy)</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">Machine Learning</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">Google Analytics</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">BigQuery</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">AWS / Azure Data</h4>
              </div>
              <div className="p-6 bg-gray-50 shadow rounded-lg">
                <h4 className="font-semibold">ETL Pipelines</h4>
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
                src="/data.jpg"
                alt="Analytics Solutions DreamSkyTech"
                width={900}
                height={800}
                className="shadow-lg rounded-xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase text-sm text-blue-600 font-semibold">
                Why Choose DreamSkyTech
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Transforming Data into Business Growth
              </h2>
              <p className="text-gray-600 mt-4">
                From startups to enterprises, we provide data-driven strategies 
                that fuel success. Our analytics team ensures clarity, accuracy, 
                and performance in every project.
              </p>

              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Business Intelligence</span>
                    <span>95%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Visualization</span>
                    <span>90%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Predictive Analytics</span>
                    <span>85%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Engineering</span>
                    <span>80%</span>
                  </div>
                  <div className="w-100 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[80%]"></div>
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
