import { Rating } from '@mui/material';
import { Badge, Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './ProductDetails.css';


const ProductDetails = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 300000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (


        <div>
            <Header />
            <Container>
                <div className="product_details mt-5">
                    {/* product_content */}
                    <div className="product_content mb-5">
                        <Row>
                            {/* product thumbnails */}
                            <Col md={5} className='product_thumbnails_details'>
                                <div className="product_thumbnails w-100">
                                    <img className='w-100' src={require('../../../Assets/Products/product_test.png')} alt="" />
                                </div>
                                <div className="product_thumbnail_tag mb-3">
                                    <div className="d-flex justify-content-between">
                                        <h3>
                                            <Badge bg="secondary">NYTT PRIS</Badge>
                                        </h3>
                                        <h3>
                                            <Badge bg="info">6-PACK</Badge>
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                            {/* product cart */}
                            <Col md={7}>
                                <div className="product_cart">
                                    <div className="title">
                                        <h1>On! Coffee 6 mg Strong</h1>
                                        <p>On! Coffee 6 mg clearly tastes of freshly brewed coffee. The snus comes in dry, all-white mini portions with minimal runnyness and long-lasting taste.</p>
                                    </div>



                                    <div className="check_box_border">

                                        <div className="check_box_content">

                                            <div className="check_box">

                                                <div className="form-check_border mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            <div className="d-flex justify-content-between">
                                                                <span>1 dose</span>
                                                                <span>40.99 kr</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check_border mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked={true} />
                                                        <label className="form-check-label " htmlFor="flexRadioDefault2">
                                                            <div className="d-flex justify-content-between ">
                                                                <span> 5-pack (SEK 38.49 / pc)</span>
                                                                <span>192.45 kr</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check_border mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input  mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                            <div className="d-flex justify-content-between ">
                                                                <span> 5-pack (SEK 38.49 / pc)</span>
                                                                <span>192.45 kr</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check_border mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                        <label className="form-check-label " htmlFor="flexRadioDefault4">
                                                            <div className="d-flex justify-content-between ">
                                                                <span> 5-pack (SEK 38.49 / pc)</span>
                                                                <span>192.45 kr</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check_border mb-3">
                                                    <div className="form-check test">
                                                        <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                                        <label className="form-check-label " htmlFor="flexRadioDefault5">
                                                            <div className="d-flex justify-content-between">
                                                                <span> 5-pack (SEK 38.49 / pc)</span>
                                                                <span>192.45 kr</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="checbox_active_value mb-3">
                                                <div className="d-flex justify-content-between align-items-center ms-4">
                                                    <div>
                                                        <span className="cl_light_grey"> Art 301997-6P</span>
                                                    </div>
                                                    <div className="d-flex align-items-center  text-end">

                                                        <div className="me-2">
                                                            <p className="m-0 fw-bold">New Price</p>
                                                        </div>

                                                        <div className="d-flex flex-column">
                                                            <span className='discount_price'>
                                                                192.45 kr
                                                            </span>
                                                            <span className="text-decoration-line-through cl_light_grey">
                                                                192.45 kr
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="checkbox_addCart">
                                                <div className="d-flex justify-content-between align-items-center ms-4">
                                                    <Button className='w_45 border-0' variant="danger" size="lg">Danger</Button>
                                                    <Button className='w_45 border-0' variant="success" size="lg">Success</Button>
                                                </div>
                                            </div>

                                        </div>



                                    </div>


                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* product_description */}
                    <div className=" mb-5">
                        <Row>
                            {/* product_description content */}
                            <Col md={6} className='product_description'>
                                <h3>Om produkten On! Coffee 6 mg Strong</h3>
                                <p className='my-3'>
                                    on! Coffee 6 mg is a dry, white mini snus that is delivered in chalk-white small portions. on! Coffee offers clear, long-lasting flavors of coffee and portions that flow minimally. Each prill contains six milligrams of nicotine which is rapidly released.
                                </p>
                                <p className='mb-1'>Weight / prill: 0.3 g</p>
                                <p className='mb-1'>Nicotine content: 20 mg / g</p>
                            </Col>

                            {/* product review */}
                            <Col md={6}>
                                
                                <div className="product_review">

                                    <div className="product_review_content p-3">


                                        {/* rating */}
                                        <div className="rating  d-flex justify-content-center align-items-center mb-4">
                                            <Rating className='me-2' style={{ color: '#666666', fontSize: '30px' }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                                            <p className="m-0"> (12) reviews</p>
                                        </div>

                                        {/* description */}
                                        <div className='description mb-4'>
                                            <h6>
                                                Customer Reviews for On! Coffee 6 mg Strong
                                            </h6>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam omnis sequi sit mollitia dolores illo nostrum iste at repellat consequuntur, architecto aperiam quidem eos ipsam rerum ipsa hic odit aliquam.</p>
                                        </div>

                                        {/* review_submission */}
                                        <div className="review_submission mb-4">
                                            <Row>
                                                <Col md={2}>
                                                    <img className='w-100' src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                                </Col>
                                                <Col md={10}>
                                                    <Form>
                                                        <div className="rating_padding bg-light">
                                                            <div className="d-flex justify-content-center align-items-center mb-4 py-2">
                                                                <p className="mb-0 me-2 fs20"> Your rating: </p>
                                                                <Rating className='' style={{ color: '#666666', fontSize: '30px' }} name="half-rating" defaultValue={4.5} precision={0.5}  />
                                                            </div>
                                                        </div>
                                                        <FloatingLabel controlId="floatingTextarea" label="Write a headline for your review" className="mb-3">
                                                            <Form.Control as="textarea" placeholder="Leave a comment here" required style={{ height: '70px' }} />
                                                        </FloatingLabel>
                                                        <FloatingLabel controlId="floatingTextarea" label="What did you think of the product?" className="mb-3">
                                                            <Form.Control as="textarea" placeholder="Leave a comment here" required style={{ height: '100px' }} />
                                                        </FloatingLabel>
                                                        <FloatingLabel controlId="floatingTextarea" label="What name do you want to be displayed?" className="mb-3">
                                                            <Form.Control as="textarea" placeholder="Leave a comment here" required style={{ height: '70px' }} />
                                                        </FloatingLabel>
                                                        <Button className='w-100 border-0' variant="light" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </div>

                                        {/* review */}
                                        <div className="review">
                                            <Rating className='mb-2' style={{ color: '#666666', fontSize: '25px' }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                                            <h6 className='mb-1'>Fantastic!</h6>
                                            <p className='mb-1'>
                                                <span className='fw-bold me-2'>Annika Andersson ,</span>
                                                <span>March 11, 2022</span>
                                            </p>
                                            <p>
                                                The coffee taste is very good and goes well with the morning cup. You really wake up. It was easy to quit smoking with these and has also reduced my intake of coffee.
                                            </p>
                                        </div>
                                        <div className="review">
                                            <Rating className='mb-2' style={{ color: '#666666', fontSize: '25px' }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                                            <h6 className='mb-1'>Fantastic!</h6>
                                            <p className='mb-1'>
                                                <span className='fw-bold me-2'>Annika Andersson ,</span>
                                                <span>March 11, 2022</span>
                                            </p>
                                            <p>
                                                The coffee taste is very good and goes well with the morning cup. You really wake up. It was easy to quit smoking with these and has also reduced my intake of coffee.
                                            </p>
                                        </div>
                                        <div className="review">
                                            <Rating className='mb-2' style={{ color: '#666666', fontSize: '25px' }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                                            <h6 className='mb-1'>Fantastic!</h6>
                                            <p className='mb-1'>
                                                <span className='fw-bold me-2'>Annika Andersson ,</span>
                                                <span>March 11, 2022</span>
                                            </p>
                                            <p>
                                                The coffee taste is very good and goes well with the morning cup. You really wake up. It was easy to quit smoking with these and has also reduced my intake of coffee.
                                            </p>
                                        </div>
                                        <div className="review">
                                            <Rating className='mb-2' style={{ color: '#666666', fontSize: '25px' }} name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
                                            <h6 className='mb-1'>Fantastic!</h6>
                                            <p className='mb-1'>
                                                <span className='fw-bold me-2'>Annika Andersson ,</span>
                                                <span>March 11, 2022</span>
                                            </p>
                                            <p>
                                                The coffee taste is very good and goes well with the morning cup. You really wake up. It was easy to quit smoking with these and has also reduced my intake of coffee.
                                            </p>
                                        </div>



                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* similar products */}
                    <div className="similar_products">
                        <div className="title w-100 text-center">
                            <p className='py-2'>Similar Products</p>
                        </div>
                        <div className="similar_products_slider">
                            <Slider {...settings}>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='border-0'>
                                        <Card.Img className='w-100' variant="top" src={require('../../../Assets/Products/volt-blue.png')} alt="" />
                                        <Card.Body className='text-center'>
                                            <Card.Title>
                                                <div className="d-flex justify-content-between">
                                                    <h5>
                                                        <Badge bg="secondary">NYTT PRIS</Badge>
                                                    </h5>
                                                    <h5>
                                                        <Badge bg="info">6-PACK</Badge>
                                                    </h5>
                                                </div>
                                                <p>Volts Pearls TWisted Berry All white portions</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <small className='line_height_12'>(SEK 29.80 / PC)</small>

                                                <span className="d-flex flex-column">
                                                    <span className='discount_price line_height_12'>
                                                        192.45 kr
                                                    </span>
                                                    <span className="text-decoration-line-through cl_light_grey fw-bold line_height_12">
                                                        192.45 kr
                                                    </span>
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default ProductDetails;