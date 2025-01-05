// import React from "react";
// import products from "./../utility/data";
// const CardComponents = ({ items }) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="w-72 m-8 p-4 bg-red-200 rounded-xl shadow-xl shadow-red-400 transform transition-transform hover:scale-105 hover:shadow-green-600 duration-300"
//         >
//           <h1 className="m-2 text-center text-red-600 font-serif font-bold text-2xl">
//             {item.name}
//           </h1>
//           <img
//             className="h-72 mx-auto rounded-xl w-60 bg-contain shadow-lg shadow-red-800 transform transition-all duration-300 hover:scale-100 hover:shadow-xl hover:shadow-green-500"
//             src={item.image}
//             alt={`${item.name} image`}
//           />
//           <p className="mx-3 my-4 text-red-600">{item.productDesc}</p>
//           <p className="mx-3 text-lg text-green-700 font-bold">
//             Price: ₹{item.price}
//           </p>
//           <div className="flex justify-between m-1">
//             <button className="bg-green-600 p-2 w-[155px] rounded-xl hover:bg-green-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500">
//               Add
//             </button>

//             <button className="bg-red-600 p-2 rounded-xl hover:bg-red-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-500">
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default CardComponents;

// old code
// ====================================================================================================
// new code

import React, { useState } from "react";
import products from "./../utility/data";
const CardComponents = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => {
        const [count, setCount] = useState(0);

        const handleClickIncrement = () => {
          if (count >= 5) {
            alert("You can't increment more than 5 times");
            setCount(5);
          } else {
            setCount(count + 1);
          }
        };

        const handleClickDecrement = () => {
          if (count === 0) {
            alert("No items to remove");
          } else {
            setCount(count - 1);
          }
        };

        const handleAdd = () => {
          alert(`${item.name} added to the cart.`);
        };

        const handleRemove = () => {
          alert(`${item.name} removed from the cart.`);
        };

        return (
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
            <div className="gap-2 flex flex-col justify-center items-center m-1">
              {/* Increment and Decrement Buttons */}
              <div className="flex gap-20">
                <button
                  className="font-bold text-xl bg-green-600 px-4 py-2 rounded hover:bg-green-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
                  onClick={handleClickIncrement}
                >
                  +
                </button>
                <span className="font-bold text-xl">{count}</span>
                <button
                  className="font-bold text-xl bg-red-600 px-4 py-2 rounded hover:bg-red-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-500"
                  onClick={handleClickDecrement}
                >
                  -
                </button>
              </div>
              {/* Add and Remove Buttons */}
              <div className="flex justify-between w-full mt-2">
                <button
                  className="text-green-600 font-semibold hover:underline"
                  onClick={handleAdd}
                >
                  Add
                </button>
                <button
                  className="text-red-600 font-semibold hover:underline"
                  onClick={handleRemove}
                >
                  Remove
                </button>
              </div>
            </div>
            <button
              className="bg-orange-500 text-white rounded-full p-3 w-full mt-4 
                hover:bg-orange-600 hover:scale-105 transform transition-all 
                duration-300 hover:shadow-lg hover:shadow-orange-500"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default CardComponents;