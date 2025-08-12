import React, { useState } from "react";
// Assuming these are locally available and you'll update the paths
import custom from '../assets/Booking.jpg'
import Button from "../Components/Button";
import MiniForm from "../Components/MiniForm";
import { useNavigate } from "react-router-dom";

interface FormData {
  // Sender
  senderFirstName: string;
  senderLastName: string;
  senderPhone: string;
  senderEmail: string;
  senderAddress1: string;
  senderAddress2: string;
  senderCity: string;
  senderState: string;
  senderPostalCode: string;
  senderCountry: string;

  // Receiver
  receiverFirstName: string;
  receiverLastName: string;
  receiverPhone: string;
  receiverEmail: string;
  receiverAddress1: string;
  receiverAddress2: string;
  receiverCity: string;
  receiverState: string;
  receiverPostalCode: string;
  receiverCountry: string;

  // Shipment
  packageType: string;
  packageWeight: string;
  instructions: string;
}

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    senderFirstName: "",
    senderLastName: "",
    senderPhone: "",
    senderEmail: "",
    senderAddress1: "",
    senderAddress2: "",
    senderCity: "",
    senderState: "",
    senderPostalCode: "",
    senderCountry: "",
    receiverFirstName: "",
    receiverLastName: "",
    receiverPhone: "",
    receiverEmail: "",
    receiverAddress1: "",
    receiverAddress2: "",
    receiverCity: "",
    receiverState: "",
    receiverPostalCode: "",
    receiverCountry: "",
    packageType: "",
    packageWeight: "",
    instructions: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const navigateToContact = useNavigate();

  return (
    <section className="bg-white text-gray-800">
        {/* Hero Section */}
      <section
        className="relative h-[64vh] bg-fixed bg-center bg-cover bg-no-repeat text-white flex items-center"
        style={{
          backgroundImage: `url(${custom})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5 md:text-6xl">
            Book Your Shipment
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Fill out the form below to get started with your booking. Our team
            will handle the rest!
          </p>
        </div>
      </section>

        {/* Booking Form Section - Now uses flex-col for small screens and flex-row for large screens */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:gap-6 lg:mb-8 lg:mt-10">
            {/* MiniForm - Now visible on all screens, stacks on small screens */}
            <div className="flex-[1] lg:w-1/4 mb-4 lg:mb-0">
                <MiniForm />
            </div>

            {/* Main Form - Takes full width on small screens and a fractional width on large screens */}
            <div className="w-full lg:w-3/4 max-w-3xl mx-auto lg:mx-0 bg-white p-8 rounded-xl shadow-lg">
        {/* Progress */}
      <div className="flex justify-between mb-8">
        {["Sender Info", "Receiver Info", "Shipment Details"].map(
          (label, index) => (
            <div
              key={index}
              className={`flex-1 text-center font-semibold ${
                currentStep === index + 1 ? "text-blue-800" : "text-gray-400"
              }`}
            >
              {label}
            </div>
          )
        )}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Sender */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Sender Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input
    type="text"
    name="senderFirstName"
    placeholder="First Name"
    value={formData.senderFirstName}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="text"
    name="senderLastName"
    placeholder="Last Name"
    value={formData.senderLastName}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="tel"
    name="senderPhone"
    placeholder="Phone Number"
    value={formData.senderPhone}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="email"
    name="senderEmail"
    placeholder="Email"
    value={formData.senderEmail}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="text"
    name="senderAddress1"
    placeholder="Address Line 1"
    value={formData.senderAddress1}
    onChange={handleChange}
    className="border p-3 rounded md:col-span-2"
  />
  <input
    type="text"
    name="senderAddress2"
    placeholder="Address Line 2"
    value={formData.senderAddress2}
    onChange={handleChange}
    className="border p-3 rounded md:col-span-2"
  />
  <input
    type="text"
    name="senderCity"
    placeholder="City"
    value={formData.senderCity}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="text"
    name="senderState"
    placeholder="State / Province"
    value={formData.senderState}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="text"
    name="senderPostalCode"
    placeholder="Postal Code"
    value={formData.senderPostalCode}
    onChange={handleChange}
    className="border p-3 rounded"
  />
  <input
    type="text"
    name="senderCountry"
    placeholder="Country"
    value={formData.senderCountry}
    onChange={handleChange}
    className="border p-3 rounded"
  />
</div>


            <div className="mt-4 flex justify-end">
              <Button
                btnText="Next"
                btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
                onClick={nextStep}
              />
            </div>
          </div>
        )}

        {/* Step 2: Receiver */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Receiver Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="receiverFirstName"
                placeholder="First Name"
                value={formData.receiverFirstName}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverLastName"
                placeholder="Last Name"
                value={formData.receiverLastName}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="tel"
                name="receiverPhone"
                placeholder="Phone Number"
                value={formData.receiverPhone}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="email"
                name="receiverEmail"
                placeholder="Email"
                value={formData.receiverEmail}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverAddress1"
                placeholder="Address Line 1"
                value={formData.receiverAddress1}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverAddress2"
                placeholder="Address Line 2"
                value={formData.receiverAddress2}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverCity"
                placeholder="City"
                value={formData.receiverCity}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverState"
                placeholder="State / Province"
                value={formData.receiverState}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverPostalCode"
                placeholder="Postal Code"
                value={formData.receiverPostalCode}
                onChange={handleChange}
                className="border p-3 rounded"
              />
              <input
                type="text"
                name="receiverCountry"
                placeholder="Country"
                value={formData.receiverCountry}
                onChange={handleChange}
                className="border p-3 rounded"
              />
            </div>

            <div className="mt-4 flex justify-between gap-3">
              <Button
                btnText="Back"
                btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
                onClick={prevStep}
              />
              <Button
                btnText="Next"
                btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
                onClick={nextStep}
              />
            </div>
          </div>
        )}

        {/* Step 3: Shipment */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
            <input
              type="text"
              name="packageType"
              placeholder="Package Type"
              value={formData.packageType}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />
            <input
              type="text"
              name="packageWeight"
              placeholder="Weight / Size"
              value={formData.packageWeight}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />
            <textarea
              name="instructions"
              placeholder="Special Instructions"
              value={formData.instructions}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4"
            />
            <div className="flex justify-between gap-3">
              <Button
                btnText="Back"
                btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-10 py-2 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
                onClick={prevStep}
              />
              <Button
                btnText="Submit Booking"
                btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-10 py-2 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
              />
            </div>
          </div>
        )}
      </form>
    </div>
        </div>

        {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white text-center py-16">
        <h3 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5 md:text-6xl">
            Having Trouble Booking?
        </h3>
        <p className="max-w-xl mx-auto mb-6">
            Our team is here to assist you with any questions or issues you may
            have. Contact us directly for personalized support.
        </p>
        <Button
          btnText="Contact Us"
          btnStyle="inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-14 py-3 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow cursor-pointer"
            onClick={() => navigateToContact("/contact")}
        />
      </section>
    </section>
  );
};

export default BookingForm;
