import React from "react";
import items from "./utility/data";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="h-fullscreen w-fullscreen bg-blue-800 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <CardComponent categories={items} />
      </div>
    </div>
  );
}
export default App;