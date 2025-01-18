import React from "react";
import { carouselImages, appLinks } from "./utility/data";
import CardComponent from "../src/components/CardComponent";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#405de6] via-[#e1306c] to-[#f56040]">
      <div className="flex flex-wrap justify-center items-center w-full max-w-5xl space-x-8">
        <div className="hidden lg:block w-[342px] mb-auto">
          <div className="relative">
            {carouselImages.map((image) => (
              <img src={image} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <CardComponent />
          <div className="mt-6 text-center">
            <p className="text-sm">Get the app.</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#">
                <img src={appLinks.ios} alt="App Store" className="h-10" />
              </a>
              <a href="#">
                <img
                  src={appLinks.android}
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;