import React from 'react';
import products from './../utility/data';
const CardComponents = ({ items }) => {
  return (
    <>
      {items.map((items, index) => (
        <div
          key={index}
          className="w-72 m-8 p-4 bg-red-200 rounded-xl shadow-xl shadow-red-400 transform transition-transform hover:scale-105 hover:shadow-red-600 duration-300">
          <h1 className="m-2 text-center text-red-600 font-serif font-bold text-2xl">
          {items.name}
          </h1>
          <img
            className="h-72 mx-auto rounded-xl w-60 bg-contain shadow-lg shadow-red-800"
            src={items.image}
            alt="Img"
          />
          <p className="mx-3 my-4 text-red-600">{items.productDesc}</p>
          <div className="flex justify-between m-1">
            <button className="bg-green-600 p-2 w-[155px] rounded-xl">
              Add
            </button>
            <button className="bg-red-600 p-2 rounded-xl">Remove</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default CardComponents;