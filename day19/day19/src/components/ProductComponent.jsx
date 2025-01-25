import React, { useState } from "react";
import products from "../utility/data";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const [counts, setCounts] = useState({});

  // Handle Increment
  const handleIncrement = (index) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) >= 5 ? 5 : (prevCounts[index] || 0) + 1,
    }));
  };

  // Handle Decrement
  const handleDecrement = (index) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: (prevCounts[index] || 0) <= 0 ? 0 : (prevCounts[index] || 0) - 1,
    }));
  };
  //   return (
  //     <div>
  //       <div className="text-center p-10">
  //         <h1 className="font-bold text-4xl mb-4">
  //           Refresh Yourself with the Best Drinks
  //         </h1>
  //         <h1 className="text-3xl">DrinkStation.com</h1>
  //       </div>
  //       <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
  //         {products.map((product, index) => (
  //           <Link to={"/product-details/${index}"}>
  //             <div
  //               key={product.id}
  //               className="w-72 m-8 p-4 bg-red-200 rounded-xl shadow-xl shadow-red-400 transform transition-transform hover:scale-105 hover:shadow-green-600 duration-300"
  //             >
  //               <a href="#">
  //                 <img
  //                   src={product.imageUrl}
  //                   alt={product.name}
  //                   className="h-80 w-72 object-cover rounded-t-xl
  //    shadow-red-800 transform transition-all duration-300
  //    hover:scale-105 hover:shadow-xl hover:shadow-green-500"
  //                 />
  //                 <div className="px-4 py-3 w-72">
  //                   <span className="text-gray-400 mr-3 uppercase text-xs">
  //                     {product.brand}
  //                   </span>
  //                   <p className="text-lg font-bold text-black truncate block capitalize">
  //                     {product.name}
  //                   </p>
  //                   <div className="flex items-center">
  //                     <p className="text-lg font-semibold text-black my-3">
  //                       ${product.price}
  //                     </p>
  //                     <del>
  //                       <p className="text-sm text-gray-600 ml-2">
  //                         ${product.originalPrice}
  //                       </p>
  //                     </del>
  //                   </div>
  //                   <div className="gap-2 flex items-center">
  //                     <button
  //                       className="font-bold text-xl"
  //                       onClick={() => handleIncrement(index)}
  //                     >
  //                       +
  //                     </button>
  //                     <span className="relative">{counts[index] || 0}</span>
  //                     <button
  //                       className="font-bold text-xl"
  //                       onClick={() => handleDecrement(index)}
  //                     >
  //                       -
  //                     </button>
  //                   </div>
  //                   <div className="-mt-9">
  //                     <button
  //                       className="bg-orange-500 text-white rounded-full p-3 w-32 relative left-28
  //    hover:bg-orange-600 hover:scale-105 transform transition-all
  //    duration-300 hover:shadow-lg hover:shadow-orange-500"
  //                     >
  //                       Add to Cart
  //                     </button>
  //                   </div>
  //                 </div>
  //               </a>
  //             </div>
  //           </Link>
  //         ))}
  //       </section>
  //     </div>
  //   );
  // };

  // old code
  // ============================================================================
  // new code

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Refresh Yourself with the Best Drinks
        </h1>
        <h1 className="text-3xl">DrinkStation.com</h1>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="w-72 m-8 p-4 bg-red-200 rounded-xl shadow-xl shadow-red-400 transform transition-transform hover:scale-105 hover:shadow-green-600 duration-300"
          >
            <Link to={`/product-details/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-80 w-72 object-cover rounded-t-xl
               shadow-red-800 transform transition-all duration-300
               hover:scale-105 hover:shadow-xl hover:shadow-green-500"
              />
            </Link>
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {product.brand}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {product.name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black my-3">
                  ${product.price}
                </p>
                <del>
                  <p className="text-sm text-gray-600 ml-2">
                    ${product.originalPrice}
                  </p>
                </del>
              </div>
              <div className="gap-2 flex items-center">
                <button
                  className="font-bold text-xl"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
                <span className="relative">{counts[index] || 0}</span>
                <button
                  className="font-bold text-xl"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
              </div>
              <div className="-mt-9">
                <button
                  className="bg-orange-500 text-white rounded-full p-3 w-32 relative left-28
               hover:bg-orange-600 hover:scale-105 transform transition-all
               duration-300 hover:shadow-lg hover:shadow-orange-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductComponent;