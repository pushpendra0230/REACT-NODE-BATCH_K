import React from "react";
import products from "./../utility/data";
const CardComponents = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-72 m-8 p-4 bg-red-200 rounded-xl shadow-xl shadow-red-400 transform transition-transform hover:scale-105 hover:shadow-green-600 duration-300"
        >
          <h1 className="m-2 text-center text-red-600 font-serif font-bold text-2xl">
            {item.name}
          </h1>
          <img
            className="h-72 mx-auto rounded-xl w-60 bg-contain shadow-lg shadow-red-800 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:shadow-green-500"
            src={item.image}
            alt={`${item.name} image`}
          />
          <p className="mx-3 my-4 text-red-600">{item.productDesc}</p>
          <p className="mx-3 text-lg text-green-700 font-bold">
            Price: ₹{item.price}
          </p>
          <div className="flex justify-between m-1">
            <button className="bg-green-600 p-2 w-[155px] rounded-xl hover:bg-green-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500">
              Add
            </button>

            <button className="bg-red-600 p-2 rounded-xl hover:bg-red-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-500">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardComponents;