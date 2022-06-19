import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const BillingAddress = () => {
    return (
        <div className='edit_details'>
            <h5 className='fw-bold mb-4'>Shipping address</h5>
            <Form>
                <Row>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            defaultValue="Mark"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            defaultValue="Otto"
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Country / Region *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue="Bangladesh"
                    />
                </Form.Group>
                <Row>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Street address *</Form.Label>
                        <Form.Control required type="text" defaultValue="Mohakhali DOHS" />

                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Apartment, suite, unit, etc (optional)</Form.Label>
                        <Form.Control  type="text" placeholder="Apartment, suite, unit, etc (optional)" />

                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Town / City *</Form.Label>
                    <Form.Control required type="text" defaultValue="Dhaka" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>District *</Form.Label>
                    <Form.Control required type="text" defaultValue="Dhaka" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Postcode / ZIP (optional)</Form.Label>
                    <Form.Control type="text" defaultValue="1216" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control type="text" defaultValue="0183236" />
                </Form.Group>


               

                <Button variant="primary" type="submit">
                    Save Address
                </Button>

            </Form>
        </div>
    );
};

export default BillingAddress;