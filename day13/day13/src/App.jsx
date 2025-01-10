import React, { useState } from "react";
import CardComponent from "../src/components/CardComponent";
import cardData from "./utility/data";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 3;
  //total slides Calculate karne ke liye
  const totalSlides = Math.ceil(cardData.length / slidesPerView);
  // Handlers for navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-green-400 via-indigo-500 to-pink-500 text-center">
      <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
        <div className="overflow-hidden w-full max-w-6xl">
          <div
            className={`flex transition-transform duration-500 ease-in-out transform`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {/* Create 3 slides in one slide */}
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div key={`slide-${i}`} className="flex w-full">
                {cardData
                  .slice(i * slidesPerView, i * slidesPerView + slidesPerView)
                  .map((card) => (
                    <div key={card.id} className="w-1/3 p-28">
                      <CardComponent
                        img={card.img}
                        alt={card.alt}
                        title={card.title}
                        description={card.description}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Aerrow Buttons banane ke liye for slide*/}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-4 hover:scale-125 transition-transform"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-4 hover:scale-125 transition-transform"
        >
          →
        </button>

        {/* Dots Slide ki Navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={`dot-${i}`} //har ek dot ke liye ek unique key
              className={`w-3 h-3 rounded-full hover:scale-150 transition-transform duration-300 ${
                i === currentSlide ? "bg-white" : "bg-white/30" //dot's ko color dene ke liye
              }`}
              onClick={() => setCurrentSlide(i)}  //slide ko change karne ke liye
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;