import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Journal from "../../Components/Journal/Journal";
import Product from "../../Components/Products/Product";
import { Link_Path_URL } from "../../Utils/LinkPath";

import "./Index.css";

const Index = () => {
  const [sliderData, setSliderData] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);

  const SliderData = () => {
    axios.get(`${Link_Path_URL}api/index-master-get`).then((res) => {
      setSliderData(res.data.allBanners);
      setAllProducts(res.data.allProductsMaster.data);
    });
  };
  useEffect(() => {
    SliderData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Container fluid className="index_page">
          <Row>
            {/* left banner */}
            <Col xxl={2} className="side_banner gx-0">
              <div className="bannerAdd">
                <img src={require("../../Assets/Banner1.jpg")} alt="" />
              </div>
            </Col>

            {/* main content */}
            <Col xl={12} xxl={8}>
              {/* Carousel */}
              <div className="mb-5 mt-4 " style={{ height: "400px" }}>
                <Carousel>
                  {sliderData.map((data, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={`${Link_Path_URL}${data.image}`}
                        alt=""
                        className="w-100"
                        style={{ height: "400px" }}
                      />
                      <Carousel.Caption>
                        <Link to={data.btnLink}>
                          <Button variant="danger">Buy Now</Button>
                        </Link>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              {/* card */}
              <div className="product_card">
                <Row className="justify-content-center">
                  {AllProducts.map((data, index) => {
                    if (index < 4) {
                      return (
                        <Col
                          sm={6}
                          md={4}
                          lg={4}
                          xl={3}
                          className="mb-3"
                          key={index}
                        >
                          <Card className="border-0">
                            <div className="img-wrapper d-flex align-items-center">
                              <Card.Img
                                variant="top"
                                src={`${Link_Path_URL}${data.image}`}
                                style={{ maxHeight: "390px" }}
                              />
                            </div>
                            <Card.Body className="text-center">
                              <Card.Title>{data.name}</Card.Title>
                              <Card.Text>
                                {data.price} KR / {data.packSize1}-PACK
                              </Card.Text>
                              <Button
                                as={Link}
                                to={`/products/details/${data.slug}`}
                                variant="danger"
                              >
                                Buy Here
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    }
                  })}
                </Row>
              </div>

              {/* banner */}
              <div className="mb-5">
                <Row>
                  <Col md={12}>
                    <div className="">
                      <img
                        src={require("../../Assets/volt.jpg")}
                        className="h-100 w-100"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            {/* right banner */}
            <Col xxl={2} className="side_banner gx-0">
              <div className="bannerAdd">
                <img src={require("../../Assets/Banner2.jpg")} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Product />
      <Journal />
      <Footer />
    </div>
  );
};

export default Index;
