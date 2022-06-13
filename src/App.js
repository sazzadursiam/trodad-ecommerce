import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";



import Product from "./Components/Products/Product";

import Index from "./Pages/Index/Index";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";

import Admin from "./Pages/Admin/Admin";
import Brands from "./Pages/Admin/Brands";
import ProductCategories from "./Pages/Admin/ProductCategories";
import AddProduct from "./Pages/Admin/Product/AddProduct";



import User from "./Pages/User/User";



import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./Pages/User/UserContent/Dashboard/Dashboard";

import AllProduct from "./Pages/Admin/Product/AllProduct";
import EditProduct from "./Pages/Admin/Product/EditProduct";
import ProductCategory from "./Pages/ProductCategory/ProductCategory";
import Report from "./Pages/Report/Report";
import Address from "./Pages/User/UserContent/Dashboard/Address/Address";
import EditAddress from "./Pages/User/UserContent/Dashboard/EditAddress/EditAddress";
import Orders from "./Pages/User/UserContent/Dashboard/Orders/Orders";
import OrderDetails from "./Pages/User/UserContent/Dashboard/Orders/OrderDetails";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />


        {/* Products */}
        <Route path="/products/:id" element={<ProductCategory/>} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout />} />


        <Route path="/underconstruction" element={<Report />} />



        {/* Admin Dashboard */}
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="brands" element={<Brands />} />
          <Route path="categories" element={<ProductCategories />} />


          <Route path="products" element={<AllProduct />} />
          <Route path="products/add-new" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />

        </Route>


        {/* User Dashboard */}
        <Route path="my" element={<User />}>
          <Route index element={<Dashboard />} />
          <Route path="address" element={<Address />} />
          <Route path="edit-address" element={<EditAddress />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetails />} />
        </Route>





      </Routes>
    </Router>
  );
}

export default App;
