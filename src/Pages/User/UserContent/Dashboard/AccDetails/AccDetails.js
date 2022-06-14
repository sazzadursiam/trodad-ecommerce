import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AccDetails = () => {
    return (
        <div className='edit_details'>
            <Form>
                <Row>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name *</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Display name *</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Tanver Mehede"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control required type="email" placeholder="tanvermehede51@gmail.com" defaultValue="Otto" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Current password (leave blank to leave unchanged)</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>New password (leave blank to leave unchanged)</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default AccDetails;