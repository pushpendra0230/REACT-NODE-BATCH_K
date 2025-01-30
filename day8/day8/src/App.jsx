// import React from "react";
// import CardComponent from "../src/components/CardComponents";
// import products from "./utility/data";
// const App = () => {
//   return (
//     <div className="w-fullscreen flex justify-center items-center flex-wrap bg-red-900">
//       <div>
//         <div className="text-center p-10">
//           <h1 className="font-bold text-4xl mb-4 text-white">"Sip the Freshness, Taste the Purity."</h1>
//           <h1 className="text-3xl text-white">JuiceJar</h1>
//         </div>
//         <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
//           {products.map((product) => (
//             <CardComponent key={product.id} product={product} />
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };
// export default App;

// old code
// ================================================================================
// new code

// import React, { useState } from "react";
// import CardComponent from "../src/components/CardComponents";
// import products from "./utility/data";

// const App = () => {
//   const [counts, setCount] = useState(Array(products.length).fill(0));
//   const handleIncrement = (index) => {
//     setCount((prevCounts) =>
//       prevCounts.map((count, i) =>
//         i === index ? (count >= 5 ? 5 : count + 1) : count
//       )
//     );
//   };
//   const handleDecrement = (index) => {
//     setCount((prevCounts) =>
//       prevCounts.map((count, i) =>
//         i === index ? (count <= 0 ? 0 : count - 1) : count
//       )
//     );
//   };
//   return (
//     <div className="w-fullscreen flex justify-center items-center flex-wrap bg-red-900">
//       <div>
//         <div className="text-center p-10">
//           <h1 className="font-bold text-4xl mb-4 text-white">
//             "Sip the Freshness, Taste the Purity."
//           </h1>
//           <h1 className="text-3xl text-white">JuiceJar</h1>
//         </div>
//       </div>
//       <div className="flex-grow bg-red-900 p-6 overflow-y-auto">
//         <div className="flex flex-wrap justify-center gap-4">
//           {products.map((product, index) => (
//             <div key={product.id} className="flex-grow-0">
//               <CardComponent
//                 product={product}
//                 count={counts[index]}
//                 onIncrement={() => handleIncrement(index)}
//                 onDecrement={() => handleDecrement(index)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;

// old code
// ===================================================================================\
// new code with shimmer effect

import React, { useState, useEffect } from "react";
import products from "./utility/data";
import CardComponent from "./components/CardComponents";

const App = () => {
  const [counts, setCounts] = useState(Array(products.length).fill(0));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const handleIncrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? (count >= 5 ? 5 : count + 1) : count
      )
    );
  };

  const handleDecrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? (count <= 0 ? 0 : count - 1) : count
      )
    );
  };

  return (
    <div className="w-fullscreen flex justify-center items-center flex-wrap bg-red-900">
      <div>
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4 text-white">
            "Sip the Freshness, Taste the Purity."
          </h1>
          <h1 className="text-3xl text-white">JuiceJar</h1>
        </div>
      </div>
      <div className="flex-grow bg-red-900 p-6 overflow-y-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product, index) => (
            <div key={product.id} className="flex-grow-0">
              <CardComponent
                product={product}
                count={counts[index]}
                onIncrement={() => handleIncrement(index)}
                onDecrement={() => handleDecrement(index)}
                loading={loading}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;