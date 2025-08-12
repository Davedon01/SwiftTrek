// import React from "react";
import {
  TruckIcon,
  CubeIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import "../styles/flipIcons.css"; // CSS file for flip animation
import custom from '../assets/Bulk-Container.jpg'; // Background image for hero section
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";


const BulkHeavyGoods = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TruckIcon className="icon-front text-blue-600" />,
      backIcon: <TruckIcon className="icon-back text-purple-600" />,
      title: "Specialized Vehicles",
      desc: "Flatbeds, cranes, and reinforced trailers to handle the toughest loads.",
    },
    {
      icon: <CubeIcon className="icon-front text-blue-600" />,
      backIcon: <CubeIcon className="icon-back text-purple-600" />,
      title: "Safe Handling",
      desc: "Expert techniques to prevent damage at every stage.",
    },
    {
      icon: <ShieldCheckIcon className="icon-front text-blue-600" />,
      backIcon: <ShieldCheckIcon className="icon-back text-purple-600" />,
      title: "Insured Protection",
      desc: "Comprehensive cargo insurance for peace of mind.",
    },
    {
      icon: <ClockIcon className="icon-front text-blue-600" />,
      backIcon: <ClockIcon className="icon-back text-purple-600" />,
      title: "On-Time Delivery",
      desc: "Advanced tracking & scheduling to meet deadlines.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[64vh] flex items-center justify-center bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage:
            `url(${custom})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-0"></div>

        {/* Content  */}
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
            Bulk & Heavy Goods Shipping
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
            Reliable, secure, and efficient transportation for oversized,
            heavy-duty shipments — across town or across borders.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative max-w-7xl mx-auto py-16 px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Moving the Impossible, Made Simple
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          At <span className="font-semibold text-blue-600">SwiftTrek</span>, we
          understand the complexities involved in moving oversized and heavy
          goods. Whether it’s industrial machinery, construction materials, or
          large-scale commercial items, our team is equipped with the right
          vehicles, tools, and expertise to ensure your shipment arrives safely
          and on time.
        </p>
      </section>

      {/* Features Section with Flip Animation */}
      <section className="bg-gray-50 py-16 relative">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="flip-icon w-full max-w-xs bg-white shadow-lg rounded-xl p-6 text-center relative"
        >
          <div className="flip-card-inner relativ w-full h-full">
            {/* Front */}
            <div className="flip-icon-fron flex flex-col items-center justify-center h-ful">
              <div className="h-12 w-14 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>

            {/* Back */}
            <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl">
              <div className="h-12 w-12 mb-4 text-white">{f.backIcon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-white">{f.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Section (separated visually) */}
      <section className="relative bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">
            Why Choose SwiftTrek?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Global Network of Partners",
              "24/7 Customer Support",
              "Eco-Friendly Fleet",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-transform"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center py-16">
        <h2 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">Need to Ship Something Big?</h2>
        <p className="mb-6">
          Let SwiftTrek handle your bulk and heavy goods with unmatched
          efficiency and safety.
        </p>
        <Button
          btnText="Book Now!"
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
          onClick={() => navigate('/booking-page')}
        />
      </section>
    </div>
  );
};

export default BulkHeavyGoods;
