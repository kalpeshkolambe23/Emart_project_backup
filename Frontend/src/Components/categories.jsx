// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


// const CategoriesBar = () => {
//   const categories = [
//     {
//       name: "Electronics",
//       image: "", // Replace with actual image URLs
//       subcategories: ["Mobiles", "Laptops", "Cameras", "Accessories"],
//     },
//     {
//       name: "Fashion",
//       image: "https://via.placeholder.com/50",
//       subcategories: ["Men's Clothing", "Women's Clothing", "Kids' Wear"],
//     },
//     {
//       name: "Home and Furniture",
//       image: "https://via.placeholder.com/50",
//       subcategories: ["Furniture", "Decor", "Kitchen Appliances"],
//     },
//     {
//       name: "Books",
//       image: "https://via.placeholder.com/50",
//       subcategories: ["Fiction", "Non-Fiction", "Comics", "Educational"],
//     },
//     {
//       name: "Beauty,toys & More",
//       image: "https://via.placeholder.com/50",
//       subcategories: [
//         "Toys & School Supplies",
//         "Sports & Fitness",
//         "Books",
//         "Stationery & Office Supplies",
//         "Auto Accessories",
//         "Hair Care",
//         "Face Makeup",
//         "Eye Makeup",
//       ],
//     },
//   ];

//   return (
//     <div className="categories-bar">
//       <div className="categories-container">
//         {categories.map((category, index) => (
//           <div className="category-item" key={index}>
//             <img
//               src={category.image}
//               alt={category.name}
//               className="category-image"
//             />
//             <div className="category-name">{category.name}</div>
//             <div className="subcategories">
//               {category.subcategories.map((subcategory, subIndex) => (
//                 <div className="subcategory-item" key={subIndex}>
//                   {subcategory}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoriesBar;
