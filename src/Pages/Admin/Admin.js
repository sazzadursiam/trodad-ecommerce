import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AdminContent from "./AdminContent";
import AdminFooter from "./AdminFooter";

const Admin = () => {
  return (
    <div className="position-relative">
      <Sidebar />
      <AdminContent />
      <AdminFooter />
    </div>
  );
};

export default Admin;