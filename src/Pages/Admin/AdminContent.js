import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AdminContent = () => {
  return (
    <div>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminContent;
