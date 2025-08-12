// import React from "react";
import custom from "../assets/cutoms&clearance.jpg";
import cargo1 from "../assets/full-container.jpg";
import cargo2 from "../assets/part-container.jpg";
import cargo3 from "../assets/special-cargo.jpg";
import FeatureCard from "../Components/FeatureCard";

function CostomClearance() {
  const features = [
    {
      title: "FCL (full container)",
      image: cargo1,
    },
    {
      title: "LCL (part container)",
      image: cargo2,
    },
    {
      title: "Special Equipments",
      image: cargo3,
    },
  ];
  return (
    <div>
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
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <span
            className="
        bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff]
        bg-clip-text text-transparent
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold mb-5 italic block
      "
          >
            Custom Clearance
          </span>
          <p
            className="
        text-sm sm:text-base md:text-lg lg:text-xl
        text-white mt-5 max-w-2xl mx-auto
      "
          >
            SwiftTrek offers comprehensive custom clearance services to ensure
            your shipments clear customs smoothly and efficiently.
          </p>
        </div>
      </section>

      {/* Custom Clearance Section  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 bg-clip-text text-transparent text-3xl font-bold mb-8">
            Our Custom Clearance Services
          </span>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
            <p>
              SwiftTrek offers flexible and scalable customs clearance solutions
              tailored to your specific shipping needs. Our strong partnerships
              with trusted global carriers and regulatory agencies allow us to
              deliver cost-effective, fully compliant services across all
              borders. From documentation and duty payments to inspections and
              permits, our experienced team ensures your cargo moves swiftly and
              smoothly—no matter the size, destination, or commodity. With
              SwiftTrek, delays and bottlenecks are a thing of the past—your
              shipment arrives exactly where and when it’s needed.
            </p>

            <p>
              Whether it's Full Container Load (FCL), Less than Container Load
              (LCL), or specialized solutions like buyer consolidation,
              SwiftTrek delivers cost-effective freight options tailored to your
              needs. Our seamless intermodal capabilities, backed by strong
              surface transport expertise, ensure smooth, door-to-door
              delivery—on time and without complications. We don’t just move
              cargo—we move it smarter.
            </p>
          </div>

          <ul className="space-y-4 text-gray-700 mb-12">
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 mt-1">✓</span>
              <div>
                <p className="font-semibold">Full Container Load (FCL)</p>
                <p className="text-sm text-gray-600">
                  Ideal for high-volume shipments with complete container
                  control and security.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 mt-1">✓</span>
              <div>
                <p className="font-semibold">Less Than Container Load (LCL)</p>
                <p className="text-sm text-gray-600">
                  Flexible and budget-friendly option for smaller cargo
                  requiring shared space.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 mt-1">✓</span>
              <div>
                <p className="font-semibold">Special Equipment Handling</p>
                <p className="text-sm text-gray-600">
                  Tailored transport solutions for oversized, sensitive, or
                  unconventional cargo.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                image={feature.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CostomClearance;
