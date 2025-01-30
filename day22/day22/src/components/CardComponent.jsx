import React from "react";

const CardComponent = ({ letter, status }) => {
  const statusClasses = {
    correct: "bg-green-500 text-white shadow-lg transform scale-110",
    wrong: "bg-red-500 text-white shadow-lg transform scale-110",
    default: "bg-gray-200 text-black shadow-md hover:scale-105 transition-all",
  };

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 text-xl font-bold text-center ${
        statusClasses[status || "default"]
      } hover:shadow-xl focus:outline-none`}
    >
      {letter}
    </div>
  );
};
export default CardComponent;