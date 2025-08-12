import { Link } from "react-router-dom";
import img1 from "../assets/Roadbg.jpg";
import img2 from "../assets/Road1.jpg";
import img3 from "../assets/Road2.jpg";
import img4 from "../assets/Road3.jpg";
import FeatureCard from "../Components/FeatureCard";

const RoadFreight = () => {
  const features = [
    {
      title: "Reliable",
      image: img2,
    },
    {
      title: "Efficient",
      image: img3,
    },
    {
      title: "Safe",
      image: img4,
    },
  ];
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
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1
            className="
        bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff]
        bg-clip-text text-transparent
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold mb-5 italic
      "
          >
            Road Freight
          </h1>
          <p
            className="
        text-sm sm:text-base md:text-lg lg:text-xl
        max-w-2xl mx-auto
      "
          >
            Comprehensive ground logistics solutions leveraging a robust fleet
            and optimized routing systems. SwiftTrek ensures secure,
            time-definite delivery for full truckload (FTL) and
            less-than-truckload (LTL) shipments across regional and national
            networks.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="bg-gradient-to-br from-[#4aa8ff] via-[#7a5cff] to-[#a74fff] bg-clip-text text-transparent text-5xl font-bold mb-5 italic">
                We offer our clients a comprehensive range of International
                Shipment Services backed by a global logistics network
              </h2>

              <Link
                to="/about"
                className="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
              >
                ABOUT US
              </Link>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                From arranging suitable vehicles according to the shape and size
                of cargo to ensuring safe delivery at destination we transport
                your goods safely every time. We also cater to all your
                transportation needs, providing you door-to-door transportation
                services. We offer effective consolidations solution that also
                provides greater flexibility,
              </p>

              <p>
                Whether your shipment requires full storage capacity of a
                vehicle or only a part of it, whether you need a truck or a
                trailer for any type of goods, on any domestic or international
                routes, We offers you a variety of services on the highest
                professional level. Our in-depth knowledge of Indian
                subcontinent and international markets and routes enables us to
                provide you with the reassurance that your goods are in safe
                hands at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
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
};

export default RoadFreight;
