import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;
