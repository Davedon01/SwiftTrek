// import React from "react";
import custom from "../assets/ServiceBg.jpg";
import { Link, useNavigate } from "react-router-dom";
import MiniForm from "../Components/MiniForm";
import Button from "../Components/Button";

function ShippingService() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const handleBookNow = () => {
    navigate("/booking-page");
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="
    relative 
    h-[50vh] sm:h-[56vh] md:h-[64vh] lg:h-[72vh] 
    px-4 sm:px-6 lg:px-8 
    bg-center bg-cover bg-no-repeat text-white 
    flex items-center justify-center
    bg-scroll md:bg-fixed
  "
        style={{ backgroundImage: `url(${custom})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1
            className="
        bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff]
        bg-clip-text text-transparent
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl
        font-bold mb-3 mt-20
      "
          >
            Fast, Reliable Shipping — Anywhere, Anytime
          </h1>
          <p
            className="
        text-sm sm:text-base md:text-lg lg:text-xl
        max-w-2xl mx-auto mb-6
      "
          >
            From express delivery to bulk freight, SwiftTrek ensures your goods
            arrive on time, every time.
          </p>
          <Button
            btnText="Get a Quote"
            btnStyle="
        inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800
        text-white px-6 sm:px-10 lg:px-14 py-2 sm:py-3 
        font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow
      "
            onClick={handleClick}
          />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Shipping Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Express Delivery",
                desc: "Fast door-to-door shipping for urgent packages.",
                path: "/express-delivery",
              },
              {
                title: "International Freight",
                desc: "Ship worldwide with customs clearance handled.",
                path: "/international-freight",
              },
              {
                title: "E-commerce Shipping",
                desc: "Seamless solutions for online store deliveries.",
                path: "/ecommerce-shipping",
              },
              {
                title: "Same-Day Shipping",
                desc: "Get your packages delivered on the same day.",
                path: "/same-day-shipping",
              },
              {
                title: "Bulk & Heavy Goods",
                desc: "Safe transport for oversized or heavy shipments.",
                path: "/bulk-heavy-goods",
              },
              {
                title: "Secure & Insured",
                desc: "Full protection for fragile and valuable goods.",
                path: "/secure-insured",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition"
              >
                <Link to={service.path}>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800 hover:underline">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "Book Your Shipment" },
              { step: "We Pick It Up" },
              { step: "Track in Real-Time" },
              { step: "Delivered Safely" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <span className="text-blue-800 font-bold text-4xl mb-4 block">
                  {idx + 1}
                </span>
                <p className="text-lg font-medium">{item.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 bg-clip-text text-transparent text-4xl font-bold text-center mb-8">
            Request a SwiftTrek Shipping Quote
          </h2>
          <MiniForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does shipping take?",
                a: "Delivery times vary depending on the service type and destination, but we always strive for the fastest turnaround.",
              },
              {
                q: "Do you handle fragile goods?",
                a: "Yes, we provide specialized packaging and handling for fragile and high-value items.",
              },
              {
                q: "Can I track my shipment?",
                a: "Absolutely! Our real-time tracking system keeps you updated every step of the way.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center">
        <h2 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-bold mb-5 italic">
          Ready to Ship with SwiftTrek?
        </h2>
        <Button
          btnText="Book Now"
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
          onClick={handleBookNow}
        />
      </section>
    </div>
  );
}
export default ShippingService;
