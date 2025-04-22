import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import ProductCard from  ProductCard.jsx;
// import Card from Card.jsx;

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Custom />
//      {/* <Pinky/> */}
//     {/* <Syed/>  */}
//   </StrictMode>
// );