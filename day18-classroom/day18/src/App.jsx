import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Hello from "./Pages/Hello";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/hello" element={<Hello/>}></Route>
     </Routes>
    </BrowserRouter>
  );
};
export default App;