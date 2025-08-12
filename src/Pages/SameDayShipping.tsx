import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import "../styles/flipIcons.css"; // We'll create this CSS
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const SameDayShipping: React.FC = () => {
  const navigateToBooking = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[74vh] bg-fixed bg-center bg-cover bg-no-repeat text-white flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6169041/pexels-photo-6169041.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
            Same-Day Shipping
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-semibold mb-6">
            Get your packages delivered the very same day, fast, secure, and
            reliable.
          </p>
        </div>
      </section>

      {/* Intro Section with image + text */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Speed Meets Reliability
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At SwiftTrek, we understand that time is critical. Our Same-Day
            Shipping service ensures your parcels are picked up and delivered
            within hours. Whether it’s urgent business documents, e-commerce
            orders, or personal gifts, we guarantee speed without compromising
            on safety.
          </p>
          <ul className="space-y-2">
            <li>✔ Guaranteed delivery within hours</li>
            <li>✔ Real-time GPS tracking</li>
            <li>✔ Secure handling with care</li>
          </ul>
        </div>
        <img
          src="https://images.pexels.com/photos/4246104/pexels-photo-4246104.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="SwiftTrek Same-Day Delivery"
          className="rounded-xl shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105"
        />
      </section>

      {/* Features Section with flipping icons */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <h3 className="text-2xl font-semibold mb-10 text-gray-900 text-center">
            Why Choose Our Same-Day Shipping?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <ClockIcon className="h-12 w-12" />,
                title: "Ultra-Fast Delivery",
                text: "Pick-up and drop-off on the same day, saving you valuable time and keeping your commitments.",
                frontColor: "bg-blue-600",
                backColor: "bg-blue-800",
              },
              {
                icon: <TruckIcon className="h-12 w-12" />,
                title: "Nationwide Reach",
                text: "Covering major cities and towns, ensuring your package arrives where it needs to — quickly.",
                frontColor: "bg-green-600",
                backColor: "bg-green-800",
              },
              {
                icon: <CheckCircleIcon className="h-12 w-12" />,
                title: "Reliable & Secure",
                text: "Packages handled with utmost care, backed by real-time tracking and delivery confirmations.",
                frontColor: "bg-yellow-500",
                backColor: "bg-yellow-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:shadow-xl"
              >
                <div className="flip-card mx-auto mb-4">
                  <div className="flip-card-inner">
                    <div
                      className={`flip-card-front flex items-center justify-center ${item.frontColor} text-white rounded-full w-20 h-20`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`flip-card-back flex items-center justify-center ${item.backColor} text-white rounded-full w-20 h-20`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with alternating layouts */}
      <section className="py-16 max-w-6xl mx-auto px-6 md:px-20 space-y-16">
        {[
          {
            step: "Book your pickup online or via our customer service.",
            img: "https://images.pexels.com/photos/3865716/pexels-photo-3865716.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            step: "Our courier picks up your package within the hour.",
            img: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            step: "Real-time tracking keeps you updated every step of the way.",
            img: "https://images.pexels.com/photos/6348127/pexels-photo-6348127.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            step: "Delivery completed the same day, with proof of receipt.",
            img: "https://images.pexels.com/photos/6169039/pexels-photo-6169039.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.img}
              className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105"
            />
            <p className="text-lg md:font-semibold md:text-xl">{item.step}</p> 
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
          <h3 className="text-2xl font-bold mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fast and professional!",
              "Reliable service every time",
              "Made my business more efficient",
            ].map((quote, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="italic">"{quote}"</p>
                <span className="block mt-4 font-bold">— Happy Customer</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center py-16">
        <h3 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
          Need It There Today?
        </h3>
        <p className="max-w-xl mx-auto mb-6">
          Book our Same-Day Shipping now and experience the SwiftTrek
          difference.
        </p>
        <Button
          btnText="Book Now!"
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
          onClick={() => navigateToBooking("/booking-page")}
        />
      </section>
    </div>
  );
};

export default SameDayShipping;
