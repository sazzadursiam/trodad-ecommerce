import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import { UserContext } from "../../App";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";

import "./products.css";

const Product = () => {
  const { slugName } = useContext(UserContext);
  const sendCol = useRef();

  console.log(localStorage.getItem("cartTotal"));

  // =============== Fetch Products =============================
  const [newProducts, setNewProducts] = useState([]);

  const renderAllProducts = async () => {
    try {
      await axios
        .get(`${BACKEND_BASE_URL}/api/product/${slugName}`)
        .then((res) => {
          setNewProducts(res.data.products);
          // console.log(res.data.products);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderAllProducts();
  }, [slugName]);

  // =============== Fetch Tabs =============================
  const [tabItems, setTabItems] = useState([]);

  const [filterTabProduct, setFilterTabProduct] = useState([]);

  const renderAllTabs = async () => {
    try {
      await axios.get(`${BACKEND_BASE_URL}/api/tabs`).then((res) => {
        setTabItems(res.data.tabs);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderAllTabs();
  }, []);

  const getTabItems = (id) => {
    axios.get(`${BACKEND_BASE_URL}/api/product/tab/${id}`).then((res) => {
      setFilterTabProduct(res.data.tabProducts);
      // console.log(res.data.tabProducts);
    });
  };

  const [isOnChanged, setisOnChanged] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const selectedPriceShow = (id, e) => {
    setSelectedValue(e.target.value);
    setSelectedProductId(id);
    setisOnChanged("Changed");
  };

  const addToCart = (productId) => {
    // console.log(productId);
    // console.log("LOGGED_IN_USER_ID", localStorage.getItem("LOGGED_IN_USER_ID"));

    let USER_ID;
    let USER_TEMP_ID;
    let USER_TYPE;
    // CHECK IF USER IS LOGGED IN OR NOT
    if (!localStorage.getItem("LOGGED_IN_USER_ID")) {
      // Guest
      USER_TYPE = "Not-Reg";
      if (!localStorage.getItem("USER_TEMP_ID")) {
        // First Time
        USER_TEMP_ID = uuid();
        // set into local storage
        localStorage.setItem("USER_TEMP_ID", USER_TEMP_ID);
        USER_ID = USER_TEMP_ID;
      } else {
        USER_ID = localStorage.getItem("USER_TEMP_ID");
        console.log(" Not First Time", localStorage.getItem("USER_TEMP_ID"));
      }
      // console.log("guest");
    } else {
      USER_TYPE = "Reg";
      USER_ID = localStorage.getItem("LOGGED_IN_USER_ID");

      console.log("Logged in user");
    }
    // sent data to backend
    console.log("Final user id", USER_ID);
    console.log("Final user Type", USER_TYPE);

    const formdata = new FormData();
    // formdata.append("selectedPackSize", productPackSize.current.value);
    formdata.append("selectedPackSize", sendCol.current.value);
    formdata.append("qty", 1);
    formdata.append("productId", productId);
    formdata.append("userId", USER_ID);
    formdata.append("userType", USER_TYPE);

    axios
      .post(`${BACKEND_BASE_URL}/api/add-to-cart/save`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        localStorage.setItem(
          "cartProductQuantity",
          response.data.cartProductQuantity
        );
        localStorage.setItem("cartTotal", response.data.cartTotal);

        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
        }
      });
  };

  return (
    <Container className="mb-5">
      <h1 className="text-center mb-5 product-section-title">
        Snus online - Snusbolaget
      </h1>

      <Row>
        {tabItems.map((data, index) => (
          <Col
            xs={6}
            md={3}
            key={index}
            className="products-tabs active my-3 cursor_pointer"
            onClick={() => getTabItems(data.id)}
          >
            <span className="text-white">{data.name}</span>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        {filterTabProduct.length != 0
          ? filterTabProduct.map((data, index) => (
              <Col
              sm={6}
              md={4}
              lg={4}
              xl={3}
              xxl={3}
                className="products-cards"
                key={index}
              >
                <Card className="text-center product-card">
                  <Card.Body>
                    <Card.Title>
                      <div className="img-wrapper position-relative">
                        <Link to={`/products/details/${data.slug}`}>
                          <img
                            src={`${BACKEND_BASE_URL}${data.image}`}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>

                        <div className="product-flag-container ">
                          {data.flagText1 != null && data.flagText != "" && (
                            <span className="product-flag">
                              {data.flagText1}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="product-details">
                      <Link to={`/products/details/${data.slug}`}>
                        {data.name}
                      </Link>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-rating d-flex align-items-center">
                        <BsIcons.BsStarFill
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStarFill
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStarHalf
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStar
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStar
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <span className="ps-1 ">(5)</span>
                      </div>

                      <div className="product-price d-flex flex-column align-items-center">
                        {isOnChanged == "" || isOnChanged == null ? (
                          <>
                            <span>({data.unitPrice1}/st)</span>
                            <span>{data.variantPrice1} kr</span>
                            {data.oldPrice1 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice1} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 1 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice1}/st)</span>
                            <span>{data.variantPrice1} kr</span>
                            {data.oldPrice1 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice1} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 2 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice2}/st)</span>
                            <span>{data.variantPrice2} kr</span>
                            {data.oldPrice2 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice2} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 3 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice3}/st)</span>
                            <span>{data.variantPrice3} kr</span>
                            {data.oldPrice3 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice3} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 4 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice4}/st)</span>
                            <span>{data.variantPrice4} kr</span>
                            {data.oldPrice4 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice4} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 5 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice5}/st)</span>
                            <span>{data.variantPrice5} kr</span>
                            {data.oldPrice5 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice5} kr
                              </span>
                            )}
                          </>
                        ) : (
                          <>
                            <span>({data.unitPrice1}/st)</span>
                            <span>{data.variantPrice1} kr</span>
                            {data.oldPrice1 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice1} kr
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {/* Tab Products */}
                    <div className="d-flex mt-1">
                      <Form.Select
                        ref={sendCol}
                        className="w-100 product-variant-select"
                        onChange={(e) => {
                          e.preventDefault();
                          selectedPriceShow(data.id, e);
                        }}
                      >
                        {data.packSize1 && (
                          <option
                            value="1"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize1} dose</span>-
                            <span>{data.variantPrice1} kr</span>
                          </option>
                        )}
                        {data.packSize2 && (
                          <option
                            value="2"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize2} dose</span>-
                            <span>{data.variantPrice2} kr</span>
                          </option>
                        )}
                        {data.packSize3 && (
                          <option
                            value="3"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize3} dose</span>-
                            <span>{data.variantPrice3} kr</span>
                          </option>
                        )}
                        {data.packSize4 && (
                          <option
                            value="4"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize4} dose</span>-
                            <span>{data.variantPrice4} kr</span>
                          </option>
                        )}
                        {data.packSize5 && (
                          <option
                            value="5"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize5} dose</span>-
                            <span>{data.variantPrice5} kr</span>
                          </option>
                        )}
                      </Form.Select>
                      <button
                        className="btn-danger w-50 border-0 add-to-cart-btn"
                        onClick={() => addToCart(data.id)}
                      >
                        <FaIcons.FaCartPlus size="1em" /> <span> aKöp</span>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : newProducts.map((data, index) => (
              <Col
              sm={6}
              md={4}
              lg={4}
              xl={3}
              xxl={3}
                className="products-cards"
                key={index}
              >
                <Card className="text-center product-card">
                  <Card.Body>
                    <Card.Title>
                      <div className="img-wrapper position-relative">
                        <Link to={`/products/details/${data.slug}`}>
                          <img
                            src={`${BACKEND_BASE_URL}${data.image}`}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                        <div className="product-flag-container">
                          {data.flagText1 != null && data.flagText != "" && (
                            <span className="product-flag">
                              {data.flagText1}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="product-details">
                      <Link to={`/products/details/${data.slug}`}>
                        {data.name}
                      </Link>
                    </Card.Text>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-rating d-flex align-items-center">
                        <BsIcons.BsStarFill
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStarFill
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStarHalf
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStar
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <BsIcons.BsStar
                          style={{ marginRight: "3px" }}
                          size="1em"
                        />
                        <span className="ps-1 ">(5)</span>
                      </div>
                      <div className="product-price d-flex flex-column align-items-center">
                        {isOnChanged == "" || isOnChanged == null ? (
                          <>
                            <span>({data.unitPrice1}/st)</span>
                            <span>{data.variantPrice1} kr</span>
                            {data.oldPrice1 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice1} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 1 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice1}/st)</span>
                            <span>{data.variantPrice1} kr</span>
                            {data.oldPrice1 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice1} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 2 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice2}/st)</span>
                            <span>{data.variantPrice2} kr</span>
                            {data.oldPrice2 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice2} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 3 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice3}/st)</span>
                            <span>{data.variantPrice3} kr</span>
                            {data.oldPrice3 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice3} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 4 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice4}/st)</span>
                            <span>{data.variantPrice4} kr</span>
                            {data.oldPrice4 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice4} kr
                              </span>
                            )}
                          </>
                        ) : selectedValue == 5 &&
                          selectedProductId == data.id ? (
                          <>
                            <span>({data.unitPrice5}/st)</span>
                            <span>{data.variantPrice5} kr</span>
                            {data.oldPrice5 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice5} kr
                              </span>
                            )}
                          </>
                        ) : (
                          <>
                            <span>({data.unitPrice1}/st)</span>
                            <span>{data.variantPrice1} kr</span>
                            {data.oldPrice1 && (
                              <span className="text-decoration-line-through">
                                {data.oldPrice1} kr
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {/* New Products */}
                    <div className="d-flex mt-1">
                      <Form.Select
                        ref={sendCol}
                        className="w-100 product-variant-select"
                        onChange={(e) => {
                          e.preventDefault();
                          selectedPriceShow(data.id, e);
                        }}
                      >
                        {data.packSize1 && (
                          <option
                            value="1"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize1} dose</span>-
                            <span>{data.variantPrice1} kr</span>
                          </option>
                        )}
                        {data.packSize2 && (
                          <option
                            value="2"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize2} dose</span>-
                            <span>{data.variantPrice2} kr</span>
                          </option>
                        )}
                        {data.packSize3 && (
                          <option
                            value="3"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize3} dose</span>-
                            <span>{data.variantPrice3} kr</span>
                          </option>
                        )}
                        {data.packSize4 && (
                          <option
                            value="4"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize4} dose</span>-
                            <span>{data.variantPrice4} kr</span>
                          </option>
                        )}
                        {data.packSize5 && (
                          <option
                            value="5"
                            className="d-flex justify-content-between"
                          >
                            <span>{data.packSize5} dose</span>-
                            <span>{data.variantPrice5} kr</span>
                          </option>
                        )}
                      </Form.Select>
                      <button
                        className="btn-danger w-50 border-0 add-to-cart-btn"
                        onClick={() => addToCart(data.id)}
                      >
                        <FaIcons.FaCartPlus size="1em" /> <span> aKöp</span>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default Product;
