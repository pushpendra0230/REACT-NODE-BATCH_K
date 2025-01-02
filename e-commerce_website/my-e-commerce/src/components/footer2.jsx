import React from "react";
const Footer2 = () => {
  return (
    <footer className="bg-red-900 py-8">
      <div className="container mx-auto flex justify-center space-x-8">
        {[
          {
            icon: (
              <img
                src="https://img.icons8.com/?size=50&id=MqUX8JjKRwmM&format=gif"
                alt="Delivery Icon"
                className="w-7 h-7"
              />
            ),
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over ₹15000",
          },
          {
            icon: (
              <img
                src="https://img.icons8.com/?size=50&id=N5LtcuvL084X&format=gif"
                alt="Support Icon"
                className="w-7 h-7"
              />
            ),
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
          },
          {
            icon: (
              <img
                src="https://img.icons8.com/?size=50&id=bRKzJqpdManU&format=gif"
                alt="Guarantee Icon"
                className="w-7 h-7"
              />
            ),
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 hover:shadow-xl hover:shadow-green-500">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-sm text-green-600">{item.description}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer2;