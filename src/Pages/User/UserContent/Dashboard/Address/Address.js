import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Address.css'

const Address = () => {

    const link = 'https://backend-ecommerce.trodad.com/api/product/new-price'

    
    return (
        <div className="address mt-3 mb-5">
            <p className="mb-4">The following addresses will be used on the checkout page by default.</p>

            <Row>
                <Col lg={3}>
                    <h3>Billing address</h3>

                    <Link to='billing-address'
                    state = {link}>
                        Edit
                    </Link>
                    <address>
                        Tanver Mehede
                        <br />
                        Mohakhali DOHS
                        <br />
                        Dhaka
                        <br />
                        Dhaka
                        <br />
                        1216
                    </address>
                </Col>
                <Col lg={3}>
                    <h3>Shipping address</h3>

                    
                    <Link to='billing-address'>
                        Edit
                    </Link>
                    <address>
                        Tanver Mehede
                        <br />
                        Mohakhali DOHS
                        <br />
                        Dhaka
                        <br />
                        Dhaka
                        <br />
                        1216
                    </address>
                </Col>
            </Row>
        </div>
    );
};

export default Address;