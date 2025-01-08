import React from "react";

const CardComponent = ({ reservation }) => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-md rounded-lg p-6 w-full sm:w-7/4 md:w-5/4 lg:w-4/4 xl:w-5/6 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 hover:shadow-xl hover:shadow-teal-700 transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{reservation.guest}</h1>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=48&id=tNcJ7GGjHsUq&format=png"
            alt="Download PDF"
            className="w-6 h-6"
          />
        </a>
      </div>
      <p className="text-gray-200">
        {reservation.checkIn} - {reservation.checkOut}
      </p>
      <div className="my-4">
        <img
          src={reservation.imageUrl}
          alt="Room"
          className="w-full h-56 object-cover rounded-md"
        />
      </div>
      <div className="text-lg">
        <p className="text-xl">Address: {reservation.address}</p>
        <p className="text-xl">Nights: {reservation.nights}</p>
        <p className="text-xl">
          Price per night: ₹{reservation.pricePerNight.toFixed(2)}
        </p>
        <p className="text-xl">
          Cleaning Fee: ₹{reservation.cleaningFee.toFixed(2)}
        </p>
      </div>
      <div className="mt-6 text-right">
        <p className="text-2xl font-bold text-green-300">
          Total: ₹{reservation.total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default CardComponent;