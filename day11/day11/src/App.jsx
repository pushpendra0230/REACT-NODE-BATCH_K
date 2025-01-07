import React, { useState } from "react";
import CardComponent from "../src/components/CardComponent";
import cartData from "./utility/data";

const App = () => {
  const [counts, setCounts] = useState({});
  const handleIncrement = (index) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      if (currentCount >= 5) {
        alert("You can't add more than 5 items of this product to your cart.");
        return prevCounts;
      }
      return {
        ...prevCounts,
        [index]: currentCount + 1,
      };
    });
  };
  const handleDecrement = (index) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      if (currentCount === 0) {
        alert(
          "You can't reduce the quantity below 0."
        );
        return prevCounts;
      }
      return {
        ...prevCounts,
        [index]: currentCount - 1,
      };
    });
  };
  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-100 to-pink-300 min-h-screen flex flex-col">
      <div className="container mx-auto mt-10 flex-grow flex shadow-md my-10 bg-gray-50 rounded-lg overflow-hidden">
        <div className="w-3/4 bg-white px-10 py-10 shadow-md rounded-l-lg">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl text-gray-700">
              Shopping Cart
            </h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          {cartData.map((product, index) => (
            <CardComponent
              key={product.id}
              product={{
                ...product,
                quantity: counts[index] || product.quantity || 0,
              }}
              onIncrement={() => handleIncrement(index)}
              onDecrement={() => handleDecrement(index)}
            />
          ))}
          <a
            href="#"
            className="flex font-semibold text-blue-600 text-sm mt-10 hover:text-green-800"
          >
            Continue Shopping
          </a>
        </div>
        <div
          id="summary"
          className="w-1/4 px-8 py-10 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-r-lg"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items</span>
          </div>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Total</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;