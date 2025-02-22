// import React, { useState } from "react";
// import CardComponent from "../src/components/CardComponent";
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
//   const handleReset = (index) => {
//     setCount((prevCounts) =>
//       prevCounts.map((count, i) => (i === index ? 0 : count))
//     );
//   };

//   return (
//     <div className="w-full flex justify-center items-center flex-wrap bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 shadow-lg shadow-green-500/50">
//       <div>
//         <div className="text-center p-10">
//           <h1 className="font-bold text-4xl mb-4 text-white">
//             "Your One-Stop Shop for Quality and Convenience."
//           </h1>
//           <h1 className="text-3xl text-white">OnePlace</h1>
//         </div>
//       </div>
//       <div className="flex-grow bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 p-6 overflow-y-auto shadow-lg shadow-green-500/50">
//         <div className="grid grid-cols-5 gap-6">
//           {products.map((product, index) => (
//             <CardComponent
//               key={product.id}
//               product={product}
//               count={counts[index]}
//               onIncrement={() => handleIncrement(index)}
//               onDecrement={() => handleDecrement(index)}
//               onReset={() => handleReset(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;

// old code
// ===================================================================
// new code

import React, { useState, useEffect } from "react";
import CardComponent from "../src/components/CardComponent";
import products from "./utility/data";

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

  const handleReset = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? 0 : count))
    );
  };

  return (
    <div className="w-full flex justify-center items-center flex-wrap bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 shadow-lg shadow-green-500/50">
      <div>
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4 text-white">
            "Your One-Stop Shop for Quality and Convenience."
          </h1>
          <h1 className="text-3xl text-white">OnePlace</h1>
        </div>
      </div>
      <div className="flex-grow bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 p-6 overflow-y-auto shadow-lg shadow-green-500/50">
        <div className="grid grid-cols-5 gap-6">
          {products.map((product, index) => (
            <CardComponent
              key={product.id}
              product={product}
              count={counts[index]}
              onIncrement={() => handleIncrement(index)}
              onDecrement={() => handleDecrement(index)}
              onReset={() => handleReset(index)}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;