// import React from "react";
import custom from "../assets/International-freight.jpg";
import img from "../assets/Global-net.jpg";
import img2 from "../assets/Custom-exp.jpg";
import img3 from "../assets/Flexible-mode.jpg";
import {
  FaGlobe,
  FaShip,
  FaPlane,
  FaTruck,
  FaStar,
  FaUserShield,
} from "react-icons/fa";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function InternationalFreight() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[64vh] p-30 bg-fixed bg-center bg-cover bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${custom})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 text-center animate-fadeIn">
          <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-5xl font-extrabold mb-5">
            International Freight Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            Seamless global shipping — connecting continents with speed,
            security, and full customs support for your cargo.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Your Gateway to Global Trade
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          At <span className="font-semibold text-blue-700">SwiftTrek</span>, we
          make moving goods across borders effortless. Whether by air, sea, or
          multi-modal transport, we ensure your shipment arrives on time, every
          time. From small parcels to oversized cargo, we manage pickup,
          documentation, customs, and final delivery — with transparency at
          every stage.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose SwiftTrek International Freight?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Global Network",
                desc: "Partnered with trusted carriers worldwide for fast, secure, and cost-effective deliveries.",
                img: img,
                icon: <FaGlobe className="text-4xl text-white" />,
              },
              {
                title: "Customs Expertise",
                desc: "Full documentation and customs clearance handled, ensuring zero delays.",
                img: img2,
                icon: <FaUserShield className="text-4xl text-white" />,
              },
              {
                title: "Flexible Modes",
                desc: "Air, sea, or multimodal transport options to match your budget and schedule.",
                img: img3,
                icon: <FaShip className="text-4xl text-white" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-5 left-5 bg-blue-600 p-3 rounded-full shadow-lg transform group-hover:-rotate-45 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { step: "Request a Quote", icon: <FaStar className="text-3xl" /> },
            {
              step: "Choose Your Mode",
              icon: <FaPlane className="text-3xl" />,
            },
            {
              step: "Customs & Docs",
              icon: <FaUserShield className="text-3xl" />,
            },
            {
              step: "Safe Worldwide Delivery",
              icon: <FaTruck className="text-3xl" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              {/* Flip effect */}
              <div className="flip-container mb-3">
                <div className="flip-inner">
                  <div className="flip-front">{item.icon}</div>
                  <div className="flip-back">{item.icon}</div>
                </div>
              </div>
              <span className="text-lg font-medium">{item.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "SwiftTrek made our cross-border shipping stress-free. Highly recommended!",
                name: "David L.",
              },
              {
                quote:
                  "The team handled customs and paperwork like pros. Flawless experience.",
                name: "Maria K.",
              },
              {
                quote:
                  "From booking to delivery, everything was transparent and on time.",
                name: "Ahmed S.",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                <h4 className="font-bold text-blue-700">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center py-16">
        <h2 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
          Ship Across Borders with Confidence
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let SwiftTrek handle your global logistics — with efficiency,
          precision, and complete peace of mind.
        </p>
        <Button
          btnText="Book Now!"
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
          onClick={() => navigate("/booking-page")}
        />
      </section>
    </div>
  );
}
