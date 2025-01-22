import React from "react";
import CardComponent from "./../components/CardComponent";
import Nav from "./../components/Nav";
import data from "../utility/data";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex">
      <Nav />
      <div className="flex-1 p-5">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-500">
          Classroom
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((card) => (
            <Link to="hello">
              <CardComponent
                key={card.title}
                title={card.title}
                image={card.image}
                description={card.description}
                batch={card.batch}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;