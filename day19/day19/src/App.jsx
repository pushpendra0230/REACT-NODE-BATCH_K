// import React from "react";
// import Homepage from "./Pages/Homepage";
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
// import AllProductsPage from "./Pages/AllProductsPage";
// import ProductDetails from "./Pages/ProductDetails";
// import AllAbout from "./Pages/AllAbout";
// import AllContact from "./Pages/AllContact";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/all-products" element={<AllProductsPage />} />
//         <Route path="/all-about" element={<AllAbout />} />
//         <Route path="/All-Contact" element={<AllContact />} />
//         <Route path="/Product-Details" element={<ProductDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;


// old code
// ===========================================================================================
// new code

import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsPage from "./Pages/AllProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import AllAbout from "./Pages/AllAbout";
import AllContact from "./Pages/AllContact";
import ScrollToTop from "./Validation/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/all-about" element={<AllAbout />} />
        <Route path="/all-contact" element={<AllContact />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;