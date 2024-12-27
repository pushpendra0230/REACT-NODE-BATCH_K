import React from "react";
const CardComponents = ({ product }) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-orange-400 hover:cursor-pointer rounded-lg p-4 shadow-lg m-10 pb-8 transition-all 
    duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-400">
      <h2 className="text-2xl font-bold text-white mb-2">{product.productName}</h2>
      <p className="text-white italic mb-4">{product.productDescription}</p>
      <div className="space-y-4">
        {product.productReviews.map((review, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-yellow-300">⭐</span> 
            <p className="text-white">{review.productReview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardComponents;