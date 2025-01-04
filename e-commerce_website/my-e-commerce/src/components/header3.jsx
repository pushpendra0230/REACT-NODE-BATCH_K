import React from "react";
const Header3 = () => {
  const categories = [
    {
      imgSrc:
        "https://image.shutterstock.com/image-vector/black-linear-laptop-cursor-icon-260nw-1038389059.jpg",
      label: "Laptop",
    },
    {
      imgSrc:
        "https://image.shutterstock.com/image-vector/vector-smartwatch-icon-iwatch-similar-260nw-392097409.jpg",
      label: "Watches",
    },
    {
      imgSrc:
        "https://image.shutterstock.com/image-vector/headphone-icon-on-white-background-260nw-1481848727.jpg",
      label: "Headphones",
    },
    {
      imgSrc:
        "https://th.bing.com/th?id=OIP.0tDD8Z5feTI3k1xX61ch-AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      label: "Earbuds",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.dtuAz94xeOj8CE5DWvzo5wHaH6?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      label: "TV's",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.2jC_nopn-j7vfz7lSkykwwHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      label: "Camera",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/OIP.S6sJLt8yCRIeaEtBFfs7bgHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      label: "Speaker",
    },
  ];
  return (
    <header className="bg-red-900 p-4">
      <div className="container mx-auto">
        <div className="text-white font-bold text-3xl mb-4 ml-[80px] hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
          Categories
        </div>
        <div className="flex items-center mb-4 ml-[80px]">
          <h2 className="text-white text-2xl font-semibold mr-4 hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
            Browse By Category
          </h2>
        </div>
        <div className="flex space-x-2">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col items-center">
              <p className="text-white mb-3 ml-[80px] text-2xl hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
                {category.label}
              </p>
              <img
                src={category.imgSrc}
                alt={category.label}
                className="w-12 h-12 ml-[80px] transform transition-all duration-300 hover:scale-110 hover:translate-x-4 hover:shadow-lg hover:shadow-green-500 mb-6"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header3;