import React from "react";
const Header2 = () => {
  return (
    <header className="bg-black text-white py-6 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col space-y-4 w-1/8">
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            Laptop's
          </a>
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            Watches
          </a>
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            Headphones
          </a>
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            Earbuds
          </a>
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            TV
          </a>
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            Camera's
          </a>
          <a
            href="/"
            className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
          >
            Speaker's
          </a>
        </div>
        <div className="flex items-center ml-auto w-3/4">
          <div className="ml-96 text-center md:text-left">
            <h2 className="text-2xl font-semibold">iPhone 14 Series</h2>
            <p className="text-lg">Up to 10% off Voucher</p>
            <a
              href="/"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 hover:translate-x-4 hover:scale-105 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              style={{ marginTop: "20px", display: "inline-block" }}
            >
              Shop Now →
            </a>
          </div>
        </div>
        <div className="w-1/4 flex justify-end">
          <img
            src="https://e-commerce-mansy.vercel.app/assets/phone.png"
            alt="Product Preview"
            className="object-contain transform hover:scale-105 hover:translate-x-4 hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
            style={{ width: "300px", height: "400px" }}
          />
        </div>
      </div>
    </header>
  );
};
export default Header2;