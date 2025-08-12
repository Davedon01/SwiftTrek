import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HPHX0132__1_-removebg-preview.png";
// import GoogleTranslate from "./GoogleTranslator";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll direction detection
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true); // scrolling up
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false); // scrolling down
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 w-full shadow-md overflow-visible z-[999] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Merton Logistic Services"
              className="h-20 w-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 z-50">
            <Link
              to="/"
              className="text-gray-900 hover:text-merton-red-500 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-merton-red-500 font-medium"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button className="text-gray-900 hover:text-merton-red-500 font-medium flex items-center">
                Services
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-8 w-64 bg-gray-800/70 backdrop-blur-md border border-gray-200 rounded-md shadow-lg z-[1000] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <div className="py-2">
                  {[
                    { label: "Air Shipment", path: "/services/air-freight" },
                    { label: "Ocean Shipment", path: "/services/ocean-freight" },
                    { label: "Road Shipment", path: "/services/road-freight" },
                    { label: "Project Import", path: "/services/project-import" },
                    { label: "Custom Clearance", path: "/services/costom-clearance" },
                    { label: "Shipping Service", path: "/services/shipping-service" },
                    { label: "Destination", path: "/services/destination" },
                  ].map(({ label, path }, index) => (
                    <Link
                      key={index}
                      to={path}
                      className="block px-4 py-2 text-white hover:text-merton-red-500"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/track"
              className="text-gray-900 hover:text-merton-red-500 font-medium"
            >
              Track
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:text-merton-red-500 font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 left-0 h-screen w-64 bg-gray-800/40 backdrop-blur-md transform transition-transform duration-300 ease-in-out border-r border-gray-200 z-50 lg:hidden py-8 px-4 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="font-bold text-white text-xl absolute top-4 right-4"
          >
            &times;
          </button>
          <nav className="mt-10 space-y-4">
            <Link
              to="/"
              className="block font-bold text-white hover:text-merton-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block font-bold text-white hover:text-merton-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              <span className="block font-bold text-white">Services</span>
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/services/air-freight"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Air Shipment
                </Link>
                <Link
                  to="/services/ocean-freight"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ocean Shipment
                </Link>
                <Link
                  to="/services/road-freight"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Road Shipment
                </Link>
                <Link
                  to="/services/project-import"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Project Import
                </Link>
                <Link
                  to="/services/costom-clearance"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Clearance
                </Link>
                <Link
                  to="/services/shipping-service"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shipping Service
                </Link>
                <Link
                  to="/services/destination"
                  className="block font-bold text-white hover:text-merton-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destination
                </Link>
              </div>
            </div>
            <Link
              to="/track"
              className="block font-bold text-white hover:text-merton-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Track
            </Link>
            <Link
              to="/contact"
              className="block font-bold text-white hover:text-merton-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
