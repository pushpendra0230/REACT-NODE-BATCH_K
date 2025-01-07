import React from "react";

const CardComponent = ({ product, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-24">
          <img className="h-24" src={product.image} alt={product.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.name}</span>
          <span className="text-red-500 text-xs">{product.brand}</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button onClick={onDecrement} className="text-gray-600 font-bold px-2">
          -
        </button>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={product.quantity}
          readOnly
        />
        <button onClick={onIncrement} className="text-gray-600 font-bold px-2">
          +
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${product.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${product.price * product.quantity}
      </span>
    </div>
  );
};
export default CardComponent;