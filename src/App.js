import React, { createContext, useState } from "react";
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
import JournalDetails from "./Components/Journal/journalDetails";
import ShippingMethod from "./Pages/Admin/ShippingMethod";
import SliderElement from "./Pages/Admin/SliderElement";
import Orders from "./Pages/User/UserContent/Dashboard/Orders/Orders";
import OrderDetails from "./Pages/User/UserContent/Dashboard/Orders/OrderDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import UserRegForm from "./Pages/Registration&Login/UserRegForm";
import UserLogin from "./Pages/Registration&Login/UserLogin";
import PrivateOutlet from "./Components/PrivateRoute/PrivateOutlet";



export const UserContext = createContext();

function App() {
  const [slugName, setSlugName] = useState("new");
  const [authUser, setAuthUser] = useState(false);

  return (
    <UserContext.Provider value={{ slugName, setSlugName, setAuthUser,authUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journals" element={<JournalDetails />}/>
          <Route path="/user/registration" element={<UserRegForm />} />
          <Route path="/user/login" element={<UserLogin />} />

          {/* Products */}
          <Route
            path="/products/category/:productcategory"
            element={<ProductCategory />}
          />
          <Route path="/products" element={<ProductDetails />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/underconstruction" element={<Report />} />

          {/*===================== Admin Dashboard ===========================*/}
          <Route path="admin" element={<PrivateRoute><Admin/> </PrivateRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="brands" element={<Brands />} />
            <Route path="categories" element={<ProductCategories />} />
            <Route path="shipping-method" element={<ShippingMethod />} />
            <Route path="slider-element" element={<SliderElement />} />

            <Route path="products" element={<AllProduct />} />
            <Route path="products/add-new" element={<AddProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
          </Route>


          {/* User Dashboard */}
          <Route path="my" element={<PrivateRoute><User /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="address" element={<Address />} />
            <Route path="edit-address" element={<EditAddress />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:orderId" element={<OrderDetails />} />
            {/* <Route path="edit-account" element={<AccDetails />} /> */}

          </Route>

        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
