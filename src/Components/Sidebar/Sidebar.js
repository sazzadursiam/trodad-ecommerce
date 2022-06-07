import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 admin_topNav ">
            <Container>
              <Navbar.Brand as={Link} to="" className="text-white">
                Trodad Admin Dashboard
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className="text-white"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    TRODAD
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="brands">
                      Brands
                    </Nav.Link>
                    <Nav.Link as={Link} to="categories">
                      Product Categories
                    </Nav.Link>
                    <Nav.Link as={Link} to="products/add-new">
                       Products
                    </Nav.Link>

                    <NavDropdown
                      title="Latest Projects"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item as={Link} to="latest-projects/category">
                        Project Category
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="latest-project">
                        All Projects
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
  );
};

export default Sidebar;
