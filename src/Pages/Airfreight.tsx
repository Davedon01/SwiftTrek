import img1 from "../assets/Air-cargo.jpg";
import FeatureCard from "../Components/FeatureCard";
import air1 from "../assets/Air1.jpg";
import air2 from "../assets/Air2.jpg";
import air3 from "../assets/Air3.jpg";

const AirFreight = () => {
  const features = [
    {
      title: "Reliable",
      image: air1,
    },
    {
      title: "Efficient",
      image: air2,
    },
    {
      title: "Safe",
      image: air3,
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
    bg-center bg-cover bg-no-repeat 
    text-white
    flex items-center justify-center
    bg-fixe md:bg-fixed bg-scroll
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
            Air Freight
          </h1>
          <p className="text-base sm:text-xl md:text-xl font-bold max-w-2xl mx-auto">
            SwiftTrek offers comprehensive air freight services tailored to your
            needs.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">Overview</h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Our air shipment staff attaches great importance to customizing
              the booking process for our customers. That's why we strive to
              find the air freight solution that best suits your needs. We'll
              ask you when the freight is available, what the required delivery
              date is, and if there's potential to save on time or cost. Your
              answers to these and other questions help us decide if you should
              book the air freight as direct. We'll also see if our sea-air
              service is a better solution for you.
            </p>

            <p>
              We have more than twenty years of experience. During that time,
              we've become expert in freight transportation by air and all its
              related services. We work closely with all major airlines around
              the world. Ongoing negotiations ensure that we always have the
              cargo space we need and the ability to offer you competitive rates
              – even during the high season.
            </p>

            <p>
              Where possible, we'll erect and dismantle Unit Load Devices
              (ULDs), reducing significantly the risk of damage to your shipment
              and saving you time and expense. We can do this because many of
              our freight stations have their own ground transportation at or
              around the airport.
            </p>
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

export default AirFreight;
