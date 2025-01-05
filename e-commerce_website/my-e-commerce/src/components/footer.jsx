import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <ul>
            <li className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
              Subscribe
            </li>
            <li className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
              Get 10% off your first order
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul>
            <li className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
              f-16 raj market, jaipur, rajashthan
            </li>
            <li className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
              sonipushpendra256@gmail.com
            </li>
            <li className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
              +91 6350247952
            </li>
          </ul>
        </div>
        <footer className="text-white py-6 z-50 w-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-4 w-1/8">
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                My Account
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Login / Register
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Cart
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Wishlist
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Shop
              </a>
            </div>
            <div className="flex flex-col space-y-4 w-1/8">
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Our Products
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Categories
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Terms Of Use
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                FAQ
              </a>
              <a
                href="/"
                className="hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4 hover:text-green-500 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
            Download App
          </h3>
          <div className="mb-4 hover:translate-x-4 transform hover:shadow-lg hover:shadow-green-500 transition-all duration-300">
            <img
              src="https://flipkartacademy.com/wp-content/uploads/2022/08/exported_qrcode_image_600-500x500.png"
              alt="QR Code"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;