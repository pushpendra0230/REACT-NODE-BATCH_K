import React from "react";

function CardComponent({ children }) {
  return (
    <div className="bg-black rounded-2xl p-4 w-80 shadow-2xl">{children}</div>
  );
}
export default CardComponent;