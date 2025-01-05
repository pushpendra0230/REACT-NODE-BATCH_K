import React from "react";
import CardComponent from "../src/components/CardComponents";
import products from "./utility/data";
const App = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Responsive Product Card Grid</h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};
export default App;