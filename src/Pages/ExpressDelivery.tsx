import React, { useState, useEffect, useRef } from "react";
import FeatureCard from "../Components/FeatureCard";
import img1 from "../assets/expressBg.jpg";
import img2 from "../assets/express.jpg";
import img3 from "../assets/express2.jpg";
import img4 from "../assets/express3.jpg";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

interface CounterItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: CounterItem[] = [
  { label: "Parcels Delivered", value: 1500, suffix: "+" },
  { label: "Happy Clients", value: 980, suffix: "+" },
  { label: "Shipping Partners", value: 120, suffix: "+" },
  { label: "Countries Covered", value: 45, suffix: "+" },
];

const benefits = [
  { icon: "⚡", text: "Fast and Reliable" },
  { icon: "📦", text: "Safe Packaging" },
  { icon: "🌍", text: "Wide Coverage" },
  { icon: "📲", text: "Easy Tracking" },
];

const features = [
  { title: "Same-Day Delivery", image: img1 },
  { title: "Real-Time Tracking", image: img3 },
  { title: "Secure Handling", image: img4 },
];

const ExpressDeliveryPage: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);

  // Animate counter values
  const animateValue = (start: number, end: number, index: number, duration: number) => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = value;
        return newCounts;
      });
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // Start animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              animateValue(0, stat.value, index, 2000);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Button click handler
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section
        className="relative h-[64vh] flex items-center justify-center bg-fixed bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-5xl mx-auto px-4 text-center animate-fadeIn">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">Express Delivery</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Fast, reliable, and always on time. Our Express Delivery service gets your packages where they need to be — urgently and safely.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Express Delivery?</h2>
          <p className="text-gray-700 leading-relaxed">
            Perfect for urgent shipments, our express service ensures same-day or next-day delivery across multiple regions. Our network of professional couriers guarantees your package arrives intact and on time.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">How It Works</h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>Book your shipment online or through our app.</li>
            <li>We pick up from your location within hours.</li>
            <li>Track your package in real-time until it arrives.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Coverage</h2>
          <p className="text-gray-700">
            Available in major cities and towns, with expanding routes every month.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Value-Added Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <p className="font-medium text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} image={feature.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Count-Up */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">
                {counts[i]}
                {stat.suffix}
              </h3>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">What Our Clients Say</h2>
          <blockquote className="italic text-gray-700 max-w-3xl mx-auto">
            "The fastest and most reliable delivery service we've ever used. Our business operations run smoother because of their commitment to speed and safety."
          </blockquote>
          <p className="mt-4 font-semibold text-gray-900">— Sarah Johnson, CEO of FreshMart</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white py-12 text-center">
        <h2 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-bold mb-5 px-4 italic">
          Need It Delivered Today?
        </h2>
        <Button
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
          btnText="Book Now!"
          onClick={() => navigate("/booking-page")}
        />
      </section>
    </div>
  );
};

export default ExpressDeliveryPage;
