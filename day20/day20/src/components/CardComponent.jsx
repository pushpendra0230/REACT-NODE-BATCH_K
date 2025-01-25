import React, { useState } from "react";

const ProductCard = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <img
        src="https://th.bing.com/th/id/OIP.EiLQxWQybyjEkZW1NhYrOwAAAA?w=310&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="Product"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
        <p className="text-gray-600 mt-2">
          This is a brief description of the product.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-green-600">$19.99</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {cartCount > 0 && (
        <p className="mt-4 text-sm text-gray-700">
          Items in cart: <strong>{cartCount}</strong>
        </p>
      )}
    </div>
  );
};
export default ProductCard;