import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard";

import Product from "./Components/Products/Product";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Index from "./Pages/Index/Index";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />


        {/* Products */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
