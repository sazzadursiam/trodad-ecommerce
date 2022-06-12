import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Product from '../../Components/Products/Product';

const ProductCategory = () => {
    return (
        <div>
            <Header />
            <div className="mt-5">
                <Product />
            </div>
            <Footer />
        </div>
    );
};

export default ProductCategory;