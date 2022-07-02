import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../App";
import "./Address.css";

const Address = () => {
  const { userInfo } = useContext(UserContext);

  const link = "https://backend-ecommerce.trodad.com/api/product/new-price";

  return (
    <div className="address mt-3 mb-5">
      <p className="mb-4">
        The following addresses will be used on the checkout page by default.
      </p>

      <Row>
        <Col xs={12} md={6}>
          <h3>Billing address</h3>

          <Link to="billing-address" state={link}>
            Edit
          </Link>
          <address>
            {userInfo?.name}
            <br />
            {userInfo?.email}
            <br />
            {userInfo?.district}
            <br />
            {userInfo?.city}
            <br />
            {userInfo?.streetAddress}
            <br />
            {userInfo?.apartmentAddress}
            <br />
            {userInfo?.phone}
            <br />
            {userInfo?.postCode}
            <br />
            {userInfo?.country}
          </address>
        </Col>
        <Col xs={12} md={6}>
          <h3>Shipping address</h3>
  
          <address>
          {userInfo?.name}
            <br />
            {userInfo?.email}
            <br />
            {userInfo?.district}
            <br />
            {userInfo?.city}
            <br />
            {userInfo?.streetAddress}
            <br />
            {userInfo?.apartmentAddress}
            <br />
            {userInfo?.phone}
            <br />
            {userInfo?.postCode}
            <br />
            {userInfo?.country}
          </address>
        </Col>
      </Row>
    </div>
  );
};

export default Address;
