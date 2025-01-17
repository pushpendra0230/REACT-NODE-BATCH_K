// import React, { useState } from "react";
// import ChildComponent from "../src/components/CardComponent";

// const App = () => {
//   const [name, setName] = useState("Pushpendra");
//   const [isToggle, setToggle] = useState(true);
//   const changeparentdata = () => {
//     if (isToggle) {
//       setName("Pushpendra Soni");
//       setToggle(!isToggle);
//     } else {
//       setName("Pushpendra");
//       setToggle(!isToggle);
//     }
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-500">
//       <ChildComponent name={name} changeparentdata={changeparentdata} />
//     </div>
//   );
// };
// export default App;

// old code
// =============================================================================================
// new code

import React, { useState } from "react";
import ChildComponent from "../src/components/CardComponent";

const App = () => {
  const [name1, setName1] = useState("Pushpendra");
  const [isToggle1, setToggle1] = useState(true);

  const [name2, setName2] = useState("Prajjal");
  const [isToggle2, setToggle2] = useState(true);

  const [name3, setName3] = useState("Rohan");
  const [isToggle3, setToggle3] = useState(true);

  const [name4, setName4] = useState("Ankit");
  const [isToggle4, setToggle4] = useState(true);

  const [name5, setName5] = useState("Aman");
  const [isToggle5, setToggle5] = useState(true);

  const [name6, setName6] = useState("Vishal");
  const [isToggle6, setToggle6] = useState(true);

  const [name7, setName7] = useState("Suman");
  const [isToggle7, setToggle7] = useState(true);

  const [name8, setName8] = useState("Raj");
  const [isToggle8, setToggle8] = useState(true);

  const [name9, setName9] = useState("Neha");
  const [isToggle9, setToggle9] = useState(true);

  const [name10, setName10] = useState("Nikhil");
  const [isToggle10, setToggle10] = useState(true);

  const [name11, setName11] = useState("Pooja");
  const [isToggle11, setToggle11] = useState(true);

  const [name12, setName12] = useState("Sneha");
  const [isToggle12, setToggle12] = useState(true);

  const changeName1 = () => {
    if (isToggle1) {
      setName1("Pushpendra Soni");
      setToggle1(!isToggle1);
    } else {
      setName1("Pushpendra");
      setToggle1(!isToggle1);
    }
  };

  const changeName2 = () => {
    if (isToggle2) {
      setName2("Prajjal Dhar");
      setToggle2(!isToggle2);
    } else {
      setName2("Prajjal");
      setToggle2(!isToggle2);
    }
  };

  const changeName3 = () => {
    if (isToggle3) {
      setName3("Rohan Sahu");
      setToggle3(!isToggle3);
    } else {
      setName3("Rohan");
      setToggle3(!isToggle3);
    }
  };

  const changeName4 = () => {
    if (isToggle4) {
      setName4("Ankit Sharma");
      setToggle4(!isToggle4);
    } else {
      setName4("Ankit");
      setToggle4(!isToggle4);
    }
  };

  const changeName5 = () => {
    if (isToggle5) {
      setName5("Aman Verma");
      setToggle5(!isToggle5);
    } else {
      setName5("Aman");
      setToggle5(!isToggle5);
    }
  };

  const changeName6 = () => {
    if (isToggle6) {
      setName6("Vishal Mehra");
      setToggle6(!isToggle6);
    } else {
      setName6("Vishal");
      setToggle6(!isToggle6);
    }
  };

  const changeName7 = () => {
    if (isToggle7) {
      setName7("Suman Mishra");
      setToggle7(!isToggle7);
    } else {
      setName7("Suman");
      setToggle7(!isToggle7);
    }
  };

  const changeName8 = () => {
    if (isToggle8) {
      setName8("Raj Malhotra");
      setToggle8(!isToggle8);
    } else {
      setName8("Raj");
      setToggle8(!isToggle8);
    }
  };

  const changeName9 = () => {
    if (isToggle9) {
      setName9("Neha Gupta");
      setToggle9(!isToggle9);
    } else {
      setName9("Neha");
      setToggle9(!isToggle9);
    }
  };

  const changeName10 = () => {
    if (isToggle10) {
      setName10("Nikhil Agarwal");
      setToggle10(!isToggle10);
    } else {
      setName10("Nikhil");
      setToggle10(!isToggle10);
    }
  };

  const changeName11 = () => {
    if (isToggle11) {
      setName11("Pooja Verma");
      setToggle11(!isToggle11);
    } else {
      setName11("Pooja");
      setToggle11(!isToggle11);
    }
  };

  const changeName12 = () => {
    if (isToggle12) {
      setName12("Sneha Patel");
      setToggle12(!isToggle12);
    } else {
      setName12("Sneha");
      setToggle12(!isToggle12);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Proper Left Column */}
        <div className="flex flex-col items-center gap-6">
          <ChildComponent name={name1} changeparentdata={changeName1} />
          <ChildComponent name={name2} changeparentdata={changeName2} />
          <ChildComponent name={name3} changeparentdata={changeName3} />
        </div>

        {/* Left Column */}
        <div className="flex flex-col items-center gap-6">
          <ChildComponent name={name4} changeparentdata={changeName4} />
          <ChildComponent name={name5} changeparentdata={changeName5} />
          <ChildComponent name={name6} changeparentdata={changeName6} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center gap-6">
          <ChildComponent name={name7} changeparentdata={changeName7} />
          <ChildComponent name={name8} changeparentdata={changeName8} />
          <ChildComponent name={name9} changeparentdata={changeName9} />
        </div>

        {/* Proper Right Column */}
        <div className="flex flex-col items-center gap-6">
          <ChildComponent name={name10} changeparentdata={changeName10} />
          <ChildComponent name={name11} changeparentdata={changeName11} />
          <ChildComponent name={name12} changeparentdata={changeName12} />
        </div>
      </div>
    </div>
  );
};
export default App;