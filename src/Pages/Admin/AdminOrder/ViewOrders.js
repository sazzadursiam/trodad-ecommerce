import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";

const ViewOrders = () => {
  const { orderId } = useParams();
  const orderStatus = useRef();
  const paymentStatus = useRef();

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

  const updateOrderStatus = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("orderStatus", orderStatus.current.value);

    axios
      .post(
        `${BACKEND_BASE_URL}/api/admin/order/order-status/update/${orderId}`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.orderStatusMessage,
            confirmButtonColor: "#5eba86",
          });
          e.target.reset();
          showSingleOrderData();
        }
      });
    e.preventDefault();
  };

  const updatePaymentStatus = (e) => {
    console.log("Clicked");
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("paymentStatus", paymentStatus.current.value);

    axios
      .post(
        `${BACKEND_BASE_URL}/api/admin/order/payment-status/update/${orderId}`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.orderStatusMessage,
            confirmButtonColor: "#5eba86",
          });
          e.target.reset();
          showSingleOrderData();
        }
      });
    e.preventDefault();
  };

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

                <div className="card-header my-2">
                  <h3>Order details</h3>
                  <hr />
                  <Row className="mb-0">
                    <Col>
                      <Form onSubmit={updateOrderStatus}>
                        {/*=================== Order Status ================*/}
                        <Form.Group
                          controlId="validationCustom01"
                          className="mb-3"
                        >
                          <Form.Label className="label fw-bold">
                            Order Status
                          </Form.Label>
                          <Form.Select
                            required
                            ref={orderStatus}
                            // defaultValue={orderSts}
                          >
                            <option
                              value="0"
                              selected={
                                orderInfo.orderStatus == 0 ? "selected" : ""
                              }
                            >
                              Order Placed
                            </option>
                            <option
                              value="1"
                              selected={
                                orderInfo.orderStatus == 1 ? "selected" : ""
                              }
                            >
                              Order Accepted
                            </option>
                            <option
                              value="2"
                              selected={
                                orderInfo.orderStatus == 2 ? "selected" : ""
                              }
                            >
                              Order Rejected
                            </option>
                            <option
                              value="3"
                              selected={
                                orderInfo.orderStatus == 3 ? "selected" : ""
                              }
                            >
                              Order Processing
                            </option>
                            <option
                              value="4"
                              selected={
                                orderInfo.orderStatus == 4 ? "selected" : ""
                              }
                            >
                              Order On The Way
                            </option>
                            <option
                              value="5"
                              selected={
                                orderInfo.orderStatus == 5 ? "selected" : ""
                              }
                            >
                              Delivered
                            </option>
                          </Form.Select>
                        </Form.Group>

                        <Button
                          type="submit"
                          size="sm"
                          className="btn btn-primary"
                        >
                          Update Order Status
                        </Button>
                      </Form>{" "}
                    </Col>
                    <Col>
                      <Form onSubmit={updatePaymentStatus}>
                        {/*=================== Payment Status ================*/}
                        <Form.Group
                          controlId="validationCustom01"
                          className="mb-3"
                        >
                          <Form.Label className="label fw-bold">
                            Order Status
                          </Form.Label>
                          <Form.Select
                            required
                            ref={paymentStatus}
                            // defaultValue={orderSts}
                          >
                            <option
                              value="Pending"
                              selected={
                                orderInfo.paymentStatus == "Pending"
                                  ? "selected"
                                  : ""
                              }
                            >
                              Pending
                            </option>
                            <option
                              value="Successful"
                              selected={
                                orderInfo.paymentStatus == "Successful"
                                  ? "selected"
                                  : ""
                              }
                            >
                              Successful
                            </option>
                          </Form.Select>
                        </Form.Group>

                        <Button
                          type="submit"
                          size="sm"
                          className="btn btn-primary"
                        >
                          Update Payment Status
                        </Button>
                      </Form>
                    </Col>
                  </Row>
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
                    {orderInfo?.orderStatus == 1 ? "Accepted" : ""}
                    {orderInfo?.orderStatus == 2 ? "Rejected" : ""}
                    {orderInfo?.orderStatus == 3 ? "Processing" : ""}
                    {orderInfo?.orderStatus == 4 ? "On The Way" : ""}
                    {orderInfo?.orderStatus == 5 ? "Delivered" : ""}
                  </span>
                </p>
                <p className="fs14 ">
                  Payment Status:{" "}
                  <span className="fw-bold">{orderInfo?.paymentStatus}</span>
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
