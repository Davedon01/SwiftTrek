import React from "react";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  TruckIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const SecureAndInsured = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[64vh] bg-fixed bg-center bg-cover bg-no-repeat text-white flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4484077/pexels-photo-4484077.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
            Secure & Insured Shipping
          </h1>
          <p className="text-lg md:text-xl">
            Your goods are protected with top-tier security measures and full
            insurance coverage.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Why Choose Our Secure & Insured Service?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At SwiftTrek, we understand that the safety of your shipments is your
          top priority. That’s why we offer a dedicated Secure & Insured
          shipping option — combining advanced security protocols with
          comprehensive insurance to ensure peace of mind from pickup to
          delivery.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Full Insurance",
              desc: "Comprehensive coverage for all shipments, protecting against loss or damage.",
            },
            {
              icon: LockClosedIcon,
              title: "Advanced Security",
              desc: "State-of-the-art tracking and secure handling at every stage of transit.",
            },
            {
              icon: DocumentTextIcon,
              title: "Transparent Documentation",
              desc: "Detailed shipment records and insurance paperwork for full accountability.",
            },
            {
              icon: CurrencyDollarIcon,
              title: "Value Protection",
              desc: "Tailored insurance options for high-value and sensitive goods.",
            },
          ].map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition group"
            >
              <Icon className="h-12 w-12 text-blue-600 mb-4 transition-transform duration-500 group-hover:rotate-y-180 group-hover:text-blue-800" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TruckIcon,
                title: "Step 1: Secure Pickup",
                desc: "Our trained personnel collect your goods with safety protocols in place.",
              },
              {
                icon: ClipboardDocumentCheckIcon,
                title: "Step 2: Protected Transit",
                desc: "Your shipment is tracked in real-time and stored in secure facilities.",
              },
              {
                icon: CheckBadgeIcon,
                title: "Step 3: Verified Delivery",
                desc: "We ensure the recipient receives the goods in perfect condition.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition group"
              >
                <Icon className="h-12 w-12 text-blue-600 mb-4 transition-transform duration-500 group-hover:rotate-y-180 group-hover:text-blue-800" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            Trusted by Thousands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                text: "SwiftTrek handled my fragile shipment with incredible care. The insurance process was smooth and transparent.",
              },
              {
                name: "James K.",
                text: "I ship high-value electronics regularly — knowing they’re insured and monitored makes a huge difference.",
              },
              {
                name: "Amara L.",
                text: "From pickup to delivery, I could see my package’s journey. It arrived exactly on time, damage-free.",
              },
            ].map(({ name, text }, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-600 mb-4">“{text}”</p>
                <p className="text-gray-800 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What items are covered under insurance?",
                a: "We cover most categories, including electronics, furniture, documents, and high-value goods. Certain restricted items may not be covered.",
              },
              {
                q: "How do I file a claim?",
                a: "Simply contact our claims department within 48 hours of delivery and provide the shipment documentation and photos.",
              },
              {
                q: "Does insurance cover international shipments?",
                a: "Yes — our coverage extends to both domestic and international shipments.",
              },
            ].map(({ q, a }, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg text-gray-800">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center py-16">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <h2 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">Ship with Confidence</h2>
          <p className="mb-6 text-lg">
            Let us handle your shipments with the highest level of care,
            protection, and transparency.
          </p>
          <Button 
          btnText="Book Now!"
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
          onClick={() => navigate('/booking-page')}
          />
        </div>
      </section>
    </div>
  );
};

export default SecureAndInsured;
