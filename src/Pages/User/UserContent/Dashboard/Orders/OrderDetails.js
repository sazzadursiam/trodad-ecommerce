import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const { orderId } = useParams();
    return (
        <div>
            <p>Order #{orderId} was placed on June 13, 2022 and is currently Processing.</p>

            <h3>Order details</h3>

            <div className="order_product_details">

            </div>

            <Row>
                <Col lg={4}>
                    <h3>Billing address</h3>
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
                <Col lg={4}>
                    <h3>Shipping address</h3>
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

export default OrderDetails;