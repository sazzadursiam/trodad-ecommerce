import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <div>
            <div className="table-responsive ">
                <table className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col">ORDER</th>
                            <th scope="col">DATE</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">TOTAL</th>
                            <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* table data */}
                        <tr >

                            <td>
                                #2036
                            </td>
                            <td>
                                June 13, 2022
                            </td>
                            <td>
                                Processing
                            </td>


                            <td>
                                <span className='fw-bold me-3'>1,260.00৳</span>  for 3 items
                            </td>

                            <td>
                                <Link to='orderId'><Button className='border-0'  variant="success">View</Button></Link>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;