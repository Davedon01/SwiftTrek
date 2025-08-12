import React from "react";
import Button from "./Button";


const MiniForm: React.FC = () => {
  // Correct typing for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page refresh
    console.log("Booking page opened");
    // You can add navigation or API calls here
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <form
        onSubmit={handleSubmit} // ✅ Correct type for form submit
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Get an Instant Quote
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="Nigeria"
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Departure City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departure City
            </label>
            <input
              type="text"
              placeholder="France"
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <input
              type="text"
              placeholder="New York"
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Telephone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telephone No.
            </label>
            <input
              type="tel"
              placeholder="+1 (400) 000 0000"
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* What to Ship */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What you want to ship
            </label>
            <input
              type="text"
              placeholder="Electronics, Clothing, Furniture..."
              className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="mt-8">
          <Button
            btnStyle="inline-block w-full bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
            btnText="Submit Request"
            type="submit" // ✅ Important for triggering form submit
          />
        </div>
      </form>
    </div>
  );
};

export default MiniForm;
