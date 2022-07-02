import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import * as HiIcon from "react-icons/hi";
import * as BsIcon from "react-icons/bs";
import * as AiIcon from "react-icons/ai";
import * as MdIcon from "react-icons/md";
import "./Header.css";
import * as FaIcons from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Link_Path_URL } from "../../Utils/LinkPath";
import { UserContext } from "../../App";
import { BACKEND_BASE_URL } from "../GlobalVariables";

const Header = (props) => {
  const { slug } = useParams();
  // console.log("slug", slug);
  const { cartQuantity, cartTotal, setCartQuantity, setCartTotal } =
    useContext(UserContext);
  const [navData, setNavData] = useState([]);
  const [navDataBrand, setNavDataBrand] = useState([]);

  const [scrollValue, setscrollValue] = useState(0);

  useEffect(() => {
    const addClass = document.querySelector(".sticky_header");
    const mainSection = document.querySelector(".main_section");

    if (scrollValue >= 30) {
      addClass.classList.add("fixed");
      mainSection.classList.add("space");
    } else {
      addClass.classList.remove("fixed");
      mainSection.classList.remove("space");
    }
  });

  useEffect(() => {
    const cartQuantityget = localStorage.getItem("cartProductQuantity");
    const cartTotalget = localStorage.getItem("cartTotal");
    setCartQuantity(cartQuantityget);
    setCartTotal(cartTotalget);
  }, [cartTotal]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log(navData);

  const navDynamicData = () => {
    axios.get(`${Link_Path_URL}api/index-master-get`).then((res) => {
      setNavData(res.data.allProductCaregories);
      setNavDataBrand(res.data.allBrands);
    });
  };
  useEffect(() => {
    allProductForSearch();
    navDynamicData();
  }, []);

  window.addEventListener("scroll", () => {
    setscrollValue(window.scrollY);
  });

  console.log(scrollValue);

  // =============== Search Product ====================
  const [open, setOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchVal, setSearchVal] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);

  const allProductForSearch = () => {
    axios.get(`${Link_Path_URL}api/all-product`).then((res) => {
      setSearchProduct(res.data.allProducts);
      console.log(res.data);
    });
  };

  // useEffect(() => {
  //   const saearchResult = searchProduct.filter((productData) => {
  //     return productData.name.toLowerCase().match(searchVal.toLowerCase());
  //   });
  //   setFilteredResult(saearchResult);
  //   console.log(filteredResult);
  // }, [searchVal]);

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    // const value = e.target.value
    setSearchText(e.target.value);

    const matchedProducts = searchProduct.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResult(matchedProducts);
  };

  return (
    <div className="header">
      {/* desktop header */}
      <div className="desktop_header ">
        {/* Top Header */}
        <div className="top_header">
          <Container fluid="xl">
            <div className="d-flex flex-wrap flex-md-wrap justify-content-md-between justify-content-center align-items-center py-3">
              <span className="me-3 me-md-2 me-lg-3 me-xl-0">
                Landets mest använda Snusbutik online!
              </span>

              <span className="d-flex align-items-center  py-1">
                <FaIcons.FaCheck className="me-2 cl_light_navy" />
                Fraktfritt på köp över 699
              </span>
              <span className="d-flex align-items-center   py-1">
                <FaIcons.FaCheck className="me-2 cl_light_navy" />
                Över 400 olika Snussorter
              </span>
              <span className="d-flex align-items-center   py-1">
                <FaIcons.FaCheck className="me-2 cl_light_navy" />
                snabb &amp; smidig leverans
              </span>
              <span className="me-3 me-md-2 me-lg-3 me-xl-0 d-flex align-items-center">
                <FaIcons.FaPhoneAlt className="me-2 cl_navy" />
                <span>
                  Kundservice : <br />
                  0300-379 00
                </span>
              </span>
              <div className="me-3 me-md-2 me-lg-3 me-xl-0">
                <span className="d-flex align-items-center">
                  <MdIcon.MdEmail
                    className="me-1 "
                    color="#003A59"
                    size="1.2em"
                  />
                  info@Tobakshandel.se
                  <FaIcons.FaFacebookF
                    className="mx-3"
                    color="#003A59"
                    size="1.2em"
                  />
                  <FaIcons.FaInstagram
                    className="me-1"
                    color="#003A59"
                    size="1.2em"
                  />
                </span>
              </div>
            </div>
          </Container>
        </div>
        <div className="sticky_header">
          {/* middle header */}
          <div className="middle_header ">
            <Container fluid="xl">
              <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                <Link to="/">
                  <div className="ecom_logo">
                    <img src={require("../../Assets/Header/logo.png")} alt="" />
                  </div>
                </Link>
                <div className="position-relative search_wrapper">
                  <InputGroup className="">
                    <FormControl
                      type="text"
                      placeholder="Sökresultat för produkter"
                      onChange={handleSearch}
                      onKeyUp={() =>
                        searchText == "" ? setOpen(false) : setOpen(true)
                      }
                    />
                    <Button
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      <BsIcon.BsSearch color="grey" size="1.2em" />
                    </Button>
                  </InputGroup>
                  <Collapse in={open}>
                    <div
                      id="example-collapse-text"
                      className="search_result rounded-2"
                    >
                      {filteredResult.length == 0
                        ? "No Product Found" 
                        : filteredResult.map((data, i) => (
                            <Link to={`/products/details/${data.slug}`}>
                              <div key={i} className="d-flex">
                                <img
                                  src={`${BACKEND_BASE_URL}/${data.image}`}
                                  height={30}
                                  width={30}
                                  alt={data.name}
                                />

                                <p className="ms-2">{data.name}</p>
                              </div>
                            </Link>
                          ))}
                    </div>
                  </Collapse>
                </div>
                <div>
                  <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                    <Link to="/my-account" className="text-dark">
                      {localStorage.getItem("customerName") === null
                        ? "LOGGA IN / REGISTRERA"
                        : localStorage.getItem("customerName")}
                      <FaIcons.FaUser className="ms-2" />
                    </Link>
                  </span>
                </div>

                <div>
                  <div className={`${props.cartHidden}`}>
                    {/* {cartQuantity != 0 && cartQuantity != null && ( */}
                    <Link to="/checkout">
                      <Card className=" text-white cart_design">
                        <Card.Body>
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center me-3 w-25">
                              <FaIcons.FaShoppingCart className="me-2" />
                              {cartQuantity}
                            </div>
                            <div className="d-flex align-items-center w-75 justify-content-end">
                              {Number(cartTotal).toFixed(2)} kr
                              <FaIcons.FaChevronCircleRight className="ms-2" />
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                    {/* )} */}
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {/* bottom Header */}
          <div className="bottom_header  ">
            <Container fluid="xl">
              <Nav className=" position-relative ">
                <Nav.Link
                  as={Link}
                  to="/"
                  className={`py-3 text-dark title ${slug ? "" : "bg_smooky"}`}
                  style={{ fontSize: "14px" }}
                >
                  Home
                </Nav.Link>

                {navData.map((data, i) =>
                  data.sub_category.length ? (
                    <li
                      className={`navbar-dropdown text-dark ${
                        slug === data.slug ? "bg_smooky" : ""
                      }`}
                      key={i}
                    >
                      <Link className={`title`} to="#">
                        {data.name} <FaIcons.FaAngleDown className="ms-1" />
                      </Link>
                      <div className="dropdown">
                        <Row className="w-50">
                          <Col md={12}>
                            <span className="fw-bold">Kategori</span> -{" "}
                            <Link
                              to={
                                "/products/category/" +
                                data.id +
                                "/" +
                                data.slug
                              }
                            >
                              {data.name}
                            </Link>
                          </Col>
                          {data.sub_category.map((category, i) => (
                            <Col md={6} className="my-1" key={i}>
                              <Link
                                to={
                                  "/products/category/" +
                                  data.id +
                                  "/" +
                                  data.slug +
                                  "/" +
                                  category.id +
                                  "/" +
                                  category.slug
                                }
                              >
                                {category.name}
                              </Link>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </li>
                  ) : (
                    <li className="navbar-dropdown" key={i}>
                      <Link
                        className={`title ${
                          slug === data.slug ? "bg_smooky" : ""
                        }${data.slug}`}
                        to={"/products/category/" + data.id + "/" + data.slug}
                      >
                        {data.name}
                      </Link>
                    </li>
                  )
                )}

                <Nav.Link
                  as={Link}
                  to="#"
                  className="title py-3"
                  style={{ fontSize: "14px" }}
                >
                  Prenumerera
                </Nav.Link>

                <li className="navbar-dropdown">
                  <Link className="title" to="/">
                    Varumärken <FaIcons.FaAngleDown className="ms-1" />
                  </Link>
                  <div className="dropdown">
                    <Row className="w-50">
                      <Col md={12}>
                        <span className="fw-bold">
                          <Link to="#">Varumärken</Link>
                        </span>
                      </Col>
                      {navDataBrand.map((dropdownItem, i) => (
                        <Col md={6} className="my-1" key={i}>
                          <Link
                            to={
                              "/brands/" +
                              dropdownItem.id +
                              "/" +
                              dropdownItem.slug +
                              "/products/"
                            }
                          >
                            {" "}
                            {dropdownItem.brandName}
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </li>
              </Nav>
            </Container>
          </div>

          <div className="bottom_header_2 bg_light_grey ">
            <Container>
              <div className="d-flex justify-content-center ">
                <span className="d-flex align-items-center pe-5 py-1">
                  <FaIcons.FaCheck className="me-2 cl_light_navy" />
                  Fria fraktalternativ från 199kr
                </span>
                <span className="d-flex align-items-center pe-5  py-1">
                  <FaIcons.FaCheck className="me-2 cl_light_navy" />
                  Snabba leveranser
                </span>
                <span className="d-flex align-items-center pe-5  py-1">
                  <FaIcons.FaCheck className="me-2 cl_light_navy" />
                  Över 500 sorters snus
                </span>
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div className="mobile_header">
        <Navbar key="false" expand="false" className="mb-3 mobile_nav">
          <Container>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false">
              <HiIcon.HiMenu color="white" size="1.5em" />
            </Navbar.Toggle>

            <Navbar.Brand href="#" className="text-light ">
              Tobak Shandel
            </Navbar.Brand>

            {cartQuantity != 0 && cartQuantity != null && (
              <Navbar.Brand
                as={Link}
                to="/checkout"
                className="border-start border-2"
              >
                <div className="d-flex align-items-center px-3 text-white">
                  {/* <Link to="/checkout"> */}
                  <FaIcons.FaShoppingCart className="me-2" />
                  {cartQuantity}
                  {/* </Link> */}
                </div>
              </Navbar.Brand>
            )}

            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-false"
              aria-labelledby="offcanvasNavbarLabel-expand-false"
              placement="start"
            >
              <Offcanvas.Header closeButton className="bg_navy">
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                  <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                    <Link to="/my-account" className="text-white">
                      {localStorage.getItem("customerName") === null
                        ? ""
                        : localStorage.getItem("customerName")}
                      <FaIcons.FaUser className="ms-2 text-light" />
                    </Link>
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {navData.map((data, i) =>
                    data.sub_category.length ? (
                      <NavDropdown title={data.name} key={i}>
                        {data.sub_category.map((category, j) => (
                          <NavDropdown.Item
                            key={j}
                            as={Link}
                            to={"/products/category/" + category.name}
                          >
                            <p
                              className="m-0 text-dark"
                              style={{ color: "#005ea1", fontSize: "14px" }}
                            >
                              {category.name}
                            </p>
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    ) : (
                      <Nav.Link
                        as={Link}
                        to={"/products/category/" + data.name}
                        className=" py-3"
                        key={i}
                      >
                        {data.name}
                      </Nav.Link>
                    )
                  )}

                  <Nav.Link as={Link} to="#" className="title py-3">
                    Prenumerera
                  </Nav.Link>

                  {/* <Link className="title" to="/">
                    Varumärken <FaIcons.FaAngleDown className="ms-1" />
                  </Link> */}
                  <NavDropdown title="Varumärken">
                    {navDataBrand.map((dropdownItem, i) => (
                      <NavDropdown.Item
                        key={i}
                        as={Link}
                        to={
                          "/brands/" +
                          dropdownItem.id +
                          "/" +
                          dropdownItem.slug +
                          "/products/"
                        }
                      >
                        <p
                          className="m-0 text-dark"
                          style={{ color: "#005ea1", fontSize: "14px" }}
                        >
                          {dropdownItem.brandName}
                        </p>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  <hr />

                  <Nav.Link href="#action1">The snus report</Nav.Link>
                  <Nav.Link href="#action1">Privacy Policy</Nav.Link>
                  <Nav.Link href="#action1">Customer service</Nav.Link>
                  <Nav.Link href="#action1">Shipping & delivery time</Nav.Link>
                  <Nav.Link href="#action1">About Snusbolaget</Nav.Link>
                  <Nav.Link href="#action1">The snus journal</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
