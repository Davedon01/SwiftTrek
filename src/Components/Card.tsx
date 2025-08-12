import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/20 bg-opacity-50 flex items-end group-hover:bg-black/40 transition duration-300">
        <div className="p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-100">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
