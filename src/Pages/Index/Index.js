import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import News from '../../Components/News/News';
import Product from '../../Components/Products/Product';




import './Index.css'

const Index = () => {

    return (
        <div>
            <Header />
            <div >
                <Container fluid className="index_page">
                    <Row>

                        {/* left banner */}
                        <Col xxl={2}  className='side_banner gx-0'>
                            <div className="bannerAdd">
                                <img src={require('../../Assets/left_add.jpg')} alt="" />
                            </div>
                        </Col>


                        {/* main content */}
                        <Col xl={12} xxl={8} >


                            {/* Carousel */}
                            <div className="mb-5 mt-4">
                                <Carousel>
                                    <Carousel.Item>
                                        <img src={require('../../Assets/slider.jpg')} alt="" className='w-100' />
                                        <Carousel.Caption>
                                            <Link to='/products/spicy'>
                                                <Button variant="danger">Buy Now</Button>
                                            </Link>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={require('../../Assets/slider.jpg')} alt="" className='w-100' />
                                        <Carousel.Caption>
                                            <Link to='/products/spicy2'>
                                                <Button variant="danger">Buy Now</Button>
                                            </Link>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                </Carousel>
                            </div>

                            {/* card */}
                            <div className="product_card">

                                <Row className='justify-content-center'>

                                    <Col md={2} lg={4} xl={3} xxl={3} className='mb-3'>
                                        <Card className="border-0" >
                                            <Card.Img variant="top" src={require('../../Assets/card_test.jpg')} style={{ maxHeight: '390px' }} />
                                            <Card.Body className="text-center">
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    192,45 KR / 6-PACK
                                                </Card.Text>
                                                <Button as={Link} to="/products/1" variant="danger">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={2} lg={4} xl={3} xxl={3} className='mb-3'>
                                        <Card className="border-0" >
                                            <Card.Img variant="top" src={require('../../Assets/card_test.jpg')} style={{ maxHeight: '390px' }} />
                                            <Card.Body className="text-center">
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    192,45 KR / 6-PACK
                                                </Card.Text>
                                                <Button as={Link} to="/products/2" variant="danger">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={2} lg={4} xl={3} xxl={3} className='mb-3'>
                                        <Card className="border-0" >
                                            <Card.Img variant="top" src={require('../../Assets/card_test.jpg')} style={{ maxHeight: '390px' }} />
                                            <Card.Body className="text-center">
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    192,45 KR / 6-PACK
                                                </Card.Text>
                                                <Button as={Link} to="/products/3" variant="danger">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={2} lg={4} xl={3} xxl={3} className='mb-3'>
                                        <Card className="border-0" >
                                            <Card.Img variant="top" src={require('../../Assets/card_test.jpg')} style={{ maxHeight: '390px' }} />
                                            <Card.Body className="text-center">
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    192,45 KR / 6-PACK
                                                </Card.Text>
                                                <Button as={Link} to="/products/4" variant="danger">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            {/* banner */}
                            <div className='mb-5'>
                                <Row >
                                    <Col md={12} >
                                        <div className=''>
                                            <img src={require('../../Assets/volt.jpg')} className='h-100 w-100' alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>

                        {/* right banner */}
                        <Col xxl={2} className='side_banner gx-0'>
                            <div className="bannerAdd">
                                <img src={require('../../Assets/right_add.jpg')} alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <Product />
            <News/>
            <Footer />
        </div>
    );
};

export default Index;