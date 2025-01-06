import React from "react";
const CardComponent = ({ categories }) => {
  return (
    <div className="w-screen h-screen bg-blue-800 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {categories.map((val) => (
          <div
            key={val.id}
            className="w-[24rem] h-[12rem] flex hover:shadow-red-100 hover:shadow-xl rounded-2xl text-slate-200 hover:scale-105 transform transition-all duration-300"
          >
            <div className="w-[40%] h-full">
              <img
                className="w-full h-full rounded-l-2xl object-cover"
                src={val.image}
                alt={val.name}
              />
            </div>
            <div className="w-[60%] bg-gray-600 rounded-r-2xl p-5 flex flex-col">
              {/* Name and Description */}
              <div className="flex-grow">
                <h1 className="text-xl font-bold mb-2">{val.name}</h1>
                <p className="text-sm">{val.description}</p>
              </div>
              <div className="mt-4">
                <button className="w-full h-10 bg-slate-400 rounded-xl hover:bg-green-400 hover:text-black hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardComponent;