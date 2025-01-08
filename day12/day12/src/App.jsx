import React from "react";
import CardComponent from "../src/components/CardComponent";
import data from "./utility/data";

const App = () => {
  const calculateTotalEarnings = () => {
    return data.reduce((total, reservation) => total + reservation.total, 0);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-purple-100 to-pink-300 flex flex-col items-center">
      <div className="bg-gradient-to-r from-blue-300 via-purple-100 to-pink-300 shadow-md rounded-lg p-8 mb-6 mt-10 w-11/12 lg:w-2/3 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-300 hover:via-pink-200 hover:to-red-300">
        <h1 className="font-semibold text-2xl border-b pb-8 text-center">
          Order Summary
        </h1>
        <div className="flex justify-between mt-6">
          <span className="font-semibold text-sm uppercase">Total Guests=</span>
          <span className="font-semibold text-sm">{data.length}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-semibold text-sm uppercase">Total Earnings=</span>
          <span className="font-semibold text-sm">
            ₹{calculateTotalEarnings().toFixed(2)}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {data.map((reservation, index) => (
          <CardComponent key={index} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};
export default App;