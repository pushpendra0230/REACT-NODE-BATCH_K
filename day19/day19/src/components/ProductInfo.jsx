// import React from "react";
// import { useParams } from "react-router-dom";
// import products from "../utility/data";

// const ProductInfo = () => {
//   const { id } = useParams();
//   const product = products.find((product) => product.id === parseInt(id));
//   console.log(product);
//   console.log(id);
//   return (
//     <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
//       <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
//         <img
//           className="w-full"
//           alt="image of a girl posing"
//           src={product.imageUrl}
//         />
//       </div>
//       <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
//         <div className="border-b border-gray-200 pb-6">
//           <p className="text-sm leading-none ">Brand Name :- {product.brand}</p>
//           <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2">
//             Product Name :- {product.productName}
//           </h1>
//         </div>

//         <div>
//           <p className="xl:pr-48 text-base lg:leading-tight leading-normal  mt-7">
//             Description :- {product.description}
//           </p>
//           <p className="text-base leading-4 mt-7">
//             productCode :- {product.productCode}
//           </p>
//           <p className="text-base leading-4 mt-4 ">
//             product price :- {product.price}
//             {product.currency}
//           </p>
//           <p className="text-base leading-4 mt-4">
//             product originalPrice :-
//             <span className="line-through">{product.originalPrice}</span>
//             {product.currency}
//           </p>
//           <p className="text-base leading-4 mt-4 ">
//             ExpireDate :- {product.expireDate}
//           </p>
//           <p className="md:w-96 text-base leading-normal  mt-4">
//             ManufactureDate :- {product.manufactureDate}
//           </p>
//           <p className="md:w-96 text-base leading-normal  mt-4">
//             ProductType :- {product.productType}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductInfo;

// old code
// ========================================================================================
// new code

import React from "react";
import { useParams } from "react-router-dom";
import products from "../utility/data";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  console.log(product);
  console.log(id);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full transition-transform transform hover:scale-105"
          alt="image of a girl posing"
          src={product.imageUrl}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Brand Name: {product.brand}
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2 text-gray-900">
            Product Name: {product.productName}
          </h1>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-base lg:leading-tight leading-normal text-gray-700 xl:pr-48">
            Description: {product.description}
          </p>
          <p className="text-base leading-4 text-gray-700">
            Product Code: {product.productCode}
          </p>
          <p className="text-base leading-4 text-gray-700">
            Product Price:{" "}
            <span className="font-bold text-gray-900">{product.price}</span>{" "}
            {product.currency}
          </p>
          <p className="text-base leading-4 text-gray-700">
            Original Price:{" "}
            <span className="line-through text-red-500">
              {product.originalPrice}
            </span>{" "}
            {product.currency}
          </p>
          <p className="text-base leading-4 text-gray-700">
            Expiry Date: {product.expireDate}
          </p>
          <p className="text-base leading-normal text-gray-700">
            Manufacture Date: {product.manufactureDate}
          </p>
          <p className="text-base leading-normal text-gray-700">
            Product Type: {product.productType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;