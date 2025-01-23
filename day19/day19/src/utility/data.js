// const products = [
//   {
//     id: 1,
//     brand: "Brand",
//     productName: "Product Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 149,
//     originalPrice: 199,
//     currency: "$",
//   },
//   {
//     id: 2,
//     brand: "Brand",
//     productName: "Product Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 149,
//     originalPrice: 199,
//     currency: "$",
//   },
//   {
//     id: 3,
//     brand: "Brand",
//     productName: "Product Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 149,
//     originalPrice: 199,
//     currency: "$",
//   },
//   {
//     id: 4,
//     brand: "Brand",
//     productName: "Product Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 199,
//     originalPrice: 249,
//     currency: "$",
//   },
//   {
//     id: 5,
//     brand: "Brand",
//     productName: "Product Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 179,
//     originalPrice: 219,
//     currency: "$",
//   },
//   {
//     id: 6,
//     brand: "Brand",
//     productName: "Product Name",
//     imageUrl:
//       "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 159,
//     originalPrice: 199,
//     currency: "$",
//   },
// ];
// export default products;

// old data
// ============================================================================================
// new data

const products = [
  {
    id: 1,
    brand: "Brand",
    productName: "Positive Energy",
    imageUrl:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 149,
    originalPrice: 199,
    currency: "$",
    description:
      "A refreshing and energizing soft drink with a unique blend of flavors.",
    productCode: "P001",
    productType: "Soft Drinks",
    manufactureDate: "2024-01-01",
    expireDate: "2026-01-01",
  },
  {
    id: 2,
    brand: "Brand",
    productName: "Positive Beverage",
    imageUrl:
      "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 149,
    originalPrice: 199,
    currency: "$",
    description:
      "A delicious and hydrating soft drink perfect for any occasion.",
    productCode: "P002",
    productType: "Soft Drinks",
    manufactureDate: "2023-06-15",
    expireDate: "2025-06-15",
  },
  {
    id: 3,
    brand: "Brand",
    productName: "Positive Mint",
    imageUrl:
      "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 149,
    originalPrice: 199,
    currency: "$",
    description: "A crisp and refreshing mint-flavored soft drink.",
    productCode: "P003",
    productType: "Soft Drinks",
    manufactureDate: "2024-03-01",
    expireDate: "2026-03-01",
  },
  {
    id: 4,
    brand: "Brand",
    productName: "RIOT Energy",
    imageUrl:
      "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 199,
    originalPrice: 249,
    currency: "$",
    description: "A high-energy soft drink with a bold and invigorating taste.",
    productCode: "P004",
    productType: "Soft Drinks",
    manufactureDate: "2023-11-10",
    expireDate: "2025-11-10",
  },
  {
    id: 5,
    brand: "Brand",
    productName: "Yellow RIOT Energy",
    imageUrl:
      "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 179,
    originalPrice: 219,
    currency: "$",
    description: "A vibrant and zesty energy soft drink with a tropical twist.",
    productCode: "P005",
    productType: "Soft Drinks",
    manufactureDate: "2023-09-05",
    expireDate: "2025-09-05",
  },
  {
    id: 6,
    brand: "Brand",
    productName: "Watermelon Energy",
    imageUrl:
      "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 159,
    originalPrice: 199,
    currency: "$",
    description:
      "A refreshing and hydrating watermelon-flavored energy soft drink.",
    productCode: "P006",
    productType: "Soft Drinks",
    manufactureDate: "2024-05-20",
    expireDate: "2026-05-20",
  },
];

export default products;