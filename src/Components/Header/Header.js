import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
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
import "./Header.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { Link_Path_URL } from "../../Utils/LinkPath";
import { UserContext } from "../../App";

const Header = () => {
  const { slugName, setSlugName } = useContext(UserContext);
  const [navData, setNavData] = useState([]);
  const [navDataBrand, setNavDataBrand] = useState([]);

  const getday = new Date();
  const day = getday.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = daylist[day];
  // console.log("Today is : " + daylist[day] + ".");

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
    navDynamicData();
  }, []);

  return (
    <div className="header">
      {/* desktop header */}
      <div className="desktop_header ">
        {/* Top Header */}
        <div className="top_header">
          <Container fluid="xl">
            <div className="d-flex flex-wrap justify-content-md-between justify-content-center align-items-center py-3">
              <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                <FaIcons.FaPhoneAlt className="me-2 cl_navy" />
                <a href="tel://020-0753464">020-0753464</a>
              </span>
              <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                <FaIcons.FaRegClock className="me-2 cl_navy" />

                <span className="cl_light_grey">{today}</span>
              </span>
              <span className="me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/underconstruction">The snus report</Link>
              </span>
              <span className="me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/underconstruction">Privacy Policy</Link>
              </span>
              <span className="me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/underconstruction">Customer service</Link>
              </span>
              <span className="me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/underconstruction">Shipping & delivery time</Link>
              </span>
              <span className="me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/underconstruction">About Snusbolaget</Link>
              </span>
              <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/underconstruction">
                  <FaIcons.FaCircleNotch className="me-2 cl_navy" />
                  The snus journal
                </Link>
              </span>
              <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                <Link to="/my">
                  My page
                  <FaIcons.FaUser className="ms-2" />
                </Link>
              </span>
            </div>
          </Container>
        </div>
        {/* middle header */}
        <div className="middle_header">
          <Container>
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
              <Link to="/">
                <div className="ecom_logo">
                  <img src={require("../../Assets/Header/logo.png")} alt="" />
                </div>
              </Link>
              <div>
                <Form className="" onSubmit={handleSubmit}>
                  <InputGroup className="">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <Button type="submit">Search</Button>
                  </InputGroup>
                </Form>
              </div>
              <div>
                <Link to="/checkout">
                  <Card className=" text-white cart_design">
                    <Card.Body>
                      <div className="d-flex align-items-center w-100 ">
                        <div className="d-flex align-items-center me-3 w-25">
                          <FaIcons.FaShoppingCart className="me-2" />1
                        </div>
                        <div className="d-flex align-items-center w-75 justify-content-end">
                          12,000 kr
                          <FaIcons.FaChevronCircleRight className="ms-3" />
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        {/* bottom Header */}
        <div className="bottom_header">
          <Container>
            <Nav className=" position-relative">
              <Nav.Link as={Link} to="/" className="py-3 bg_smooky">
                <FaIcons.FaHome className="text-white " />
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/products/category/new-price"
                onClick={() => setSlugName("new-price")}
                className="py-3"
              >
                New Prices
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products/category/new"
                onClick={() => setSlugName("new")}
              >
                New
              </Nav.Link>

              {navData.map((data, i) =>
                data.sub_category.length ? (
                  <NavDropdown title={data.name} key={i}>
                    {data.sub_category.map((category, j) => (
                      <NavDropdown.Item key={j} as={Link} to="/products">
                        <p
                          className="m-0"
                          style={{ color: "#005ea1", fontSize: "14px" }}
                        >
                          {category.name}
                        </p>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link as={Link} to="/products" className=" py-3" key={i}>
                    {data.name}
                  </Nav.Link>
                )
              )}

              <Nav.Link as={Link} to="/products" className=" py-3">
                Election manifesto 2022
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className=" py-3 bg-danger">
                Subscribe
              </Nav.Link>

              <NavDropdown title="Brand">
                {navDataBrand.map((dropdownItem, i) => (
                  <NavDropdown.Item as={Link} to="/products" key={i}>
                    <p
                      className="m-0"
                      style={{ color: "#005ea1", fontSize: "14px" }}
                    >
                      {dropdownItem.brandName}
                    </p>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Container>
        </div>
        <div className="bottom_header_2 bg_light_grey ">
          <Container>
            <div className="d-flex justify-content-center ">
              <span className="d-flex align-items-center pe-5 py-1">
                <FaIcons.FaCheck className="me-2 cl_light_navy" />
                Free shipping options from SEK 199
              </span>
              <span className="d-flex align-items-center pe-5  py-1">
                <FaIcons.FaCheck className="me-2 cl_light_navy" />
                Fast deliveries
              </span>
              <span className="d-flex align-items-center pe-5  py-1">
                <FaIcons.FaCheck className="me-2 cl_light_navy" />
                Over 500 types of snus
              </span>
            </div>
          </Container>
        </div>
      </div>

      {/* mobile header */}
      <div className="mobile_header">
        <Navbar
          key="false"
          bg="light"
          expand="false"
          className="mb-3 mobile_nav"
        >
          <Container>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />

            <Navbar.Brand href="#">Tobak Shandel</Navbar.Brand>

            <Navbar.Brand href="#" className="border-start border-2">
              <div className="d-flex align-items-center px-3">
                <FaIcons.FaShoppingCart className="me-2" />1
              </div>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-false"
              aria-labelledby="offcanvasNavbarLabel-expand-false"
              placement="start"
            >
              <Offcanvas.Header closeButton className="bg_navy">
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                  <span className="d-flex align-items-center me-3 me-md-2 me-lg-3 me-xl-0">
                    <Link to="/">
                      <FaIcons.FaUser className="ms-2 text-light" />
                    </Link>
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">New Prices</Nav.Link>
                  <Nav.Link href="#action2">News</Nav.Link>

                  <NavDropdown
                    title="Snuff"
                    id="offcanvasNavbarDropdown-expand-false"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="All White Portion"
                    id="offcanvasNavbarDropdown-expand-false"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Make Your Own Snus"
                    id="offcanvasNavbarDropdown-expand-false"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#action2">Mixpack</Nav.Link>
                  <Nav.Link href="#action2">Election manifesto 2022</Nav.Link>
                  <Nav.Link href="#action2">Subscribe</Nav.Link>

                  <NavDropdown
                    title="Brand"
                    id="offcanvasNavbarDropdown-expand-false"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
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
        {/* ))} */}
      </div>
    </div>
  );
};

export default Header;
