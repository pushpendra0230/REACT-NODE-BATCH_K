import React from "react";
import CardComponent from "../src/components/CardComponent";
import data from "./utility/data";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center py-4 px-8">
        <div className="text-3xl font-bold text-red-600">Netflix</div>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#tvShows" className="hover:underline">
            TV Shows
          </a>
          <a href="#movies" className="hover:underline">
            Movies
          </a>
          <a href="#originals" className="hover:underline">
            Originals
          </a>
          <a href="#trending" className="hover:underline">
            Trending
          </a>
        </nav>
      </header>

      <main className="p-8">
        {data.sections.map((section) => (
          <CardComponent
            key={section.id}
            title={section.title}
            images={section.images}
          />
        ))}
      </main>

      <footer className="bg-gray-800 text-gray-400 p-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">&copy; 2025 Netflix Clone.</p>
      </footer>
    </div>
  );
};
export default App;