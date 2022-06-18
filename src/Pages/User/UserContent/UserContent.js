import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './UserContent.css'

const UserContent = () => {

    const [clickState, setClickState] = useState();

    const ToggleClass = (index) => {
        setClickState(index);
    };
    const logoutUser = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('LOGGED_IN_USER_ID');
      }

    return (

        <div className="userProfile">

            {/* pageTitle */}
            <div className="pageTitle mb-4">
                <Container className="inner">
                    <h1 className="text-uppercase">MY ACCOUNT</h1>
                    <small className="text-uppercase">DASHBOARD</small>
                </Container>
            </div>

            {/* content */}
            <Container fluid='xl'>
                <Row>
                    {/* left bar */}
                    <Col md={4} lg={3} >
                        <div className="leftbar  h-100 ">
                            {/* leftbar_top */}
                            <div className="leftbar_title mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="profile_image me-3">
                                        <img src="https://toppng.com//public/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png" alt="" />
                                    </div>
                                    <div className="profile_name">
                                        <span> Tanver Mehede </span>
                                    </div>
                                </div>
                            </div>
                            {/* leftbar_content */}
                            <div className="leftbar_content">
                                <ul>
                                    <Link to='' onClick={() =>ToggleClass(1)}>
                                        <li className={`${clickState === 1 ? 'active' : ''}`}>
                                            Dashboard
                                        </li>
                                    </Link>
                                    <Link to='orders' onClick={() =>ToggleClass(2)}>
                                        <li className={`${clickState === 2 ? 'active' : ''}`}>
                                            Orders
                                        </li>
                                    </Link>
                                    {/* <Link to='' onClick={() =>ToggleClass(3)}>
                                        <li className={`${clickState === 3 ? 'active' : ''}`}>
                                            Gift Cards
                                        </li>
                                    </Link> */}
                                    <Link to='edit-account' onClick={() =>ToggleClass(4)}>
                                        <li className={`${clickState === 4 ? 'active' : ''}`}>
                                            Account Details
                                        </li>
                                    </Link>
                                    <Link to='address' onClick={() =>ToggleClass(6)}>
                                        <li className={`${clickState === 6 ? 'active' : ''}`}>
                                            Addreases
                                        </li>
                                    </Link>
                                    <Link to='/' onClick={logoutUser}>
                                        <li className={`${clickState === 7 ? 'active' : ''}`}>
                                            Logout
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    {/* Right bar */}
                    <Col md={8} lg={9}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserContent;