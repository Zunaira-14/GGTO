// import { createContext } from "react";

//    export  const CardContext=createContext();

//    // src/components/Context/PlaceContext.jsx
// import React, { createContext, useContext } from "react";

// const PlaceContext = createContext();

// export const PlaceProvider = ({ children }) => {
//   const places = [
//     {
//       id: 1,
//       name: "Skardu",
//       image: "/skardu1.svg",
//       rating: 4.6,
//       reviews: 528,
//     },
//     {
//       id: 2,
//       name: "Naran",
//       image: "/naran.svg",
//       rating: 4.6,
//       reviews: 528,
//     },
//     {
//       id: 3,
//       name: "Babosar Top",
//       image: "/Babosar.svg",
//       rating: 4.6,
//       reviews: 528,
//     },
//     {
//       id: 4,
//       name: "Skardu",
//       image: "/skardu2.svg",
//       rating: 4.6,
//       reviews: 528,
//     },
//   ];

//   return (
//     <PlaceContext.Provider value={{ places }}>
//       {children}
//     </PlaceContext.Provider>
//   );
// };

// export const usePlace = () => useContext(PlaceContext);
