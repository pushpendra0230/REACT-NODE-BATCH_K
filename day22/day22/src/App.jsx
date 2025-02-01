// import React, { useState } from "react";
// import words from "./utility/data";
// import CardComponent from "./components/CardComponent";
// import Keyboard from "./components/Keyboard";

// const App = () => {
//   // word ko Initializes kiya jisse random word aaye array m se
//   const [word] = useState(
//     words[Math.floor(Math.random() * words.length)].toUpperCase()
//   );
//   // empty string banane ke liye jisme user guess kar sake
//   const [guess, setGuess] = useState("");
//   const [guessStatus, setGuessStatus] = useState(Array(word.length).fill(""));

//   // string ko update karne ke liye aor uppercase ke liye
//   const handleInputChange = (e) => {
//     if (e.target.value.length <= word.length) {
//       setGuess(e.target.value.toUpperCase());
//     }
//   };

//   //gusee ko real word se check karne ke liye aor update karne ke liye ki correct h ya nahi
//   const handleGuess = () => {
//     let newStatus = Array(word.length).fill("");
//     for (let i = 0; i < word.length; i++) {
//       if (guess[i] === word[i]) {
//         newStatus[i] = "correct";
//       } else if (word.includes(guess[i])) {
//         newStatus[i] = "wrong";
//       }
//     }
//     setGuessStatus(newStatus);
//   };

//   // user keyboard se key press karne par uss key ke char ko add karne le liye
//   const handleKeyPress = (key) => {
//     if (guess.length < word.length) {
//       setGuess((prev) => prev + key);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white p-8">
//       <h1 className="text-4xl font-bold mb-8">Wordle Game</h1>
//       <div className="flex gap-4 mb-4">
//         {word.split("").map((letter, index) => (
//           <CardComponent
//             key={index}
//             letter={guess[index] || ""}
//             status={guessStatus[index]}
//           />
//         ))}
//       </div>
//       <input
//         type="text"
//         className="p-3 w-32 mb-4 border rounded-lg text-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-md hover:scale-115 transition-all"
//         value={guess}
//         onChange={handleInputChange}
//         maxLength={word.length}
//       />
//       <button
//         className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mb-4 transition-all"
//         onClick={handleGuess}
//       >
//         Submit
//       </button>
//       <Keyboard onKeyPress={handleKeyPress} />
//     </div>
//   );
// };
// export default App;

// old code
// ============================================================================================
// new code with shimmer effect

import React, { useState, useEffect } from "react";
import words from "./utility/data";
import CardComponent from "./components/CardComponent";
import Keyboard from "./components/Keyboard";

const App = () => {
  // word ko Initializes kiya jisse random word aaye array m se
  const [word] = useState(
    words[Math.floor(Math.random() * words.length)].toUpperCase()
  );
  // empty string banane ke liye jisme user guess kar sake
  const [guess, setGuess] = useState("");
  const [guessStatus, setGuessStatus] = useState(Array(word.length).fill(""));
  const [isLoading, setIsLoading] = useState(true);

  // shimmer effect ke liye time of loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // string ko update karne ke liye aor uppercase ke liye
  const handleInputChange = (e) => {
    if (e.target.value.length <= word.length) {
      setGuess(e.target.value.toUpperCase());
    }
  };

  //gusee ko real word se check karne ke liye aor update karne ke liye ki correct h ya nahi
  const handleGuess = () => {
    let newStatus = Array(word.length).fill("");
    for (let i = 0; i < word.length; i++) {
      if (guess[i] === word[i]) {
        newStatus[i] = "correct";
      } else if (word.includes(guess[i])) {
        newStatus[i] = "wrong";
      }
    }
    setGuessStatus(newStatus);
  };

  // user keyboard se key press karne par uss key ke char ko add karne le liye
  const handleKeyPress = (key) => {
    if (guess.length < word.length) {
      setGuess((prev) => prev + key);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Wordle Game</h1>

      {/* Cards ke liye shimmer effect */}
      <div className="flex gap-4 mb-4">
        {isLoading
          ? Array(word.length)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-400 animate-pulse rounded-lg"
                ></div>
              ))
          : word
              .split("")
              .map((letter, index) => (
                <CardComponent
                  key={index}
                  letter={guess[index] || ""}
                  status={guessStatus[index]}
                />
              ))}
      </div>

      {/* Input ke liye shimmer effect */}
      {isLoading ? (
        <div className="p-3 w-32 h-12 mb-4 bg-gray-400 animate-pulse rounded-lg"></div>
      ) : (
        <input
          type="text"
          className="p-3 w-32 h-12 mb-4 border rounded-lg text-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-black shadow-md hover:scale-105 transition-all"
          value={guess}
          onChange={handleInputChange}
          maxLength={word.length}
          disabled={isLoading}
        />
      )}

      {/*Submit button ke liye shimmer effect */}
      {isLoading ? (
        <div className="p-3 w-24 h-12 bg-gray-400 animate-pulse rounded-lg mb-4"></div>
      ) : (
        <button
          className="p-3 w-24 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mb-4 transition-all"
          onClick={handleGuess}
          disabled={isLoading}
        >
          Submit
        </button>
      )}

      {/* Keyboard ke liye shimmer effect */}
      {isLoading ? (
        <div className="grid grid-cols-9 gap-4 p-6">
          {Array(26)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-gray-400 animate-pulse rounded-lg"
              ></div>
            ))}
        </div>
      ) : (
        <Keyboard onKeyPress={handleKeyPress} />
      )}
    </div>
  );
};
export default App;