import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import News from "./Components/News/News";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard";

import Product from "./Components/Products/Product";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Index from "./Pages/Index/Index";
import Brands from "./Pages/Admin/Brands";
import ProductCategories from "./Pages/Admin/ProductCategories";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Product />} />
        {/* <Route path="/products" element={<Product />} /> */}
        
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/brands" element={<Brands />} />
        <Route path="/admin/categories" element={<ProductCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
