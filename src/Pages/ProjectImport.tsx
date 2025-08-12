import img from "../assets/ProjectImport.jpg";
import img1 from "../assets/logistics-Loading.jpg";

const ProjectImport = () => {
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
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1
            className="
        bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff]
        bg-clip-text text-transparent
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold mb-5 italic
      "
          >
            Project Import
          </h1>
          <p
            className="
        text-sm sm:text-base md:text-lg lg:text-xl
        max-w-2xl mx-auto
      "
          >
            Tailored logistics solutions for oversized or complex cargo.
            SwiftTrek manages end-to-end project imports with precision
            planning, regulatory compliance, and specialized handling equipment.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specialized Project Import Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide comprehensive project import solutions tailored to
                your specific requirements. Our experienced team handles complex
                logistics challenges with precision and efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From planning to execution, we ensure seamless coordination of
                all project components, delivering exceptional results that meet
                your timeline and budget requirements.
              </p>
            </div>
            <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
              <img
                src={img1}
                alt="Project Import Services"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Project Import Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl text-blue-600 mb-4">🚢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                International Shipping
              </h3>
              <p className="text-gray-600">
                Comprehensive shipping solutions for project cargo across
                international borders with full compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl text-green-600 mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Documentation
              </h3>
              <p className="text-gray-600">
                Complete handling of all import documentation, permits, and
                regulatory compliance requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl text-orange-600 mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Express Delivery
              </h3>
              <p className="text-gray-600">
                Fast-track project imports with expedited processing and
                priority handling for urgent requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectImport;
