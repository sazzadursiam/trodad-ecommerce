import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const { userId } = useParams();
  return (
    <div className="userdashboard_content">
      <div className="mb-5">
        <p>
          Hello
          <span className="mx-2 fw-bold">Tanver Mehede</span>( not{" "}
          <span className="mx-1 fw-bold">Tanver Mehede</span> ? &nbsp;
          <Link to="/">Logout</Link>)
        </p>
        <p>
          From your account dashboard you can view Your &nbsp;
          <Link to="">recent orders</Link>, manage your &nbsp;
          <Link to="">shipping and billing addresses</Link> , and &nbsp;
          <Link to="">edit your password and account details</Link>.
        </p>
      </div>
      <div>
        <Row>
          <Col md={4} className="mb-3">
            <Button
              as={Link}
              to={`users/orders/allorders/${localStorage.getItem(
                "LOGGED_IN_USER_ID"
              )}`}
              className="w-100"
              variant="outline-secondary"
            >
              Orders
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button className="w-100" variant="outline-secondary">
              Card
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button className="w-100" variant="outline-secondary">
              Download
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button className="w-100" variant="outline-secondary">
              Addreases
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button className="w-100" variant="outline-secondary">
              Account Details
            </Button>
          </Col>
          <Col md={4} className="mb-3">
            <Button className="w-100" variant="outline-secondary">
              Whichlist
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
