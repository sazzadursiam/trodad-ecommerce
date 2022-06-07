import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";

import UserDashboard from "./Pages/User/UserDashboard";

import Product from "./Components/Products/Product";

import Index from "./Pages/Index/Index";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";

import Admin from "./Pages/Admin/Admin";
import Brands from "./Pages/Admin/Brands";
import ProductCategories from "./Pages/Admin/ProductCategories";
import AddProduct from "./Pages/Admin/Product/AddProduct";
import Test from "./Pages/Admin/DynamicInputTest";

import "./Pages/Admin/CSS/admin.css";

import Checkout from "./Components/Checkout/Checkout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/user" element={<UserDashboard />} />

        {/* Products */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout />} />

        {/* Admin Routes */}
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="brands" element={<Brands />} />
          <Route path="categories" element={<ProductCategories />} />
          <Route path="products/add-new" element={<AddProduct />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
