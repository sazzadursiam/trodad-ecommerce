import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './UserContent.css'

const UserContent = () => {
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
                        <div className="leftbar">
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
                                    <li>
                                        <Link to=''>Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Orders</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Gift Cards</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Account Details</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Download</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Addreases</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    {/* Right bar */}
                    <Col md={8} lg={9}>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserContent;