import Slider from "react-slick";
// import bg1 from "../assets/cargoBg2.jpg";
import bg2 from "../assets/replaceBg2.jpg";
// import bg3 from "../assets/re.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const slides = [
    {
      // image: bg1,
      heading: "SwiftTrek Logistics",
      text: "Experience seamless, end-to-end logistics tailored to your business. Your cargo, our priority — delivered with precision and care.",
      buttonText: "Book Now!",
      buttonLink: "/booking-page",
    },
    {
      // image: bg2,
      heading: "Smart, Secure Warehousing",
      text: "Your goods deserve the best. Benefit from cutting-edge storage solutions built to safeguard, streamline, and scale your inventory.",
      buttonText: "Track Consignment",
      buttonLink: "/track",
    },
    {
      // image: bg3,
      heading: "Global Reach. Local Expertise.",
      text: "Navigate the world of logistics with confidence. We combine international capabilities with on-ground knowledge for unmatched efficiency.",
      buttonText: "Get a Quote",
      buttonLink: "/contact",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
   <section
  className="relative bg-center bg-no-repeat bg-cover h-screen text-white overflow-hidden"
  style={{ backgroundImage: `url(${bg2})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20 bg-opacity-50 z-10"></div>

  {/* Slider */}
  <div className="relative z-20 h-full flex items-center justify-center">
    <div className="w-full max-w-5xl px-6">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="h-screen flex flex-col items-center justify-center text-center">
              <h1 className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-4xl md:text-6xl font-extrabold mb-4">
                {slide.heading}
              </h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
                {slide.text}
              </p>
                <a
                  href={slide.buttonLink}
                  className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-glow-shadow"
                >
                  {slide.buttonText}
                </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

  );
};

export default HeroCarousel;
