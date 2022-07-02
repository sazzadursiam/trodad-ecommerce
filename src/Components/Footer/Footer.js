import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = (props) => {
  return (
    <>
      <div
        className={`bg_grey footer_container mt_100 ${props.shippingPolicy} `}
      >
        {/* ====================== SHIPPING POLICY ========================= */}
        <div className="container ">
          <Row className="text-center d-flex justify-content-between">
            <Col md={3}>
              <div className="p-2 footer_body">
                <div className="footer_img_wrapper_1 mb-3">
                  <img
                    className="footer_img"
                    src={require("../../Assets/Footer/globe-free-img.png")}
                    alt="Globe"
                  />
                </div>
                <h5 className="footer_img_title"> Internationell leverans</h5>
                <p className="footer_img_desc">
                  Det elit tellus, ullamcorper mattis luctus nec, pulvinar
                  dapibus ett lejon.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer_body  p-2">
                <div className="footer_img_wrapper_1 mb-3">
                  <img
                    className="footer_img"
                    src={require("../../Assets/Footer/globe-free-img.png")}
                    alt="Globe"
                  />
                </div>
                <h5 className="footer_img_title"> Internationell leverans</h5>
                <p className="footer_img_desc">
                  Det elit tellus, ullamcorper mattis luctus nec, pulvinar
                  dapibus ett lejon.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer_body  p-2">
                <div className="footer_img_wrapper_1 mb-3">
                  <img
                    className="footer_img"
                    src={require("../../Assets/Footer/globe-free-img.png")}
                    alt="Globe"
                  />
                </div>
                <h5 className="footer_img_title"> Internationell leverans</h5>
                <p className="footer_img_desc">
                  Det elit tellus, ullamcorper mattis luctus nec, pulvinar
                  dapibus ett lejon.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer_body  p-2">
                <div className="footer_img_wrapper_1 mb-3">
                  <img
                    className="footer_img"
                    src={require("../../Assets/Footer/globe-free-img.png")}
                    alt="Globe"
                  />
                </div>
                <h5 className="footer_img_title"> Internationell leverans</h5>
                <p className="footer_img_desc">
                  Det elit tellus, ullamcorper mattis luctus nec, pulvinar
                  dapibus ett lejon.
                </p>
              </div>
            </Col>
          </Row>
          <hr className="footer_hr" />
          <Row className="d-flex align-items-center">
            <Col>
              <div className="footer_img_wrapper_2 mb-3">
                <img
                  className="footer_img"
                  src={require("../../Assets/Footer/e-handle.png")}
                  alt="E-handle"
                />
              </div>
            </Col>
            <Col>
              <div className="footer_img_wrapper_2 mb-3">
                <img
                  className="footer_img logo"
                  src={require("../../Assets/Footer/logo.png")}
                  alt="Logo"
                />
              </div>
            </Col>
            <Col>
              <div className="footer_img_wrapper_2 mb-3">
                <img
                  className="footer_img"
                  src={require("../../Assets/Footer/18+.png")}
                  alt="18+"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* ========================== FOOTER TOP ==== ===================== */}
      <div className="container-fluid border-top ">
        <div className={` container ${props.footerTop} text-light`}>
          <div className="footer__body">
            <Row className="pt_50 g-0">
              <Col xs={12} sm={6} md={4} className="mb_30">
                {/* <h3 className="mb-4 fs-5 text-dark">Trygg ehandel med:</h3> */}
                <Row className="pe-0 pe-sm-5">
                  {/* <Col xs={12}>
                    <div className="mb-3">
                      <img
                        src={require("../../Assets/Footer/payment_methods.png")}
                        alt="Payment Methods"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col> */}
                  <Col md={12}>
                    <div className="d-flex justify-content-center mb-4 ">
                      <img
                        src={require("../../Assets/18-symbol.png")}
                        alt=""
                        className="img-fluid rounded-3 bg-black"
                      />
                    </div>
                  </Col>
                  {/* <Col xs={4}>
                    <div className="brand mb-4">
                      <img
                        src={require("../../Assets/Footer/dhl.png")}
                        alt="DHL"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="brand mb-4">
                      <img
                        src={require("../../Assets/Footer/earlybird.png")}
                        alt="DHL"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="brand mb-4">
                      <img
                        src={require("../../Assets/Footer/airmee.png")}
                        alt="DHL"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="brand mb-4">
                      <img
                        src={require("../../Assets/Footer/postnord.png")}
                        alt="DHL"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="brand mb-4 ">
                      <img
                        src={require("../../Assets/Footer/budbee.png")}
                        alt="DHL"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="brand mb-4">
                      <img
                        src={require("../../Assets/Footer/instabox.png")}
                        alt="DHL"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </Col> */}
                </Row>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb_30 ps-5 pe-0 pe-sm-5 text-dark"
              >
                {/* <h3 className="mb-4 fs-5">Frågor? Kontakta kundservice</h3> */}
                <h3 className="mb-4 fs-5">INFORMATION</h3>
                {/* <p className="custom_anchor_tag">
                  <span>Phone:</span>
                  <a href="tel://+46-20-0753464" className="text-info">
                    {" "}
                    +46-20-0753464
                  </a>
                </p>
                <p className="custom_anchor_tag">
                  <a href="/kundservice/" className="text-info">
                    Click here to contact us
                  </a>
                </p> */}
                {/* <p className="phonetime mt_30">
                  Phone hours: Mon - Wed 8-17, Thu 8-16, Fri 8-17 Sat closed
                  &amp; Sun 9-12. Emails are usually answered within a couple of
                  hours. You can also find answers to the most common questions
                  by clicking on "Customer Service". We look forward to hearing
                  from you!
                </p> */}
                <p>Om Tobakshandel</p>
                <p>Köpvillkor</p>
                <p>Integritetspolicy</p>
                <p>Kontakt</p>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb_30 pe-0 pe-sm-5 text-dark"
              >
                {/* <h3 className="mb-4 fs-5">Hallo! Hei! Tjena! Hello!</h3> */}
                <h3 className="mb-4 fs-5">KONTAKT</h3>
                <p>
                  <span className="fw-bold">Butiksadress: </span>Stenbocksvägen
                  1 C, 611 66 Nyköping
                </p>
                <p>
                  {" "}
                  <span className="fw-bold">Växel: </span> 073-877 8406
                </p>
                <p>
                  <span className="fw-bold">E-post: </span>info@snushandel.se
                </p>
                {/* 
                <p children="mt_30">
                  Snusbolaget is expanding and you can now buy your snus from
                  both Switzerland and Norway. Click on the Swiss flag to be
                  directed to www.snusmarkt.ch, click on the Norwegian flag to
                  be directed to www.snushjem.no. See you there!
                </p> */}
                {/* <div className="d-flex justify-content-between ">
                  <div className="footer_flag_img">
                    <img
                      src={require("../../Assets/Footer/switzerland.png")}
                      alt="Switzerland"
                      className="img-fluid footer_img"
                    />
                  </div>
                  <div className="footer_flag_img">
                    <img
                      src={require("../../Assets/Footer/norway.png")}
                      alt="Norway"
                      className="img-fluid"
                    />
                  </div>
                  <div className="footer_flag_img">
                    <img
                      src={require("../../Assets/Footer/swiden.png")}
                      className="img-fluid"
                      alt="Swiden"
                    />
                  </div>
                  <div className="footer_flag_img">
                    {" "}
                    <img
                      src={require("../../Assets/Footer/happ.png")}
                      alt="Happ"
                      className="img-fluid"
                    />
                  </div>
                </div> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* ============================ FOOTER BOTTOM ============================ */}
      <div className={`footer_nav p-4 bg_grey`}>
        <div className="container d-md-flex justify-content-md-between align-items-center">
          <Row>
            <Col md={12} lg={6} className="d-none d-sm-block">
              <ul className="text-center text-dark footer_bottom">
                <Link to="/underconstruction" className="text-dark">
                  Snusrapporten
                </Link>
                <Link to="/underconstruction" className="text-dark">
                  Integritetspolicy
                </Link>
                <Link to="/underconstruction" className="text-dark">
                  {" "}
                  Kundservice
                </Link>
                <Link to="/underconstruction" className="text-dark">
                  Frakt &amp; leveranstid
                </Link>
                <Link to="/underconstruction" className="text-dark">
                  {" "}
                  Om Snusbolaget
                </Link>
                <Link to="/journals" className="text-dark">
                  Snusjournalen
                </Link>
              </ul>
            </Col>
            <Col
              sm={12}
              lg={6}
              className="d-flex align-items-center justify-content-center  footer_copyright text-sm-center"
            >
              <p className="fw-bold">
                Copyright © 2022 TOBAKSHANDEL. All Rights Reserved | Developed
                By
                <a
                  className="ms-2"
                  href="https://sarfaa.com"
                  target="_blank"
                  alt="Sarfaa"
                  rel="noreferrer"
                >
                  SARFAA
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
