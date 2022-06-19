import { Rating } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Link_Path_URL } from "../../../Utils/LinkPath";
import "./ProductDetails.css";
import Parser from "html-react-parser";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import { UserContext } from "../../../App";

const ProductDetails = () => {
  const { slug } = useParams();
  const { setCartQuantity, setCartTotal } = useContext(UserContext);


  const cartFunction = () => {
    const cartQuantitycheck = localStorage.getItem("cartProductQuantity");
    const cartTotalcheck = localStorage.getItem("cartTotal");
    setCartQuantity(cartQuantitycheck);
    setCartTotal(cartTotalcheck);
  };
  //=================================== Fetch Product Details ===================================

  const [productDetails, setProductDetails] = useState([]);
  console.log("productDetails", productDetails);
  const AllProductDetails = async () => {
    try {
      await axios
        .get(`${Link_Path_URL}api/products/single-details/${slug}`)
        .then((res) => {
          setProductDetails(res.data.singleProductDetails);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllProductDetails();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 300000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isOnChanged, setisOnChanged] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedPackSize, setSelectedPackSize] = useState("1");

  const selectedPriceShow = (e) => {
    e.preventDefault();
    setSelectedValue(e.target.value);
    setSelectedPackSize(e.target.value);
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
      
    } else {
      USER_TYPE = "Reg";
      USER_ID = localStorage.getItem("LOGGED_IN_USER_ID");

      console.log("Logged in user");
    }
    // sent data to backend
    console.log("Final user id", USER_ID);
    console.log("Final user Type", USER_TYPE);

    const formdata = new FormData();
    
    formdata.append("selectedPackSize",selectedPackSize);
    formdata.append("qty", 1);
    formdata.append("productId", productId);
    formdata.append("userId", USER_ID);
    formdata.append("userType", USER_TYPE);

    axios
      .post(`${Link_Path_URL}api/add-to-cart/save`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        localStorage.setItem(
          "cartProductQuantity",
          response.data.cartProductQuantity
        );
        localStorage.setItem("cartTotal", response.data.cartTotal);
        cartFunction();

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
    <div>
      <Header />
      <Container>
        <div className="product_details mt-5">
          {/* product_content */}
          <div className="product_content mb-5">
            <Row>
              {/* product thumbnails */}
              <Col md={5} className="product_thumbnails_details">
                <div className="product_thumbnails w-100">
                  <img
                    className="w-100"
                    src={`${Link_Path_URL}${productDetails.image}`}
                    alt=""
                  />
                </div>
                <div className="product_thumbnail_tag mb-3">
                  <div className="d-flex justify-content-between">
                    <h3>
                      <Badge bg="secondary">{productDetails.flagText1}</Badge>
                    </h3>
                    <h3>
                      <Badge bg="info">{productDetails.packSize1}-Pack</Badge>
                    </h3>
                  </div>
                </div>
              </Col>
              {/* product cart */}
              <Col md={7}>
                <div className="product_cart">
                  <div className="title">
                    {Parser("" + productDetails.description)}
                  </div>

                  <div className="check_box_border">
                    <div className="check_box_content" >
                      <div className="check_box">
                        {productDetails.packSize1 && (
                          <div className="form-check_border mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input mx-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="1"
                                onChange={selectedPriceShow}

                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                <div className="d-flex justify-content-between">
                                  <span>{productDetails.packSize1} dose</span>
                                  <span>{productDetails.variantPrice1} kr</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        )}
                        {productDetails.packSize2 && (
                          <div className="form-check_border mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input mx-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                // defaultChecked={true}
                                value="2"
                                onChange={selectedPriceShow}
                              />
                              <label
                                className="form-check-label "
                                htmlFor="flexRadioDefault2"
                              >
                                <div className="d-flex justify-content-between ">
                                  <span>
                                    {productDetails.packSize2}-pack (SEK{" "}
                                    {productDetails.unitPrice2} / pc)
                                  </span>
                                  <span>{productDetails.variantPrice2} kr</span>{" "}
                                </div>
                              </label>
                            </div>
                          </div>
                        )}
                        {productDetails.packSize3 && (
                          <div className="form-check_border mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input  mx-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                value="3"
                                onChange={selectedPriceShow}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault3"
                              >
                                <div className="d-flex justify-content-between ">
                                  <span>
                                    {productDetails.packSize3}-pack (SEK{" "}
                                    {productDetails.unitPrice3} / pc)
                                  </span>
                                  <span>{productDetails.variantPrice3} kr</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        )}
                        {productDetails.packSize4 && (
                          <div className="form-check_border mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input mx-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                                value="4"
                                onChange={selectedPriceShow}
                              />
                              <label
                                className="form-check-label "
                                htmlFor="flexRadioDefault4"
                              >
                                <div className="d-flex justify-content-between ">
                                  <span>
                                    {productDetails.packSize4}-pack (SEK{" "}
                                    {productDetails.unitPrice4} / pc)
                                  </span>
                                  <span>{productDetails.variantPrice4} kr</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        )}
                        {productDetails.packSize5 && (
                          <div className="form-check_border mb-3">
                            <div className="form-check test">
                              <input
                                className="form-check-input mx-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault5"
                                value="5"
                                onChange={selectedPriceShow}
                              />
                              <label
                                className="form-check-label "
                                htmlFor="flexRadioDefault5"
                              >
                                <div className="d-flex justify-content-between">
                                  <span>
                                    {productDetails.packSize5}-pack (SEK{" "}
                                    {productDetails.unitPrice5} / pc)
                                  </span>
                                  <span>{productDetails.variantPrice5} kr</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                      {isOnChanged == "" || isOnChanged == null ? (
                        <>
                          <div className="checbox_active_value mb-3">
                            <div className="d-flex justify-content-between align-items-center ms-4">
                              <div>
                                <span className="cl_light_grey">
                                  {productDetails.sku}
                                </span>
                              </div>

                              <div className="d-flex align-items-center  text-end">
                                <div className="me-2">
                                  <p className="m-0 fw-bold">New Price</p>
                                </div>

                                <div className="d-flex flex-column">
                                  <span className="discount_price">
                                    {productDetails.variantPrice1} kr
                                  </span>
                                  {productDetails.oldPrice1 && (
                                    <span className="text-decoration-line-through cl_light_grey">
                                      {productDetails.oldPrice1} kr
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : selectedValue == 1 ? (
                        <>
                          {" "}
                          <div className="checbox_active_value mb-3">
                            <div className="d-flex justify-content-between align-items-center ms-4">
                              <div>
                                <span className="cl_light_grey">
                                  {productDetails.sku}
                                </span>
                              </div>

                              <div className="d-flex align-items-center  text-end">
                                <div className="me-2">
                                  <p className="m-0 fw-bold">New Price</p>
                                </div>

                                <div className="d-flex flex-column">
                                  <span className="discount_price">
                                    {productDetails.variantPrice1} kr
                                  </span>
                                  {productDetails.oldPrice1 && (
                                    <span className="text-decoration-line-through cl_light_grey">
                                      {productDetails.oldPrice1} kr
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : selectedValue == 2 ? (
                        <>
                          {" "}
                          <div className="checbox_active_value mb-3">
                            <div className="d-flex justify-content-between align-items-center ms-4">
                              <div>
                                <span className="cl_light_grey">
                                  {productDetails.sku}
                                </span>
                              </div>

                              <div className="d-flex align-items-center  text-end">
                                <div className="me-2">
                                  <p className="m-0 fw-bold">New Price</p>
                                </div>

                                <div className="d-flex flex-column">
                                  <span className="discount_price">
                                    {productDetails.variantPrice2} kr
                                  </span>
                                  {productDetails.oldPrice2 && (
                                    <span className="text-decoration-line-through cl_light_grey">
                                      {productDetails.oldPrice2} kr
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : selectedValue == 3 ? (
                        <>
                          {" "}
                          <div className="checbox_active_value mb-3">
                            <div className="d-flex justify-content-between align-items-center ms-4">
                              <div>
                                <span className="cl_light_grey">
                                  {productDetails.sku}
                                </span>
                              </div>

                              <div className="d-flex align-items-center  text-end">
                                <div className="me-2">
                                  <p className="m-0 fw-bold">New Price</p>
                                </div>

                                <div className="d-flex flex-column">
                                  <span className="discount_price">
                                    {productDetails.variantPrice3} kr
                                  </span>
                                  {productDetails.oldPrice3 && (
                                    <span className="text-decoration-line-through cl_light_grey">
                                      {productDetails.oldPrice3} kr
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : selectedValue == 4 ? (
                        <>
                          {" "}
                          <div className="checbox_active_value mb-3">
                            <div className="d-flex justify-content-between align-items-center ms-4">
                              <div>
                                <span className="cl_light_grey">
                                  {productDetails.sku}
                                </span>
                              </div>

                              <div className="d-flex align-items-center  text-end">
                                <div className="me-2">
                                  <p className="m-0 fw-bold">New Price</p>
                                </div>

                                <div className="d-flex flex-column">
                                  <span className="discount_price">
                                    {productDetails.variantPrice4} kr
                                  </span>
                                  {productDetails.oldPrice4 && (
                                    <span className="text-decoration-line-through cl_light_grey">
                                      {productDetails.oldPrice4} kr
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : selectedValue == 5 ? (
                        <>
                          {" "}
                          <div className="checbox_active_value mb-3">
                            <div className="d-flex justify-content-between align-items-center ms-4">
                              <div>
                                <span className="cl_light_grey">
                                  {productDetails.sku}
                                </span>
                              </div>

                              <div className="d-flex align-items-center  text-end">
                                <div className="me-2">
                                  <p className="m-0 fw-bold">New Price</p>
                                </div>

                                <div className="d-flex flex-column">
                                  <span className="discount_price">
                                    {productDetails.variantPrice5} kr
                                  </span>
                                  {productDetails.oldPrice5 && (
                                    <span className="text-decoration-line-through cl_light_grey">
                                      {productDetails.oldPrice5} kr
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div className="checkbox_addCart">
                        <div className="d-flex justify-content-between align-items-center ms-4">
                          <Button
                            className="w_45 border-0"
                            variant="danger"
                            size="lg"
                            // onClick={() => addToCart(productDetails.id)}
                          >
                            Danger
                          </Button>
                          <Button
                            className="w_45 border-0"
                            variant="success"
                            size="lg"
                            onClick={() => addToCart(productDetails.id)}
                          >
                            Add To Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* product_description */}
          <div className=" mb-5">
            <Row>
              {/* product_description content */}
              <Col md={6} className="product_description">
                {Parser("" + productDetails.shortDescription)}
              </Col>

              {/* product review */}
              <Col md={6}>
                <div className="product_review">
                  <div className="product_review_content p-3">
                    {/* rating */}
                    <div className="rating  d-flex justify-content-center align-items-center mb-4">
                      <Rating
                        className="me-2"
                        style={{ color: "#666666", fontSize: "30px" }}
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <p className="m-0"> (12) reviews</p>
                    </div>

                    {/* description */}
                    <div className="description mb-4">
                      <h6>Customer Reviews for On! Coffee 6 mg Strong</h6>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Totam omnis sequi sit mollitia dolores illo
                        nostrum iste at repellat consequuntur, architecto
                        aperiam quidem eos ipsam rerum ipsa hic odit aliquam.
                      </p>
                    </div>

                    {/* review_submission */}
                    <div className="review_submission mb-4">
                      <Row>
                        <Col md={2}>
                          <img
                            className="w-100"
                            src={require("../../../Assets/Products/volt-blue.png")}
                            alt=""
                          />
                        </Col>
                        <Col md={10}>
                          <Form>
                            <div className="rating_padding bg-light">
                              <div className="d-flex justify-content-center align-items-center mb-4 py-2">
                                <p className="mb-0 me-2 fs20"> Your rating: </p>
                                <Rating
                                  className=""
                                  style={{ color: "#666666", fontSize: "30px" }}
                                  name="half-rating"
                                  defaultValue={4.5}
                                  precision={0.5}
                                />
                              </div>
                            </div>
                            <FloatingLabel
                              controlId="floatingTextarea"
                              label="Write a headline for your review"
                              className="mb-3"
                            >
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                required
                                style={{ height: "70px" }}
                              />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingTextarea"
                              label="What did you think of the product?"
                              className="mb-3"
                            >
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                required
                                style={{ height: "100px" }}
                              />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingTextarea"
                              label="What name do you want to be displayed?"
                              className="mb-3"
                            >
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                required
                                style={{ height: "70px" }}
                              />
                            </FloatingLabel>
                            <Button
                              className="w-100 border-0"
                              variant="light"
                              type="submit"
                            >
                              Submit
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </div>

                    {/* review */}
                    <div className="review">
                      <Rating
                        className="mb-2"
                        style={{ color: "#666666", fontSize: "25px" }}
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <h6 className="mb-1">Fantastic!</h6>
                      <p className="mb-1">
                        <span className="fw-bold me-2">Annika Andersson ,</span>
                        <span>March 11, 2022</span>
                      </p>
                      <p>
                        The coffee taste is very good and goes well with the
                        morning cup. You really wake up. It was easy to quit
                        smoking with these and has also reduced my intake of
                        coffee.
                      </p>
                    </div>
                    <div className="review">
                      <Rating
                        className="mb-2"
                        style={{ color: "#666666", fontSize: "25px" }}
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <h6 className="mb-1">Fantastic!</h6>
                      <p className="mb-1">
                        <span className="fw-bold me-2">Annika Andersson ,</span>
                        <span>March 11, 2022</span>
                      </p>
                      <p>
                        The coffee taste is very good and goes well with the
                        morning cup. You really wake up. It was easy to quit
                        smoking with these and has also reduced my intake of
                        coffee.
                      </p>
                    </div>
                    <div className="review">
                      <Rating
                        className="mb-2"
                        style={{ color: "#666666", fontSize: "25px" }}
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <h6 className="mb-1">Fantastic!</h6>
                      <p className="mb-1">
                        <span className="fw-bold me-2">Annika Andersson ,</span>
                        <span>March 11, 2022</span>
                      </p>
                      <p>
                        The coffee taste is very good and goes well with the
                        morning cup. You really wake up. It was easy to quit
                        smoking with these and has also reduced my intake of
                        coffee.
                      </p>
                    </div>
                    <div className="review">
                      <Rating
                        className="mb-2"
                        style={{ color: "#666666", fontSize: "25px" }}
                        name="half-rating"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <h6 className="mb-1">Fantastic!</h6>
                      <p className="mb-1">
                        <span className="fw-bold me-2">Annika Andersson ,</span>
                        <span>March 11, 2022</span>
                      </p>
                      <p>
                        The coffee taste is very good and goes well with the
                        morning cup. You really wake up. It was easy to quit
                        smoking with these and has also reduced my intake of
                        coffee.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* similar products */}
          <div className="similar_products">
            <div className="title w-100 text-center">
              <p className="py-2">Similar Products</p>
            </div>
            <div className="similar_products_slider">
              <Slider {...settings}>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="border-0">
                    <Card.Img
                      className="w-100"
                      variant="top"
                      src={require("../../../Assets/Products/volt-blue.png")}
                      alt=""
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <div className="d-flex justify-content-between">
                          <h5>
                            <Badge bg="secondary">NYTT PRIS</Badge>
                          </h5>
                          <h5>
                            <Badge bg="info">6-PACK</Badge>
                          </h5>
                        </div>
                        <p>Volts Pearls TWisted Berry All white portions</p>
                      </Card.Title>
                      <Card.Text>
                        <small className="line_height_12">
                          (SEK 29.80 / PC)
                        </small>

                        <span className="d-flex flex-column">
                          <span className="discount_price line_height_12">
                            192.45 kr
                          </span>
                          <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                            192.45 kr
                          </span>
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
