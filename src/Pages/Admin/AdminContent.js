import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as LoIcons from "react-icons/io5";
import * as GrIcons from "react-icons/gr";
import * as ImIcons from "react-icons/im";
import * as HiIcons from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { Container, NavDropdown } from "react-bootstrap";

import "./AdminContent.css";
import AdminFooter from "./AdminFooter";

const Test = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="d-flex test">
      <nav className={`sidebar  ${toggleNav ? "close" : ""}`}>
        <header className="mt-3 mb-5">
          <div className="mx-4 image-text d-flex align-items-center justify-content-between">
            <span className="image">
              <img src={require("../../Assets/test.png")} alt="" />
            </span>

            <div className="text logo-text ">
              <span className="name">Trodad</span>
            </div>
          </div>

          <FaIcons.FaChevronCircleRight
            className="bx bx-chevron-right toggle"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links ps-0">
              <li className="nav-link">
                <Link to="brands">
                  <FaIcons.FaExternalLinkAlt className="icon" />
                  <span className="text nav-text">Brands</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="categories ">
                  <BiIcons.BiCategory className="icon" />
                  <span className="text nav-text">Product Categories</span>
                </Link>
              </li>
              <li className="nav-link d-flex align-items-center">
                <FaIcons.FaProductHunt className="icon" />
                <Link to="products ">
                  <span className="text nav-text">All Products</span>
                </Link>
                {/* <NavDropdown className='text' title="Products" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="products/add-new">Add Products</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="products">All Products</NavDropdown.Item>
                </NavDropdown> */}
              </li>
              <li className="nav-link">
                <Link to=" ">
                  <MdIcons.MdLocalShipping className="icon" />
                  <span className="text nav-text">Shipping Method</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="">
                  <BsIcons.BsSliders className="icon" />
                  <span className="text nav-text">Slider Elements</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="">
                  <FaIcons.FaTags className="icon" />
                  <span className="text nav-text">Coupons</span>
                </Link>
              </li>
              {/* <li className="nav-link">
                <Link to="locations">
                  <LoIcons.IoLocationSharp className="icon" />
                  <span className="text nav-text">Locations</span>
                </Link>
              </li> */}
              <li className="nav-link">
                <Link to="#">
                  <HiIcons.HiUserGroup className="icon" />
                  <span className="text nav-text">All Customers</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="">
                  <LoIcons.IoSettingsSharp className="icon" />
                  <span className="text nav-text">Settings</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to=" ">
                  <ImIcons.ImExit className="icon" />
                  <span className="text nav-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="rightbar">
        <Container fluid style={{ marginBottom: "100px" }}>
          <Outlet />
        </Container>
        <AdminFooter />
      </section>
    </div>
  );
};

export default Test;
