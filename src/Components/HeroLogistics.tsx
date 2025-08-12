// src/components/HeroLogistics.tsx
import React from "react";
import cargo from "../assets/cargoLoading1.jpg"; // adjust path based on your project

const HeroLogistics = () => {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${cargo})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our International Logistics</h2>
          <p className="text-xl text-gray-300">We Have Many Expedition For Flexible Choice</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1, 2].map((column) => (
            <div className="space-y-4" key={column}>
              {["Trucking Expedition", "Ship Expedition", "Airplane Expedition"].map((label) => (
                <div className="flex items-center space-x-3" key={label}>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Packing & Storage */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">PACKING & STORAGE</h3>
          <p className="text-xl mb-6">Precision-Crafted Solutions for Every Shipment</p>
          <ul className="space-y-2">
            {[
              "At SwiftTrek Logistic Services, we deliver more than logistics — we deliver confidence.",
              "Our packing and storage solutions are engineered to protect, preserve, and perform.",
              "Whether local or global, every item is handled with industry expertise and care.",
              "Customized to your business needs — because your cargo deserves more than one-size-fits-all.",
            ].map((text, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-yellow-400">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroLogistics;
