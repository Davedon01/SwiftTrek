// import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function EcommerceShipping() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[64vh] p-30 bg-fixed bg-center bg-cover bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4246102/pexels-photo-4246102.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-bold mb-5">
            E-commerce Shipping Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Streamlined, affordable, and reliable shipping tailored for online
            businesses — so you can focus on growth while we handle delivery.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">
          Shipping Made Easy for Online Stores
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Running an e-commerce business means juggling inventory, customers,
          and marketing. Let SwiftTrek take shipping off your plate. Our
          e-commerce shipping services integrate seamlessly with your store,
          providing your customers with fast, trackable, and affordable
          deliveries — every time.
        </p>
      </section>

      {/* Service Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Why E-commerce Stores Choose SwiftTrek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Platform Integration",
                desc: "Connect directly to Shopify, WooCommerce, Magento, and more.",
                img: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "Fast & Affordable",
                desc: "Competitive rates with express, same-day, and next-day options.",
                img: "https://images.pexels.com/photos/4246112/pexels-photo-4246112.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "Real-Time Tracking",
                desc: "Give your customers peace of mind with accurate shipment updates.",
                img: "https://images.pexels.com/photos/6169025/pexels-photo-6169025.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          How Our E-commerce Shipping Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            "Integrate Your Store",
            "Customer Places an Order",
            "SwiftTrek Handles Fulfillment",
            "Package Delivered & Tracked",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <span className="text-blue-800 text-4xl font-bold block mb-4">
                {idx + 1}
              </span>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="E-commerce Shipping"
            className="rounded-xl shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105"
          />
          <div>
            <h2 className="text-3xl text-blue-800 font-bold mb-6">
              Benefits for Your Online Store
            </h2>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Seamless store integration with automated label printing.</li>
              <li>Flexible shipping options for every customer’s needs.</li>
              <li>Bulk shipping discounts for high-volume sellers.</li>
              <li>Dedicated account managers for personalized support.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center py-16">
        <h2 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
          Upgrade Your Store’s Shipping Experience
        </h2>
        <p className="text-gray-300 mb-6">
          Join thousands of e-commerce sellers who trust SwiftTrek to deliver
          on time, every time.
        </p>
        <Button
        btnText="Book Now!"
        btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
        onClick={() => navigate('/booking-page')} 
        />
      </section>
    </div>
  );
}
