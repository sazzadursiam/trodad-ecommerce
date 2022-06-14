import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Products/Product";
import { Container } from "react-bootstrap";

const ProductCategory = () => {
    


  return (
    <div>
      <Header />
      <div className="mt-5">
        <Container>
          <Product displayNone="d-none" />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategory;
