import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const { orderId } = useParams();
    return (
        <div className='address'>
            <p className='fs14'>Order # <span className='bg_yellow'>{orderId}</span> was placed on <span className='bg_yellow'>June 13, 2022</span> and is currently <span className='bg_yellow'>Processing.</span></p>



            <div className="order_details">
                <h3>Order details</h3>
                <div className='order_details_content my-4'>

                    <div className="d-flex justify-content-between align-items-center border-bottom border-3">
                        <p className='fw-bold fs14 my-2'>PRODUCT</p>
                        <p className='fw-bold fs14 my-2'>TOTAL</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                        <p className='fs14 my-2'>Bag Cover ( SPECIAL EDITION ) × 3</p>
                        <p className='fw-bold fs14 my-2'>1,200.00৳</p>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                        <p className='fw-bold fs14 my-2'>Subtotal:</p>
                        <p className='fw-bold fs14 my-2'>1,200.00৳</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                        <p className='fw-bold fs14 my-2'>Shipping :</p>
                        <p className='fw-bold fs14 my-2'>60.00৳</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                        <p className='fw-bold fs14 my-2'>Payment method :</p>
                        <p className='text-muted fs14 my-2'>Cash on delivery</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                        <p className='fw-bold fs14 my-2'>Total :</p>
                        <p className='fw-bold fs14 my-2'>1,260.00৳</p>
                    </div>


                </div>
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

            {/* user gamil */}
            <p className='g-mail fst-italic'>tanverme@gmail.com</p>
        </div>
    );
};

export default OrderDetails;