// import { useState } from "react";
// import buttons from "./utility/data";
// import CardComponent from "./components/CardComponent";

// function App() {
//   const [input, setInput] = useState("0");

//   const handleClick = (value) => {
//     if (value === "AC") {
//       setInput("0");
//     } else if (value === "+/-") {
//       setInput((prev) => (parseFloat(prev) * -1).toString());
//     } else if (value === "%") {
//       setInput((prev) => (parseFloat(prev) / 100).toString());
//     } else if (value === "=") {
//       try {
//         const sanitizedInput = input
//           .replace("÷", "/")
//           .replace("×", "*")
//           .replace("−", "-");
//         setInput(eval(sanitizedInput).toString());
//       } catch {
//         setInput("Error");
//       }
//     } else {
//       setInput((prev) => (prev === "0" ? value : prev + value));
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <CardComponent>
//         <div className="text-white text-right text-4xl p-3 bg-gray-800 rounded-lg h-20 flex items-center justify-end">
//           {input}
//         </div>
//         <div className="grid grid-cols-4 gap-3 mt-4">
//           {buttons.flat().map((item) => (
//             <button
//               key={item}
//               className={`text-2xl rounded-full h-16 ${
//                 typeof item === "number" || item === "."
//                   ? "bg-gray-600 text-white hover:bg-gray-500"
//                   : item === "=" || ["÷", "×", "−", "+"].includes(item)
//                   ? "bg-orange-500 text-white hover:bg-orange-400"
//                   : "bg-gray-400 text-black hover:bg-gray-300"
//               } flex items-center justify-center`}
//               onClick={() => handleClick(item.toString())}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </CardComponent>
//     </div>
//   );
// }
// export default App;

// old code
// ======================================================================================
// new code with shimmer effect

import { useState, useEffect } from "react";
import buttons from "./utility/data";
import CardComponent from "./components/CardComponent";

function App() {
  //current input value ko store karne ke liye
  const [input, setInput] = useState("0");

  //shimmer effect ke loading ko handle karne ke liye
  const [isLoading, setIsLoading] = useState(true);

  //shimmer effect ko 5 seconds tak chalane ke liye
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "+/-") {
      setInput((prev) => (parseFloat(prev) * -1).toString());
    }
    //"%" ko handle karne ke liye aor 100 se divide karne ke liye
    else if (value === "%") {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "=") {
      try {
        const sanitizedInput = input
          .replace("÷", "/") // Replace ÷ with /
          .replace("×", "*") // Replace × with *
          .replace("−", "-"); // Replace − with -
        setInput(eval(sanitizedInput).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900">
      <div className="absolute top-8 text-orange-500 text-5xl font-bold shadow-lg">
        Apple Calculator
      </div>

      <CardComponent>
        {isLoading ? (
          <div className="bg-gray-700 h-20 rounded-lg animate-pulse"></div>
        ) : (
          <div className="text-white text-right text-4xl p-3 bg-gray-800 rounded-lg h-20 flex items-center justify-end">
            {input}
          </div>
        )}
        <div className="grid grid-cols-4 gap-3 mt-4">
          {isLoading
            ? Array(20)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-600 h-16 rounded-full animate-pulse"
                  ></div>
                ))
            : buttons.flat().map((item) => (
                <button
                  key={item}
                  className={`text-2xl rounded-full h-16 ${
                    typeof item === "number" || item === "."
                      ? "bg-gray-600 text-white hover:bg-gray-500"
                      : item === "="
                      ? "bg-orange-500 text-white hover:bg-orange-400 h-16 w-34 text-3xl"
                      : ["÷", "×", "−", "+"].includes(item)
                      ? "bg-orange-500 text-white hover:bg-orange-400"
                      : "bg-gray-400 text-black hover:bg-gray-300"
                  } flex items-center justify-center`}
                  onClick={() => handleClick(item.toString())}
                >
                  {item}
                </button>
              ))}
        </div>
      </CardComponent>
    </div>
  );
}
export default App;