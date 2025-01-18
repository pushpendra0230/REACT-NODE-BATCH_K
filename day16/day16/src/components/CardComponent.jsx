import React from "react";
const CardComponent = () => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 w-96">
      <h1 className="flex justify-center mb-6">
        <img
          src="https://images.squarespace-cdn.com/content/5a08b5a2914e6b339a5fc1eb/1517228465154-SFQGFVOTGBKF84MUR2UB/Instagram_logo.svg.png?format=1000w&content-type=image%2Fpng"
          alt="Instagram Logo"
          className="h-12"
        />
      </h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600">
          Log In
        </button>
      </form>
      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <div className="text-center mb-4">
        <a
          href="https://facebook.com"
          className="text-blue-500 text-sm font-medium flex items-center justify-center space-x-2"
        >
          <img
            src="https://i.imgur.com/exksovo.png"
            alt="Facebook Logo"
            className="h-4"
          />
          <span>Log in with Facebook</span>
        </a>
      </div>
      <a href="forget.html" className="text-sm text-blue-400 text-center block">
        Forgot password?
      </a>
      <div className="text-center mt-4 text-sm">
        Don't have an account?{" "}
        <a href="signup.html" className="text-blue-400 font-medium">
          Sign up
        </a>
      </div>
    </div>
  );
};
export default CardComponent;