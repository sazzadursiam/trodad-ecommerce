import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Checkout.css";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link_Path_URL } from "../../Utils/LinkPath";

import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";

const Checkout = () => {
  const userName = useRef();
  const userEmail = useRef();
  const countryName = useRef();
  const streetAddress = useRef();
  const apartmentAddress = useRef();
  const cityName = useRef();
  const districtName = useRef();
  const postcode = useRef();
  const phoneNo = useRef();
  const paymentType = useRef();

  //=================================== Fetch Cart Data ===================================

  const [cartDetails, setCartDetails] = useState([]);
  const [cartTotals, setCartTotals] = useState([]);
  const user_id = localStorage.getItem("LOGGED_IN_USER_ID");
  const CartDetails = () => {
    try {
      axios
        .get(`${Link_Path_URL}api/add-to-cart/view/${user_id}`)
        .then((res) => {
          console.log(res.data);
          setCartDetails(res.data.cartData);
          setCartTotals(res.data.cartOrderTotal);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CartDetails();
  }, []);

  const updateQuantityPlus = (id, qty) => {
    console.log("HI");
    axios
      .get(`${Link_Path_URL}api/add-to-cart/qty/update/${id}/${qty + 1}`)
      .then((res) => {
        console.log(res.data);
        CartDetails();
      });
  };

  const updateQuantityMinus = (id, qty) => {
    if (qty > 1) {
      axios
        .get(`${Link_Path_URL}api/add-to-cart/qty/update/${id}/${qty - 1}`)
        .then((res) => {
          console.log(res.data);
          CartDetails();
        });
    } else {
      axios
        .delete(`${Link_Path_URL}api/add-to-cart/qty/delete/${id}`)
        .then((res) => {
          console.log(res.data);
          CartDetails();
        });
    }
  };

  const formSubmit = (e) => {
    const formdata = new FormData();

    formdata.append("name", userName.current.value);
    formdata.append("email", userEmail.current.value);
    formdata.append("country", countryName.current.value);
    formdata.append("streetAddress", streetAddress.current.value);
    formdata.append("apartmentAddress", apartmentAddress.current.value);
    formdata.append("city", cityName.current.value);
    formdata.append("district", districtName.current.value);
    formdata.append("postcode", postcode.current.value);
    formdata.append("phone", phoneNo.current.value);
    formdata.append("userId", user_id);
    formdata.append("totalAmount", cartTotals);
    formdata.append("paymentStatus", "Pending");
    formdata.append("paymentType", paymentType.current.value);
    console.log(formdata);
    axios
      .post(`${Link_Path_URL}api/users/orders/store`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        localStorage.removeItem("cartTotal");
        localStorage.removeItem("cartProductQuantity");
        if (response.data.message) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          e.target.reset();
          CartDetails();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Header cartHidden="d-none" />
      <div className="checkout">
        <Container>
          <div className="shopping_cart my-5">
            <div className="table-responsive ">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col"></th>
                    <th scope="col">Quantity</th>
                    <th scope="col">At Price</th>
                    <th scope="col" className="m_force_end">
                      In total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* table data */}
                  {cartDetails.map((data, index) => (
                    <tr key={index}>
                      <td style={{ height: "80px", width: "80px" }}>
                        <img
                          className="h-100 w-100"
                          src={`${Link_Path_URL}${data.products.image}`}
                          alt=""
                        />
                      </td>
                      <td>
                        <p className="m-0 fw-bold">{data.products.name}</p>
                        <p className="m-0">
                          {data.packSize} - pack (SEK {data.unitPrice} / pc)
                        </p>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <FaIcons.FaMinusCircle
                            className="cursor_pointer"
                            onClick={() =>
                              updateQuantityMinus(data.id, data.qty)
                            }
                          />
                          <span className="mx-3"> {data.qty}</span>
                          <FaIcons.FaPlusCircle
                            className="cursor_pointer"
                            onClick={() =>
                              updateQuantityPlus(data.id, data.qty)
                            }
                          />
                        </div>
                      </td>
                      <td>(SEK {data.unitPrice} / pc)</td>
                      <td>
                        <span className="fw-bold m_force_end">
                          {" "}
                          {data.price} kr
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="in_total">
              <div className="calculation btm_border_dash">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1 fw-bold fs20">Order Total</p>
                  <p className="mb-1 fw-bold fs20">
                    {Number(cartTotals).toFixed(2)} kr
                  </p>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1">Vat</p>
                  <p className="mb-1">9.70 kr</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1">Shipping</p>
                  <p className="mb-1">0.70 kr</p>
                </div> */}
              </div>
              {/* <div className="d-flex justify-content-between align-items-center">
                <p className="mb-1 fw-bold fs20">Subtotal</p>
                <p className="mb-1 fw-bold fs20">0.70 kr</p>
              </div> */}
            </div>
          </div>
          <div className="edit_details mb-5">
            <h5 className="fw-bold mb-4">Shipping address</h5>
            <Form onSubmit={formSubmit}>
              <Row>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                >
                  <Form.Label>
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    ref={userName}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                >
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    ref={userEmail}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>
                  Country / Region <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Country"
                  ref={countryName}
                />
              </Form.Group>
              <Row>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                >
                  <Form.Label>
                    Street address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Street address"
                    ref={streetAddress}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                >
                  <Form.Label>
                    Apartment, suite, unit, etc (optional)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apartment, suite, unit, etc (optional)"
                    ref={apartmentAddress}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>
                  Town / City <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Town/City"
                  ref={cityName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>
                  District <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="District"
                  ref={districtName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Postcode / ZIP (optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postcode"
                  ref={postcode}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>
                  Phone <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  required
                  ref={phoneNo}
                />
              </Form.Group>
              {/* Brand Dropdown */}
              <Form.Group controlId="validationCustom01" className="mb-3">
                <Form.Label className="label fw-bold">
                  Select Brand <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  ref={paymentType}
                >
                  <option>Select Payment Type</option>
                  <option value="Cash On Delivery">Cash On Delivery</option>
                  {/* <option value="2"></option>
                  <option value="2"></option> */}
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Confirm Order
              </Button>
            </Form>
          </div>
        </Container>
      </div>
      <Footer shippingPolicy="d-none" footerTop="d-none" />
    </div>
  );
};
export default Checkout;
