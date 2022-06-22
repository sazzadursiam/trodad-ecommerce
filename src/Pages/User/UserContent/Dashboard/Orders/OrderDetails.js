import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../../../Components/GlobalVariables";

const OrderDetails = () => {
  const { orderId } = useParams();
 

  const [orderDetails, setOrderDetails] = useState([]);
    const [orderInfo, setOrderInfo] = useState([]);
    // const {orderDate} = orderInfo;
  const renderAllProducts = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}/api/users/orders/order-details/${orderId}`)
      .then((res) => {
        setOrderDetails(res.data.ordersDetails);
        setOrderInfo(res.data.orders);
        console.log(res.data);
      });
  };

  useEffect(() => {
    renderAllProducts();
  }, [orderId]);

  return (
    <div className="address">
      
      <p className="fs14">
        Order # <span className="bg_yellow">{orderId}</span> was placed on{" "}
        <span className="bg_yellow">
          {orderInfo?.orderDate?.toString().slice(0, 10)}
        </span>{" "}
        and is currently{" "}
        <span className="bg_yellow fw-bold">
          {orderInfo?.orderStatus == 0 ? "Placed" : ""}
        </span>
      </p>

      <div className="order_details">
        <h3>Order details</h3>

        <div className="order_details_content my-4">
          <div className="d-flex justify-content-between align-items-center border-bottom border-3">
            <table className="table mb-0">
              <thead>
                <tr className="">
                  <th scope="col">PRODUCT</th>
                  <th scope="col">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails?.map((data, index) => (
                  <tr key={index}>
                    <td className="fs14 my-2">
                      {data.productName}
                      {" x " + data.qty}
                    </td>
                    <td className="fw-bold fs14 my-2">{data.price}</td>
                  </tr>
                ))}
                <tr>
                  <td className="fw-bold fs14 my-2">Subtotal:</td>
                  <td className="fw-bold fs14 my-2">
                    {orderInfo.totalAmount}
                  </td>
                </tr>
                {/* <tr>
                  <td className="fw-bold fs14 my-2">Shipping :</td>
                  <td className="fw-bold fs14 my-2">60.00৳</td>
                </tr> */}
                <tr>
                  <td className="fw-bold fs14 my-2">Payment method :</td>
                  <td className="text-muted fs14 my-2">
                    {orderInfo.paymentType}
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold fs14 my-2">Total :</td>
                  <td className="fw-bold fs14 my-2">
                    {orderInfo.totalAmount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

 
        </div>
      </div>

      <Row>
        <Col lg={4}>
          <h3>Billing address</h3>
          <address>
            {orderInfo.name}
            <br />
            {orderInfo.streetAddress}
            <br />
            {orderInfo.city}
            <br />
            {orderInfo.country}
            <br />
            {orderInfo.postCode}
          </address>
        </Col>
        <Col lg={4}>
          <h3>Shipping address</h3>
          <address>
            {orderInfo.name}
            <br />
            {orderInfo.streetAddress}
            <br />
            {orderInfo.city}
            <br />
            {orderInfo.country}
            <br />
            {orderInfo.postCode}
          </address>
        </Col>
      </Row>

      {/* user gamil */}
      <p className="g-mail fst-italic">{orderInfo.email}</p>
    </div>
  );
};

export default OrderDetails;
