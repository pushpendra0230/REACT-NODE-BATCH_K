import React from "react";

const CardComponent = ({
  product,
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div className="w-72 p-8 bg-white rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:bg-blue-200 hover:shadow-lg hover:shadow-blue-800 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-t-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
      />
      <div className="px-4 py-3">
        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold text-black my-2">
          ${product.price}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={onIncrement}
            className="bg-blue-500 text-white px-2 py-2 rounded-full transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
            disabled={count >= 5}
          >
            {count >= 5 ? "Max Limit Reached" : "Add to Cart"}
          </button>
          <span className="mx-2">{count}</span>
          <button
            onClick={onDecrement}
            className="bg-red-500 text-white px-1 py-2 rounded-full transform transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500"
            disabled={count === 0}
          >
            Remove
          </button>
          <button
            onClick={onReset}
            className="bg-gray-500 text-white px-4 py-2 rounded-full transform transition-all duration-300 hover:bg-gray-600 hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;