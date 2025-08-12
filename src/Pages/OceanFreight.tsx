import img1 from "../assets/OceanBg.jpg";
import img2 from "../assets/special1.jpg";
import img3 from "../assets/special2.jpg";
import img4 from "../assets/special3.jpg";
import FeatureCard from "../Components/FeatureCard";

const OceanFreight = () => {
  const features = [
    {
      title: "FCL (full container)",
      image: img3,
    },
    {
      title: "LCL (part container)",
      image: img4,
    },
    {
      title: "Special Equipments",
      image: img2,
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
            Ocean Freight
          </h1>
          <p
            className="
        text-sm sm:text-base md:text-lg lg:text-xl 
        max-w-2xl mx-auto
      "
          >
            Cost-effective and reliable shipping solutions for large-volume
            cargo across international waters. SwiftTrek ensures safe, timely,
            and efficient ocean transport tailored to your business needs.
          </p>
        </div>
      </section>

      {/* The Ocean Shipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">
            The Ocean Shipment
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
            <p>
              Flexible and scalable sea freight solutions cover your specific
              needs. Our affiliation with leading carriers is the key to our
              cost-effective services. Finding the right solution for your cargo
              is a priority for us as our well-trained employees and agents
              throughout the world work diligently to ensure the best rates for
              your shipment. Whatever the size or type of commodity, or
              destination we will deliver your shipment just in time.
            </p>

            <p>
              Whether Full Container Load (FCL), Less than Container Load (LCL)
              or specialized services such as buyer consolidation we offer the
              most cost effective solution possible. Our intermodal services
              supported by our surface transportation expertise ensure hassle
              free door-to-door deliveries every time.
            </p>
          </div>

          <ul className="space-y-2 text-gray-600 mb-12">
            <li className="flex items-start space-x-2">
              <span className="text-purple-500">•</span>
              <span>FCL (full container)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-500">•</span>
              <span>LCL (part container)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-500">•</span>
              <span>Special Equipments</span>
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
};

export default OceanFreight;
