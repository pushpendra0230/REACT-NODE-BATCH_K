import React from "react";

const CardComponent = ({ img, alt, title, description }) => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-800 via-purple-700 to-pink-800 backdrop-blur-md border border-white/10 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-600 hover:to-pink-700 hover:scale-125"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <img
        src={img}
        alt={alt}
        className="w-full h-52 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
      />
      <div className="p-8">
        <h3 className="text-xl text-white font-bold">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};
export default CardComponent;