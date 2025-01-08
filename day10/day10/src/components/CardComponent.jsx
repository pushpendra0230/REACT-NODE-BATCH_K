import React from "react";

const CardComponent = ({
  product,
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div className="w-64 p-6 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-36 w-full object-cover rounded-t-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
      />
      <div className="px-3 py-2">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-md font-semibold text-black my-2">
          ${product.price}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={onIncrement}
            className="bg-blue-500 text-white px-1 py-1 rounded-full transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
            disabled={count >= 5}
          >
            {count >= 5 ? "Max" : "Add"}
          </button>
          <span className="mx-2">{count}</span>
          <button
            onClick={onDecrement}
            className="bg-red-500 text-white px-1 py-1 rounded-full transform transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500"
            disabled={count === 0}
          >
            Remove
          </button>
          <button
            onClick={onReset}
            className="bg-gray-500 text-white px-1 py-1 rounded-full transform transition-all duration-300 hover:bg-gray-600 hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;