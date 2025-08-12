import { useState } from "react";
import custom from "../assets/contact-us.jpg";
import img from "../assets/Customer-service.jpg";
import Button from "../Components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[64vh] flex items-center justify-center bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage: `url(${custom})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content  */}
        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
            Have questions or need assistance? Our team is here to help you with
            all your shipping needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-8">
                CONTACT INFORMATION
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    SWIFTTREK LOGISTIC SERVICES
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>ADDRESS:</strong> 101-105 Shelton Street, London
                      WC9H 4JQ
                    </p>
                    <p>
                      <strong>TEL:</strong> +447146417187
                    </p>
                    <p>United Kingdom</p>
                    <p>
                      <strong>WHATSAPP:</strong> +44 7423 156007
                    </p>
                    <p>
                      <strong>Email:</strong> info@mertonlogisticservices.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105 mt-12">
                <img
                  src={img}
                  alt="Contact illustration"
                  className="rounded-lg shadow-lg w-full h-[70vh] object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-8">
                Let's Talk And Find Your Solution
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Phone"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Message"
                  />
                </div>

                <Button
                  btnText="Send Message"
                  btnStyle="w-full inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-4 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
