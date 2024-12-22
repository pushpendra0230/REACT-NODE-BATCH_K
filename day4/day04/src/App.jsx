import React from "react";
import categories from "./utility/data";
import ListComponent from "./components/ListComponent";
const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-900 h-screen p-20 lg:flex lg:flex-wrap gap-6">
      <ListComponent categories={categories} />
    </div>
  );
};
export default App;



// export default function App() {
//   return (
//     <div className="text-2xl text-blue-500 font-bold">
//       Hello, Tailwind CSS!
//     </div>
//   );
// }