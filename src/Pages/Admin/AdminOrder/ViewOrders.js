import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";

const ViewOrders = () => {
  const { orderId } = useParams();

  const [orderDetails, setOrderDetails] = useState();
  const [orderInfo, setOrderInfo] = useState([]);

  //   console.log(orderInfo);
  const showSingleOrderData = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/all-orders/order-details/${orderId}`)
      .then((res) => {
        setOrderDetails(res.data.ordersDetails);
        setOrderInfo(res.data.orders);
      });
  };

  useEffect(() => {
    showSingleOrderData();
  }, [orderId]);

  return (
    <div className="main__container">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            {/* <Link to="#" className="before">
              Add
            </Link> */}
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="card p-2">
                  <div className="card-header">
                    <h3>Order details</h3>
                    <hr />
                  </div>
                </div>

                <p className="fs14">
                  Order # <span className="bg_yellow">{orderId}</span> was
                  placed on{" "}
                  <span className="bg_yellow">
                    {orderInfo?.orderDate?.toString().slice(0, 10)}
                  </span>{" "}
                  and is currently{" "}
                  <span className="bg_yellow fw-bold">
                    {orderInfo?.orderStatus == 0 ? "Placed" : ""}
                  </span>
                </p>

                <div className="d-flex justify-content-between align-items-center border-bottom border-3 my-5">
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
                          {orderInfo?.totalAmount}
                        </td>
                      </tr>
                      {/* <tr>
                            <td className="fw-bold fs14 my-2">Shipping :</td>
                            <td className="fw-bold fs14 my-2">60.00৳</td>
                         </tr> */}
                      <tr>
                        <td className="fw-bold fs14 my-2">Payment method :</td>
                        <td className="text-muted fs14 my-2">
                          {orderInfo?.paymentType}
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold fs14 my-2">Total :</td>
                        <td className="fw-bold fs14 my-2">
                          {orderInfo?.totalAmount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Row>
                  <Col lg={4}>
                    <h3>Billing address</h3>
                    <address>
                      {orderInfo?.name}
                      <br />
                      {orderInfo?.streetAddress}
                      <br />
                      {orderInfo?.city}
                      <br />
                      {orderInfo?.country}
                      <br />
                      {orderInfo?.postCode}
                    </address>
                  </Col>
                  <Col lg={4}>
                    <h3>Shipping address</h3>
                    <address>
                      {orderInfo?.name}
                      <br />
                      {orderInfo?.streetAddress}
                      <br />
                      {orderInfo?.city}
                      <br />
                      {orderInfo?.country}
                      <br />
                      {orderInfo?.postCode}
                    </address>
                  </Col>
                </Row>
                <p className="g-mail fst-italic">{orderInfo?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
