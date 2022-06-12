import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";
import "./products.css";

const Product = (props) => {

  let navigate = useNavigate();
  const handleClick = (navigateUrl) => {
    navigate(navigateUrl);
  };

   // =============== Fetch Products =============================
   const [newProducts, setNewProducts] = useState([]);
   const [productcategory, setproductcategory] = useState("new");

   const renderAllProducts = async () => {
     try {
       await axios
         .get(`${BACKEND_BASE_URL}/api/product/${productcategory}`)
         .then((res) => {
           setNewProducts(res.data.products);
           //   console.log(res.data.products);
           // setNewPriceProducts(res.data.products)
         });
     } catch (error) {
       console.log(error);
     }
   };
 
   useEffect(() => {
     renderAllProducts();
   },[]);

  return (
    <Container className='mb-5'>
      <h1 className="text-center mb-5 product-section-title">
        Snus online - Snusbolaget
      </h1>
      {/* <Row className={`${props.displayNone}`}>
        <Col xs={12}> */}
          <Row>
            <Col xs={6} md={3} className="products-tabs active">
              <a href="">Populära produkter</a>
            </Col>
            <Col xs={6} md={3} className="products-tabs ">
              <a href="">All White portion</a>
            </Col>
            <Col xs={6} md={3} className="products-tabs ">
              <a href="">Portionssnus</a>
            </Col>
            <Col xs={6} md={3} className="products-tabs ">
              <a href="">White portion</a>
            </Col>
          </Row>
        {/* </Col>
      </Row> */}

      <Row className="mt-5">
        <Col xs={12} md={6} lg={4} xl={3} className="products-cards">
          <Card className="text-center product-card">
            <Card.Body>
              <Card.Title>
                <div className="img-wrapper position-relative">
                  <img
                    src={require("../../Assets/Products/volt-mint.png")}
                    alt=""
                    className="img-fluid"
                  />
                  {/* <div className="product-flag-container"> */}
                  <span className="product-flag">Nytt pris</span>
                  {/* </div> */}
                </div>
              </Card.Title>
              <Card.Text className="product-details">
                VOLT Pearls Midnight Mint Strong All White Portion
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
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <span className="ps-1 ">(5)</span>
                </div>
                <div className="product-price d-flex flex-column align-items-center">
                  <span>(29,80 kr/st)</span>
                  <span>298,00 kr</span>
                  <span className="text-decoration-line-through">
                    379,90 kr
                  </span>
                </div>
              </div>
              <div className="d-flex mt-1">
                <Form.Select className="w-75 product-variant-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <button className="btn-danger w-50 border-0 add-to-cart-btn" onClick={()=> handleClick('/products/7')}>
                  <FaIcons.FaCartPlus size="1em" /> <span> aKöp</span>
                </button>
              </div>
            </Card.Body>
            {/* <Card.Footer className="border-bottom b">2 days ago</Card.Footer> */}
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} xl={3} className="products-cards">
          <Card className="text-center product-card">
            <Card.Body>
              <Card.Title>
                <div className="img-wrapper position-relative">
                  <img
                    src={require("../../Assets/Products/volt-mint.png")}
                    alt=""
                    className="img-fluid"
                  />
                  {/* <div className="product-flag-container"> */}
                  <span className="product-flag">Nytt pris</span>
                  {/* </div> */}
                </div>
              </Card.Title>
              <Card.Text className="product-details">
                VOLT Pearls Midnight Mint Strong All White Portion
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
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <span className="ps-1 ">(5)</span>
                </div>
                <div className="product-price d-flex flex-column align-items-center">
                  <span>(29,80 kr/st)</span>
                  <span>298,00 kr</span>
                  <span className="text-decoration-line-through">
                    379,90 kr
                  </span>
                </div>
              </div>
              <div className="d-flex mt-1">
                <Form.Select className="w-75 product-variant-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <button className="btn-danger w-50 border-0 add-to-cart-btn" onClick={()=> handleClick('/products/8')}>
                  <FaIcons.FaCartPlus size="1em" /> <span> Köp</span>
                </button>
              </div>
            </Card.Body>
            {/* <Card.Footer className="border-bottom b">2 days ago</Card.Footer> */}
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} xl={3} className="products-cards">
          <Card className="text-center product-card">
            <Card.Body>
              <Card.Title>
                <div className="img-wrapper position-relative">
                  <img
                    src={require("../../Assets/Products/volt-mint.png")}
                    alt=""
                    className="img-fluid"
                  />
                  {/* <div className="product-flag-container"> */}
                  <span className="product-flag">Nytt pris</span>
                  {/* </div> */}
                </div>
              </Card.Title>
              <Card.Text className="product-details">
                VOLT Pearls Midnight Mint Strong All White Portion
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
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <span className="ps-1 ">(5)</span>
                </div>
                <div className="product-price d-flex flex-column align-items-center">
                  <span>(29,80 kr/st)</span>
                  <span>298,00 kr</span>
                  <span className="text-decoration-line-through">
                    379,90 kr
                  </span>
                </div>
              </div>
              <div className="d-flex mt-1">
                <Form.Select className="w-75 product-variant-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <button className="btn-danger w-50 border-0 add-to-cart-btn" onClick={()=> handleClick('/products/9')}>
                  <FaIcons.FaCartPlus size="1em" /> <span> Köp</span>
                </button>
              </div>
            </Card.Body>
            {/* <Card.Footer className="border-bottom b">2 days ago</Card.Footer> */}
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} xl={3} className="products-cards">
          <Card className="text-center product-card">
            <Card.Body>
              <Card.Title>
                <div className="img-wrapper position-relative">
                  <img
                    src={require("../../Assets/Products/volt-mint.png")}
                    alt=""
                    className="img-fluid"
                  />
                  {/* <div className="product-flag-container"> */}
                  <span className="product-flag">Nytt pris</span>
                  {/* </div> */}
                </div>
              </Card.Title>
              <Card.Text className="product-details">
                VOLT Pearls Midnight Mint Strong All White Portion
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
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <BsIcons.BsStar style={{ marginRight: "3px" }} size="1em" />
                  <span className="ps-1 ">(5)</span>
                </div>
                <div className="product-price d-flex flex-column align-items-center">
                  <span>(29,80 kr/st)</span>
                  <span>298,00 kr</span>
                  <span className="text-decoration-line-through">
                    379,90 kr
                  </span>
                </div>
              </div>
              <div className="d-flex mt-1">
                <Form.Select className="w-75 product-variant-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <button className="btn-danger w-50 border-0 add-to-cart-btn" onClick={()=> handleClick('/products/10')}>
                  <FaIcons.FaCartPlus size="1em" /> <span> Köp</span>
                </button>
              </div>
            </Card.Body>
            {/* <Card.Footer className="border-bottom b">2 days ago</Card.Footer> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
