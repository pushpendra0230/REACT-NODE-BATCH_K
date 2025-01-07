import React, { useState } from "react";
import CardComponent from "../src/components/CardComponent";
import products from "./utility/data";

const App = () => {
  const [counts, setCount] = useState(Array(products.length).fill(0));

  const handleIncrement = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? (count >= 5 ? 5 : count + 1) : count
      )
    );
  };
  const handleDecrement = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? (count <= 0 ? 0 : count - 1) : count
      )
    );
  };
  const handleReset = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? 0 : count))
    );
  };
  return (
    <div className="w-full flex justify-center items-center flex-wrap bg-blue-500">
      <div>
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4 text-white">
          "Your One-Stop Shop for Quality and Convenience."
          </h1>
          <h1 className="text-3xl text-white">OnePlace</h1>
        </div>
      </div>
      <div className="flex-grow bg-gray-100 p-6 overflow-y-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product, index) => (
            <div key={product.id} className="flex-grow-0">
              <CardComponent
                product={product}
                count={counts[index]}
                onIncrement={() => handleIncrement(index)}
                onDecrement={() => handleDecrement(index)}
                onReset={() => handleReset(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;