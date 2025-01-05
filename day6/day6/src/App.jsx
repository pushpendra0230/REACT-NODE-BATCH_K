import React from 'react';
import productdata from '../src/utility/data';
import CardComponents from '../src/Components/CardComponents';
const App=()=>{
  return (
    <div className="bg-slate-700 text-white text-center min-h-screen py-10">
      <h1 className="text-4xl text-red-500 font-bold mb-8">PRODUCT REVIEW</h1>
      <div className="">
        {productdata.map((product)=>(
          <CardComponents key={product.productName}product={product}/>
        ))}
      </div>
    </div>
  );
};
export default App;