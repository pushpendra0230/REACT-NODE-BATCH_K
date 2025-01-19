import React from "react";
import CardComponent from "../src/components/CardComponent";
import cardData from "./utility/data";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">facebook</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Email or Phone"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex mt-10">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">
            Connect with friends around you on Facebook.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        <div className="w-1/2 p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <h4 className="text-gray-600 mb-4">It’s free and always will be.</h4>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Mobile number or email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Re-enter mobile number or email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="New password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-700"
              >
                Birthday
              </label>
              <div className="flex">
                <select
                  id="month"
                  className="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Month</option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
                <select
                  id="day"
                  className="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  id="year"
                  className="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={2025 - i} value={2025 - i}>
                      {2025 - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="mr-2"
                />
                <label htmlFor="female" className="mr-4">
                  Female
                </label>
                <input type="radio" id="male" name="gender" className="mr-2" />
                <label htmlFor="male">Male</label>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                By clicking Sign Up, you agree to our{" "}
                <a href="#" className="text-blue-500">
                  Terms
                </a>{" "}
                and that you have read our{" "}
                <a href="#" className="text-blue-500">
                  Data Policy
                </a>
                , including our{" "}
                <a href="#" className="text-blue-500">
                  Cookie Use
                </a>
                .
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
export default App;