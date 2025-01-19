import React from "react";

const CardComponent = ({ title, description, image }) => {
  return (
    <div className="bg-blue-500 text-white rounded-lg shadow-lg overflow-hidden p-4 max-w-sm w-full hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-700">
      <div className="flex items-center space-x-4 mb-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={image}
          alt={`Image for ${title}`}
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
      </div>
      <p className="text-gray-900 text-base">{description}</p>
    </div>
  );
};
export default CardComponent;