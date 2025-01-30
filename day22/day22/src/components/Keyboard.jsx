import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="grid grid-cols-9 gap-4 p-6">
      {keys.map((key) => (
        <button
          key={key}
          className="p-3 bg-gray-300 text-black font-bold rounded-lg border-2 hover:bg-gray-400 transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none"
          onClick={() => onKeyPress(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default Keyboard;