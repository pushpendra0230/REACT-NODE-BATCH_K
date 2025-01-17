// import React from "react";

// const ChildComponent = ({ name, changeparentdata }) => {
//   return (
//     <div>
//       <h1 className="p-4 bg-blue-100 rounded mb-10">{name}</h1>
//       <button
//         onClick={changeparentdata}
//         className="bg-green-500 text-white py-2 px-4 rounded font-bold
//     hover:bg-green-600 hover:scale-110 transform transition-all
//     duration-300 hover:shadow-lg hover:shadow-green-800"
//       >
//         To See Surname
//       </button>
//     </div>
//   );
// };
// export default ChildComponent;

// old code
// =============================================================================================
// new code

import React from "react";

const ChildComponent = ({ name, changeparentdata }) => {
  return (
    <div className="text-center">
      <h1 className="p-4 bg-blue-100 rounded mb-4 text-lg font-bold">{name}</h1>
      <button
        onClick={changeparentdata}
        className="bg-green-500 text-white py-2 px-4 rounded font-bold 
          hover:bg-green-600 hover:scale-110 transform transition-all 
          duration-300 hover:shadow-lg hover:shadow-green-800"
      >
        Click To See Surname
      </button>
    </div>
  );
};
export default ChildComponent;