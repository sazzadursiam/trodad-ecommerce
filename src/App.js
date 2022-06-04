import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import News from "./Components/News/News";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard";
import Index from "./Pages/Index/Index";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
