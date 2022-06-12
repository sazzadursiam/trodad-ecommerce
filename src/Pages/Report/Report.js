import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Report = () => {
    return (
        <div className='bg-dark ' style={{ height: '100vh' }}>

            <div className='text-danger fw-bold d-flex flex-column align-items-center justify-content-center h-100'>
                <h1 >Page Under Construction</h1>
                <Link to='/'>
                    <Button className='border-0' variant="outline-warning">Back To Home</Button>
                </Link>
            </div>

        </div>
    );
};

export default Report;