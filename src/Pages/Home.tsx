import { Link } from "react-router-dom";
import HeroCarousel from "../Components/HeroCarousel";
import air from "../assets/Aircargo.jpg";
import road from "../assets/Roadcargo.jpg";
import ocean from "../assets/Shipcargo.jpg";
import shipping from "../assets/Shipinocean.jpg";
import logistics from "../assets/logistics.jpg";
import enviroment from "../assets/Logistics-enviroment.jpg";
import Card from "../Components/Card";
import HeroLogistics from "../Components/HeroLogistics";
import GoogleTranslate from "../Components/GoogleTranslator";
// import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const shipmentData = [
    {
      image: air,
      title: "Air Shipment",
      description: "We can provide with the comprehensive service",
    },
    {
      image: road,
      title: "Road Shipment",
      description: "We provide a wide range of transportation services",
    },
    {
      image: ocean,
      title: "Ocean Shipment",
      description: "We can provide with the comprehensive service.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen w-full">
        {/* Block 1 */}
        <HeroCarousel />
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We don’t just move cargo — we move businesses forward. At
              SwiftTrek Logistics, we combine proven expertise with
              forward-thinking innovation to meet the evolving demands of
              today’s global supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shipmentData.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our International Logistics */}
      <section>
        <HeroLogistics />
      </section>

      {/* About Merton Logistic Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About SwiftTrek Logistic Services
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                We are proud of our workforce and have worked hard.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We have trained, experienced experts available for our full
                range of services including reefer, out-of-gauge, break-bulk and
                each of our trade services – each operating in tandem with your
                business. This gives us the ability to uphold the personal
                service we're globally recognized
              </p>
              <Link
                to="/about"
                className="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
              >
                Learn More
              </Link>
            </div>
            <div className="shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={shipping}
                alt="Warehouse worker"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={logistics}
                alt="Logistics capabilities"
                className="rounded-lg shadow-lg w-full h-90"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Capabilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We tirelessly troubleshoot to eliminate choke points, prevent
                stock depletion, streamline unnecessary redundancies, and make
                delays a thing of the past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to design, build and implement innovative,
                profitable and sustainable products and services that help our
                customers meet consumer and industrial demands globally and
                irrespective of fulfillment channels.
              </p>
            </div>
            <div className="shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={enviroment}
                alt="Mission delivery"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Do You Need a Consultation? */}
      <section
        className="py-20 bg-fixed bg-center bg-cover bg-no-repeat text-white"
        style={{ backgroundImage: `url(${enviroment})` }}
      >
        {/* <div className="absolute inset-0 opacity-30">
          <img
            src={enviroment}
            alt="Consultation background"
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Do You Need a Consultation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            SwiftTrek Logistic Services can give you lots of advantages, from
            which you will surely benefit.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
          >
            Contact Us Now!
          </Link>
        </div>
      </section>
      <GoogleTranslate />
    </div>
  );
};

export default Home;
