import React, { useState } from "react";
const CardComponent = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => {
    if (count >= 5) {
      alert("You can't increment more than 5 times");
      setCount(5);
    } else setCount(count + 1);
  };
  const handleClickDecrement = () => {
    if (count === 0) {
      alert("No items to remove");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={product.image}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {product.brand}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${product.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${product.originalPrice}
              </p>
            </del>
          </div>
          <div className="gap-2 flex">
            <button
              className="font-bold text-xl"
              onClick={handleClickIncrement}
            >
              +
            </button>
            <span className="top-3 relative">{count}</span>
            <button
              className="font-bold text-xl"
              onClick={handleClickDecrement}
            >
              -
            </button>
            <button className="bg-orange-500 text-white rounded-full p-3 w-32 relative left-20">
              Add to Cart
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};
export default CardComponent;