import React from "react";

const CardComponent = ({ title, images }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            className="h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            style={{ width: "220px" }}
          />
        ))}
      </div>
    </div>
  );
};
export default CardComponent;