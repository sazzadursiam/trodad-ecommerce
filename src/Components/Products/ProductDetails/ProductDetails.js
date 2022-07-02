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
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Parser from "html-react-parser";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import { UserContext } from "../../../App";
import { useRef } from "react";
import { BACKEND_BASE_URL } from "../../GlobalVariables";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { slug } = useParams();
  const { setCartQuantity, setCartTotal } = useContext(UserContext);

  const ratingTitle = useRef();
  const ratingComments = useRef();
  const ratingUserEmail = useRef();

  const cartFunction = () => {
    const cartQuantitycheck = localStorage.getItem("cartProductQuantity");
    const cartTotalcheck = localStorage.getItem("cartTotal");
    setCartQuantity(cartQuantitycheck);
    setCartTotal(cartTotalcheck);
  };

  //=================================== Fetch Product Details ===================================

  const [productDetails, setProductDetails] = useState([]);
  const [productID, setProductID] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [shippingInfo, setShippingInfo] = useState([]);

  const AllProductDetails = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}/api/products/single-details/${slug}`)
      .then((res) => {
        setProductDetails(res.data.singleProductDetails);
        setProductID(res.data.singleProductDetails.id);
        setSimilarProduct(res.data.relatedProducts);
        setShippingInfo(res.data.shippingInfo);
      });
  };
  useEffect(() => {
    AllProductDetails();
  }, [slug]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

    formdata.append("selectedPackSize", selectedPackSize);
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

  // ===================== Rating Submit =====================

  const [rating, setRating] = useState("");

  const submitRating = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("rating", rating);
    formdata.append("ratingTitle", ratingTitle.current.value);
    formdata.append("ratingComments", ratingComments.current.value);
    formdata.append("ratingUserEmail", ratingUserEmail.current.value);
    formdata.append("productId", productID);

    axios
      .post(`${BACKEND_BASE_URL}/api/products/rating-store`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          DisplayRatings();
          e.target.reset();
          setRating("");
        }
      });
  };

  // Display All Ratings

  const [allRatings, setAllRatings] = useState([]);
  const [ratingCount, setRatingCount] = useState(0);
  const [totalRatingCount, setTotalRatingCount] = useState();

  const avgRating = Number(totalRatingCount / ratingCount);

  const DisplayRatings = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/products/ratings/${productID}`)
      .then((res) => {
        setAllRatings(res.data.productRattings);
        setRatingCount(res.data.productRattings.length);
        setTotalRatingCount(res.data.sumOfRatting);
      });
  };

  useEffect(() => {
    DisplayRatings();
  }, [productID]);

  return (
    <div>
      <Header />
      <Container className="main_section">
        <div className="product_details my-5">
          {/* product_content */}
          <div className="product_content mb-5">
            <Row>
              {/* product thumbnails */}
              <Col md={5} className="product_thumbnails_details">
                <div className="product_thumbnails w-100">
                  <img
                    className="w-100"
                    src={`${BACKEND_BASE_URL}/${productDetails.image}`}
                    alt=""
                  />
                </div>
                <div className="product_thumbnail_tag mb-3">
                  <div className="d-flex justify-content-between">
                    <h3>
                      <Badge bg="secondary">
                        {(productDetails.flagText1 &&
                          productDetails.flagText1) ||
                          (productDetails.flagText2 &&
                            productDetails.flagText2) ||
                          (productDetails.flagText3 &&
                            productDetails.flagText3) ||
                          (productDetails.flagText4 &&
                            productDetails.flagText4) ||
                          (productDetails.flagText5 &&
                            productDetails.flagText5)}
                      </Badge>
                    </h3>
                    <h3>
                      <Badge bg="info">
                        {productDetails.packSize1
                          ? productDetails.packSize1
                          : productDetails.packSize2
                          ? productDetails.packSize2
                          : productDetails.packSize3
                          ? productDetails.packSize3
                          : productDetails.packSize4
                          ? productDetails.packSize4
                          : productDetails.packSize5
                          ? productDetails.packSize5
                          : ""}
                        -Pack
                      </Badge>
                    </h3>
                  </div>
                </div>
              </Col>
              {/* product cart */}
              <Col md={7}>
                <div className="product_cart">
                  <div className="title">
                    {Parser("" + productDetails.shortDescription)}
                  </div>

                  <div className="check_box_border">
                    <div className="check_box_content">
                      <div className="check_box">
                        <Row>
                          <Col md={6}>
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
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <span className="text-start">
                                        {productDetails.packSize1} Dosa
                                      </span>
                                      <span>
                                        {productDetails.variantPrice1} kr
                                      </span>
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
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <span className="text-start">
                                        {productDetails.packSize3}-pack (SEK{" "}
                                        {productDetails.unitPrice3} / pc)
                                      </span>
                                      <span>
                                        {productDetails.variantPrice3} kr
                                      </span>
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
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <span className="text-start">
                                        {productDetails.packSize5}-pack (SEK{" "}
                                        {productDetails.unitPrice5} / pc)
                                      </span>
                                      <span>
                                        {productDetails.variantPrice5} kr
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            )}
                          </Col>
                          <Col md={6}>
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
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <span className="text-start">
                                        {productDetails.packSize2}-pack (SEK{" "}
                                        {productDetails.unitPrice2} / pc)
                                      </span>
                                      <span>
                                        {productDetails.variantPrice2} kr
                                      </span>{" "}
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
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <span className="text-start">
                                        {productDetails.packSize4}-pack (SEK{" "}
                                        {productDetails.unitPrice4} / pc)
                                      </span>
                                      <span>
                                        {productDetails.variantPrice4} kr
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            )}
                          </Col>
                        </Row>
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
                        <div className="d-flex justify-content-between align-items-center ms-4 btn_wrapper">
                          <Button
                            className="w_45 border-0 bg_brown"
                            size="lg"
                            // onClick={() => addToCart(productDetails.id)}
                          >
                            Danger
                          </Button>
                          <Button
                            className="w_45 border-0 bg_green"
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

          <Row>
            <Tabs
              defaultActiveKey="BESKRIVNING"
              id="uncontrolled-tab-example"
              className="mb-3 tab_wrapper"
            >
              <Tab
                eventKey="BESKRIVNING"
                title="BESKRIVNING"
                className="tab_body"
              >
                {/* product_description */}
                <Col md={12} className="product_description">
                  {Parser("" + productDetails.description)}
                </Col>
              </Tab>
              <Tab
                eventKey=" RECENSIONER"
                title={`RECENSIONER (${ratingCount})`}
              >
                {/* product review */}
                <Col md={12}>
                  <div className="product_review">
                    <div className="product_review_content p-3">
                      {/* rating */}
                      <div className="rating  d-flex justify-content-center align-items-center mb-4">
                        <Rating
                          className="me-2"
                          style={{ fontSize: "30px" }}
                          name="read-only"
                          value={Math.round(avgRating)}
                          readOnly
                        />
                        <p className="m-0"> ({ratingCount}) reviews</p>
                      </div>

                      {/* description */}
                      <div className="description mb-4">
                        <h6>Customer Reviews for {productDetails.name}</h6>
                        <p>
                          Observera att samtliga recensioner skrivits av kunder
                          till Snusbolaget.se och att publicering endast sker i
                          informationssyfte. Snusbolaget förhandsgranskar och
                          godkänner samtliga inlägg innan publicering.
                        </p>
                      </div>

                      {/* review_submission */}
                      <div className="review_submission mb-4">
                        <Row>
                          <Col md={2}>
                            <img
                              className="w-100 p-4 p-sm-0"
                              src={`${BACKEND_BASE_URL}/${productDetails.image}`}
                              alt=""
                            />
                          </Col>
                          <Col md={10}>
                            <p>
                              Din e-postadress kommer inte att publiceras.
                              Obligatoriska fält är markerade med{" "}
                              <span className="text-danger">*</span>
                            </p>
                            <Form onSubmit={submitRating}>
                              <div className="rating_padding ">
                                <div className="d-flex justify-content-start align-items-center mb-4 py-2">
                                  <Form.Label className="me-2 mb-0">
                                    Ditt betyg
                                    <span className="text-danger mx-1"> *</span>
                                    :
                                  </Form.Label>
                                  <Rating
                                    className="rating"
                                    style={{
                                      fontSize: "24px",
                                    }}
                                    name="half-rating"
                                    value={Number(rating)}
                                    precision={0.5}
                                    onChange={(e) => {
                                      e.preventDefault();
                                      setRating(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustom01"
                                className="mb-3"
                              >
                                <Form.Label className="">
                                  Din recension{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  required
                                  style={{
                                    height: "150px",
                                    border: "2px solid #a5a5a554",
                                    borderRadius: "0px",
                                  }}
                                  ref={ratingTitle}
                                />
                              </Form.Group>
                              <Row>
                                <Form.Group
                                  as={Col}
                                  md="4"
                                  controlId="validationCustom01"
                                  className="mb-3"
                                >
                                  {" "}
                                  <Form.Label className="">
                                    Namn
                                    <span className="text-danger"> *</span>
                                  </Form.Label>
                                  <Form.Control
                                    required
                                    ref={ratingComments}
                                    style={{
                                      border: "2px solid #a5a5a554",
                                      borderRadius: "0px",
                                    }}
                                  />
                                </Form.Group>
                                <Form.Group
                                  as={Col}
                                  md="4"
                                  controlId="validationCustom01"
                                  className="mb-3"
                                >
                                  <Form.Label className="">
                                    E-post
                                    <span className="text-danger"> *</span>
                                  </Form.Label>
                                  <Form.Control
                                    a
                                    required
                                    style={{
                                      border: "2px solid #a5a5a554",
                                      borderRadius: "0px",
                                    }}
                                    ref={ratingUserEmail}
                                  />
                                </Form.Group>
                                <div className="form_check mb-4">
                                  <Form.Check
                                    type="checkbox"
                                    id="custom-switch"
                                    label="Spara mitt namn, e-post och webbplats i den hår webbläsaren till nästa
                                  gång jag kommenterar."
                                  />
                                </div>
                              </Row>
                              <Button
                                className="fw-bold"
                                type="submit"
                                style={{
                                  backgroundColor: "#212529",
                                  borderRadius: "0",
                                  padding: "5px 14px",
                                  fontSize: "14px",
                                }}
                              >
                                SKICKA IN
                              </Button>
                            </Form>
                          </Col>
                        </Row>
                      </div>

                      {/* review */}
                      <div className="review">
                        {allRatings.map((data, index) => (
                          <>
                            <div key={index}>
                              <Rating
                                className="mb-2"
                                style={{ fontSize: "25px" }}
                                name="half-rating"
                                defaultValue={data.rating}
                                precision={0.5}
                                readOnly
                              />
                              <h6 className="mb-1">{data.ratingUser}</h6>
                              <div className="mb-1">
                                <p className="fw-bold mb-0">
                                  {data.ratingUserEmail}
                                </p>
                                <span>
                                  {data.created_at.toString().slice(0, 10)}
                                </span>
                              </div>
                              <p>{data.ratingComments}</p>
                            </div>
                            <hr />
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Tab>
              <Tab
                eventKey="Frakt & Leverans"
                title="Frakt & Leverans"
                className="tab_body"
              >
                <Col>
                  <h4>
                    {shippingInfo.shippingMethod}
                    <span className="text-muted">
                      <small>&nbsp;({shippingInfo.shippingPrice})</small>{" "}
                    </span>
                  </h4>
                  {Parser("" + shippingInfo.shippingDetails)}
                </Col>
              </Tab>
              <Tab
                eventKey=" Frågor och svar"
                title=" Frågor och svar"
                className="tab_body"
              ></Tab>
            </Tabs>
          </Row>

          <div className=" mb-5">
            <Row>{/* product_description content */}</Row>
          </div>

          {/* similar products */}
          {similarProduct.length >= 3 && (
            <div className="similar_products">
              <div className="title w-100 text-center">
                <p className="py-2">Similar Products</p>
              </div>
              <div className="similar_products_slider">
                <Slider {...settings}>
                  {similarProduct.map((data, index) => (
                    <div key={index}>
                      <Card
                        className="text-dark border-0 similar_Product_card"
                        as={Link}
                        to={`/products/details/${data.slug}`}
                      >
                        <Card.Img
                          className="w-100"
                          variant="top"
                          src={`${BACKEND_BASE_URL}/${data.image}`}
                          alt=""
                        />
                        <Card.Body className="text-center">
                          <Card.Title>
                            <div className="d-flex justify-content-between">
                              {/* <h5>
                              <Badge bg="secondary">NYTT PRIS</Badge>
                            </h5> */}
                              <h5>
                                <Badge bg="info">{data.packSize1}-PACK</Badge>
                              </h5>
                            </div>
                            <p className="text-dark">{data.name}</p>
                          </Card.Title>
                          <Card.Text>
                            <small className="line_height_12 text-black-50">
                              (SEK {data.unitPrice1} / PC)
                            </small>

                            <span className="d-flex flex-column">
                              <span className="discount_price line_height_12 fw-bold">
                                192.45 kr
                              </span>
                              {data.oldPrice1 && (
                                <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12 text-black-50">
                                  {data.oldPrice1} kr
                                </span>
                              )}
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer shippingPolicy="d-none" />
    </div>
  );
};

export default ProductDetails;
