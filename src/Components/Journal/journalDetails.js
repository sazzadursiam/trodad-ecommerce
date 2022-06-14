import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const CardStyles = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    color: red;
  }
`;

const TextBox = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const JournalDetails = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Row>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-1.png")}
                />
                <Card.Body>
                  <Card.Title>
                    New Swedish study: snus has a minimal effect on the body
                  </Card.Title>
                  <TextBox>
                    Nicotine in snus does not affect the body very much at all.
                    This is shown by a new study from Linköping University.
                  </TextBox>

                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-06-06
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-2.png")}
                />
                <Card.Body>
                  <Card.Title>World No Tobacco Day 2022</Card.Title>
                  <TextBox>
                    May 31 is the annual World No Tobacco Day. For the year
                    2022, the theme is "protecting the environment" - with the
                    aim of raising the environmental impact of tobacco and
                    giving smokers another reason to quit.
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-05-31
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-3.png")}
                />
                <Card.Body>
                  <Card.Title>
                    Time for a zero vision for tobacco-related mortality
                  </Card.Title>
                  <TextBox>
                    We want politics to primarily promote public health and
                    protect our young people. Therefore, a realistic view of
                    tobacco and nicotine products is needed.
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    Debate 2022-05-16
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-4.png")}
                />
                <Card.Body>
                  <Card.Title>To create a World Cup Snus</Card.Title>
                  <TextBox>
                    Kurbits Snus AB is a new production partner for
                    Snusbolaget's competition for home manufacturers of snus:
                    Snus-VM. We will follow one of the owners, also a new jury
                    member, who took the task of turning two of the winning snus
                    into finished products in the most serious way. Read more
                    here!
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-05-11
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-1.png")}
                />
                <Card.Body>
                  <Card.Title>
                    New Swedish study: snus has a minimal effect on the body
                  </Card.Title>
                  <TextBox>
                    Nicotine in snus does not affect the body very much at all.
                    This is shown by a new study from Linköping University.
                  </TextBox>

                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-06-06
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-2.png")}
                />
                <Card.Body>
                  <Card.Title>World No Tobacco Day 2022</Card.Title>
                  <TextBox>
                    May 31 is the annual World No Tobacco Day. For the year
                    2022, the theme is "protecting the environment" - with the
                    aim of raising the environmental impact of tobacco and
                    giving smokers another reason to quit.
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-05-31
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-3.png")}
                />
                <Card.Body>
                  <Card.Title>
                    Time for a zero vision for tobacco-related mortality
                  </Card.Title>
                  <TextBox>
                    We want politics to primarily promote public health and
                    protect our young people. Therefore, a realistic view of
                    tobacco and nicotine products is needed.
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    Debate 2022-05-16
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <Link to="" className="text-decoration-none text-black">
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-4.png")}
                />
                <Card.Body>
                  <Card.Title>To create a World Cup Snus</Card.Title>
                  <TextBox>
                    Kurbits Snus AB is a new production partner for
                    Snusbolaget's competition for home manufacturers of snus:
                    Snus-VM. We will follow one of the owners, also a new jury
                    member, who took the task of turning two of the winning snus
                    into finished products in the most serious way. Read more
                    here!
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-05-11
                  </CardStyles>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <p>
            Psst ..! We now have presence in Germany and Switzerland. Buy
            alternatives to <span>Snus in Germany</span> on Northerner.com/de.
            Buy <span>Snus in Switzerland</span>
            on SnusMarkt.ch.
          </p>
        </Row>
      </div>
      <Footer middleSection="d-none" />
    </>
  );
};

export default JournalDetails;
