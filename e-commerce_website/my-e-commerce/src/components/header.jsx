import React from "react";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://th.bing.com/th?id=OIP.zzuK0kZcqnnq3ECt95DoSAHaH5&w=242&h=258&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Logo"
          className="w-20 h-20 rounded-full"
        />
        <h1 className="ml-2 text-2xl font-bold text-red-600 hover:text-green-500">
          all in one
          <br />
          <span className="text-2xl font-bold text-red-600 hover:text-green-500">
            Electronics
          </span>
        </h1>
      </div>
      <nav className="flex space-x-6 text-gray-500">
        <a
          href="#"
          className="hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        >
          Our Products
        </a>
        <a
          href="#"
          className="hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        >
          Contact
        </a>
        <a
          href="#"
          className="hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        >
          Log In
        </a>
        <a
          href="#"
          className="hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        >
          Sign Up
        </a>
      </nav>
      {/* search button code */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 w-96 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500"
        />
        <button className="text-gray-600 hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500">
          <img
            src="https://img.icons8.com/?size=50&id=lFyaayFdhpED&format=gif"
            alt="Heart Icon"
            className="w-6 h-6"
          />
        </button>
        <button className="text-gray-600 hover:text-green-500 hover:scale-125 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500">
          <img
            src="https://img.icons8.com/?size=30&id=TdZUZUq3XNh6&format=gif"
            alt="Cart Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
