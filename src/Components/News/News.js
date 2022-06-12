import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const CardStyles = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    color: red;
  }

`;

const HrStyle = styled.hr`
  border: 2px solid grey;
`;

const TextBox = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const News = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col xs={12} sm={6} md={8} className="mb-3">
            <h2>Snus på nätet - fria fraktalternativ &amp; snabb leverans</h2>
            <p>
              Snusbolaget.se erbjuder alltid ett stort utbud av svenskt snus och
              nikotinpåsar. Här kan du enkelt och snabbt köpa snus och andra
              produkter från de flesta producenterna – i alla olika prisklasser,
              styrkor, packstorlekar som stock snus, samt format. Hitta snus
              från klassiska märken som General snus, Göteborgs Rapé eller Ettan
              snus. Om du föredrar tobaksfritt snus kan du hitta din favorit
              bland märken som Velo, Volt, ZYN, LOOP och många fler.
            </p>
            <br />
            <p>
              Allt snus online, med eller utan tobak. Om du vill veta mer om
              snusets universum, lära dig nya tips och trix eller bara läsa för
              nöjets skull kan du klicka dig vidare till Snusjournalen. Där
              skriver vi om det mesta som har med snus att göra.
            </p>
            <ul>
              <li>
                Nikotinpåsar (All White portion) från 29,70 kr / dosan. Se vår
                topplista här
              </li>
              <li>
                Lössnus från ca 27,90 kr / dosan. Se klassiker och nyheter här
              </li>
              <li>Portionssnus från ca 14,90 kr / dosan. Se mest sökta här</li>
              <li>
                Gör eget lössnus från ca 4,90 kr / dosan. Se våra bästsäljare
                här
              </li>
              <li>
                Gör eget portionssnus från ca 12,90 kr /dosan. Se alla
                snussatser för portionssnus här
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-3">
            <div className="mb-3">
              <img
                className="w-100"
                src="https://via.placeholder.com/350x350"
                alt="News"
              />
            </div>
          </Col>
        </Row>
        <HrStyle></HrStyle>
        <Row>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center "
          >
            <Card style={{ width: "18rem" }}>
              <a
                href="#"
                alt="no-title"
                className="text-decoration-none text-black"
              >
                <Card.Img
                  variant="top"
                  src={require("../../Assets/News/news-1.png")}
                />
                <Card.Body>
                  <Card.Title>
                    New Swedish study: snus has a minimal effect on the body
                  </Card.Title>
                  <TextBox>
                   
                      Nicotine in snus does not affect the body very much at
                      all. This is shown by a new study from Linköping
                      University.
                    
                  </TextBox>

                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-06-06
                  </CardStyles>
                </Card.Body>
              </a>
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
              <a
                href="#"
                alt="no-title"
                className="text-decoration-none text-black"
              >
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
              </a>
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
              <a
                href="#"
                alt="no-title"
                className="text-decoration-none text-black"
              >
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
              </a>
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
              <a
                href="#"
                alt="no-title"
                className="text-decoration-none text-black"
              >
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
                      member, who took the task of turning two of the winning
                      snus into finished products in the most serious way. Read
                      more here!
                   
                  </TextBox>
                  <CardStyles as="button" className="text-decoration-none">
                    News 2022-05-11
                  </CardStyles>
                </Card.Body>
              </a>
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
    </>
  );
};

export default News;
