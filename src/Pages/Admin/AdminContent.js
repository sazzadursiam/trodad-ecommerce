import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom';
import { Container, NavDropdown } from 'react-bootstrap';

import './AdminContent.css'
import AdminFooter from './AdminFooter';

const Test = () => {

  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="d-flex test">
      <nav className={`sidebar  ${toggleNav ? "close" : ''}`}>
        <header className="mt-3 mb-5">
          <div className="mx-4 image-text d-flex align-items-center justify-content-between">
            <span className="image">
              <img src={require('../../Assets/test.png')} alt="" />
            </span>

            <div className="text logo-text ">
              <span className="name">Trodad</span>
            </div>
          </div>


          <FaIcons.FaChevronCircleRight className='bx bx-chevron-right toggle' onClick={() => setToggleNav(!toggleNav)} />
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links ps-0">
              <li className="nav-link">
                <Link to='brands'>
                  <FaIcons.FaExternalLinkAlt className='icon' />
                  <span className="text nav-text">Brands</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to='categories '>
                  <FaIcons.FaProductHunt className='icon' />
                  <span className="text nav-text">Product Categories</span>
                </Link>
              </li>
              <li className="nav-link d-flex align-items-center">
                <FaIcons.FaProductHunt className='icon' />
                <NavDropdown className='text' title="Products" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="products/add-new">Add Products</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="products">All Products</NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>


        </div>

      </nav>

      <section className="rightbar">
        <Container fluid style={{ marginBottom: '100px' }}>
          <Outlet />
        </Container>
        <AdminFooter />
      </section>
    </div>
  );
};

export default Test;