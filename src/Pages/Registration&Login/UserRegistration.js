import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";

const UserRegistration = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col
            md={6}
            className="mt-5 p-5"
            style={{ borderRight: "1px solid #ccc" }}
          >
            <Form.Group>
              <Form.Label className="lead fw-bold">
                REGISTRERA <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                className="my-2 mb-4"
                //   placeholder="Enter contact number"
              />
              <p>
                Registrering för den här webbplatsen ger dig tillgång till din
                orderstatus och historia. Fyll bara i fälten nedan och vi kommer
                att få ett nytt konto för dig på nolltid. Vi kommer bara att
                fråga dig om information som behövs för att göra inköpsprocessen
                snabbare och enklare.
              </p>

              <Button type="submit" className="btn-danger w-100 border-0">
                REGISTRERA
              </Button>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-5 p-5">
            <Form.Group>
              <Form.Label className="lead fw-bold">LOGGA IN</Form.Label>

              <p>
                En länk för att ställa in ett nytt lösenord kommer att skickas
                till din e-postadress.
              </p>
              <br />
              <p>
                Dina personuppgifter kommer användas för att förbättra din
                upplevelse på webbplatsen, hantera åtkomst till ditt konto och
                för andra ändamål som beskrivs i vår integritetspolicy.
              </p>
              <Button type="submit" className="btn-info border-0">
                LOGGA IN
              </Button>
            </Form.Group>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserRegistration;
