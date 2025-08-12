import { Link } from "react-router-dom";
import img1 from "../assets/FooterBg.jpg";

const Footer = () => {
  return (
    <footer
      className="relative h-auto bg-fixed bg-center bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Solid Overlay */}
      <div className="absolute inset-0 bg-[#0a1f44]/80 bg-opacity-95 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-700 p-3 rounded">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-purple-200 text-sm">Email</p>
                <a
                  href="mailto:info@mertonlogisticservices.com"
                  className="text-white hover:text-purple-200 transition"
                >
                  info@mertonlogisticservices.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Air Shipment", path: "/services/air-freight" },
                { label: "Ocean Shipment", path: "/services/ocean-freight" },
                { label: "Road Shipment", path: "/services/road-freight" },
                { label: "Project Import", path: "/services/project-import" },
                { label: "Custom Clearance", path: "/services/costom-clearance" },
                { label: "Shipping Service", path: "/services/shipping-service" },
                { label: "Destination", path: "/services/destination" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-white hover:text-purple-200 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Track Consignment", "/track"],
                ["Contact Us", "/contact"],
              ].map(([name, path]) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-white hover:text-purple-200 transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-purple-400 pt-6 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} SwiftTrek Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
