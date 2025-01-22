import React from "react";

const CardComponent = ({ title, image, description, batch }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
        <div className="absolute top-4 left-4 bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
          R
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 p-4">
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8013/8013505.png"
              alt="Conference Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5178/5178672.png"
              alt="Folder Icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;