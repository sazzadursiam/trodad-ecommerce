import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import UserContent from "./UserContent/UserContent";

const User = () => {
  return (
    <div className="userDashboard">
      <Header />
      <UserContent />
      <Footer />
    </div>
  );
};

export default User;