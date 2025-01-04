import React from "react";
import products from "./utility/data";
import CardComponents from "../src/components/CardComponents";
import Header from "../src/components/header";
import Header2 from "../src/components/header2";
import Header3 from "../src/components/header3";
import Footer2 from "../src/components/footer2";
import Footer from "../src/components/footer";

const App = () => {
  return (
    <>
      <header className="bg-green-500 p-4">
        <Header />
      </header>
      <div className="bg-black text-white py-6">
        <Header2 />
      </div>
      <div className="bg-white py-6">
        <Header3 /> {/* Add Header3 here */}
      </div>
      <div className="w-fullscreen flex justify-center items-center flex-wrap bg-red-900">
        <CardComponents items={products} />
      </div>
      {/* Footer2 appears second last */}
      <footer className="bg-gray-100 py-8">
        <Footer2 />
      </footer>
      <footer className="bg-gray-900 text-white py-6 mt-auto">
        <Footer />
      </footer>
    </>
  );
};
export default App;