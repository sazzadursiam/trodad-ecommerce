import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";

import "./products.css";

const Product = () => {
  const { slugName } = useContext(UserContext);

  // =============== Fetch Products =============================
  const [newProducts, setNewProducts] = useState([]);

  const renderAllProducts = async () => {
    try {
      await axios
        .get(`${BACKEND_BASE_URL}/api/product/${slugName}`)
        .then((res) => {
          setNewProducts(res.data.products);
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

  const [filterTab, setFilterTab] = useState([]);

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
      setFilterTab(res.data.tabProducts);
      console.log(res.data.tabProducts);
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
        {filterTab.length != 0
          ? filterTab.map((data, index) => (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={3}
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
                          <span className="product-flag">{data.flagText1}</span>
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
                        <span>({data.unitPrice1}/st)</span>
                        <span>{data.price} kr</span>
                        <span className="text-decoration-line-through">
                          {data.oldPrice1} kr
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-1">
                      <Form.Select className="w-75 product-variant-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <button
                        className="btn-danger w-50 border-0 add-to-cart-btn"
                        // onClick={() => handleClick("/products/7")}
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
                xs={12}
                md={6}
                lg={4}
                xl={3}
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
                          <span className="product-flag">{data.flagText1}</span>
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
                        <span>({data.unitPrice1}/st)</span>
                        <span>{data.price} kr</span>
                        <span className="text-decoration-line-through">
                          {data.oldPrice1} kr
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-1">
                      <Form.Select className="w-75 product-variant-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <button
                        className="btn-danger w-50 border-0 add-to-cart-btn"
                        // onClick={() => handleClick("/products/7")}
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
