import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Product from '../../Components/Products/Product';

const ProductCategory = () => {
    const { id } = useParams();
    console.log("check id", id);

    return (
        <div>
            <Header />
            <div className="mt-5">
                <Product displayNone='d-none'/>
            </div>
            <Footer />
        </div>
    );
};

export default ProductCategory;