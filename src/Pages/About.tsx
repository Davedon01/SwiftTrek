import { Link } from "react-router-dom";
import img1 from "../assets/aboutus.jpg";
import img2 from "../assets/Loader.jpg";
import img3 from "../assets/Loader2.jpg";
import img4 from "../assets/LogisticsNature.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="
    relative 
    h-[50vh] sm:h-[60vh] md:h-[64vh] lg:h-[72vh] 
    px-4 sm:px-6 lg:px-8 
    bg-fixed bg-center bg-cover bg-no-repeat 
    text-white flex items-center
  "
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative w-full text-center z-10">
          <h1
            className="
        bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff]
        bg-clip-text text-transparent 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold mb-4 italic
      "
          >
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-xl font-bold">
            We offer our clients a comprehensive range of International Freight
            Services backed by a global logistics network
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl text-gray-50 mb-2 italic">Who we are</h3>
              <h2 className="text-4xl font-bold mb-6">
                our efficiency speaks!
              </h2>
              <p className="text-lg leading-relaxed">
                Our operations are backed by team of professionals having
                extensive knowledge and experience in global logistics. This
                enables us to handle shipments through air, sea and road
                efficiently.
              </p>
            </div>
            <div>
              <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 italic text-purple-400">
                  What we do
                </h3>
                <p className="text-gray-900 leading-relaxed mb-6">
                  We offers to its clients a comprehensive range of
                  International Freight Services backed by a Citiexpress
                  delivery & logistics network, with Access Control Systems &
                  Products Security & Protection, Advertising Access Control
                  Systems & Products Charcoal Security Services Computer &
                  Information Technology Consulting, wide expertise and
                  resources to support shipping requirements across the world.
                </p>
                <Link
                  to="/about"
                  className="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do with image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={img2}
                alt="What we do"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4 italic">
                What we do
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offers to its clients a comprehensive range of International
                Freight Services backed by a Citiexpress delivery & logistics
                network, with Access Control Systems & Products Security &
                Protection, Advertising Access Control Systems & Products
                Charcoal Security Services Computer & Information Technology
                Consulting, wide expertise and resources to support shipping
                requirements across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We are Safe & Reliable */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-lg text-gray-50 mb-2 italic">
                Why choose us?
              </h3>
              <h2 className="text-4xl font-bold mb-6">
                We are Safe & Reliable
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We provide customized, scalable services to cater to the needs
                of the highly unpredictable market conditions of modern times.
                From complex supply chain solutions to door-to-door freight
                forwarding movements, infinity has the wherewithal to fulfil its
                client's needs.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our operations are backed by team of professionals having
                extensive knowledge and experience in global logistics. This
                enables us to handle shipments through air, sea and road
                efficiently. Our business affiliations worldwide ensure prompt
                Freight forwarding services as desired by the customers.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                We have trained, experienced experts available for our full
                range of services including reefer, out-of-gauge, break-bulk and
                each of our trade services – each operating in tandem with your
                business.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
              >
                Contact Us
              </Link>
            </div>
            <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={img3}
                alt="Safe and reliable"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={img4}
                alt="Bottom section"
                className="rounded-lg shadow-lg w-full h-90"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                We have trained, experienced experts available for our full
                range of services including reefer, out-of-gauge, break-bulk and
                each of our trade services – each operating in tandem with your
                business. This gives us the ability to uphold the personal
                service we're globally recognized
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
