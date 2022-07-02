import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../../App";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";
import "./UserContent.css";

const UserContent = () => {
  const { userInfo, setUserINfo } = useContext(UserContext);
  const [clickState, setClickState] = useState();

  const ToggleClass = (index) => {
    setClickState(index);
  };
  const logoutUser = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("customerName");
    localStorage.removeItem("LOGGED_IN_USER_ID");
    localStorage.removeItem("cartTotal");
    localStorage.removeItem("cartProductQuantity");
  };
  console.log(localStorage.getItem("LOGGED_IN_USER_ID"));
  // ===================== User Info =================

  const fetchUserData = () => {
    axios
      .get(
        `${BACKEND_BASE_URL}/api/user/data/${localStorage.getItem(
          "LOGGED_IN_USER_ID"
        )}`
      )
      .then((res) => {
        setUserINfo(res.data.userInfo);
        console.log(res.data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="userProfile main_section">
      {/* pageTitle */}
      <div className="pageTitle mb-4">
        <Container className="inner">
          <h2 className="text-uppercase">MY ACCOUNT</h2>
          <small className="text-uppercase">DASHBOARD</small>
        </Container>
      </div>

      {/* content */}
      <Container fluid="xl">
        <Row>
          {/* left bar */}
          <Col md={4} lg={3}>
            <div className="leftbar  h-100 ">
              {/* leftbar_top */}
              <div className="leftbar_title mb-3">
                <div className="d-flex align-items-center">
                  <div className="profile_image me-3">
                    {!userInfo.profileImage ? (
                      <img
                        src="https://toppng.com//public/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png"
                        alt=""
                      />
                    ) : (
                      <img
                        src={`${BACKEND_BASE_URL}/${userInfo.profileImage}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="profile_name">
                    <span> {userInfo.name} </span>
                  </div>
                </div>
              </div>
              {/* leftbar_content */}
              <div className="leftbar_content">
                <ul>
                  <Link to="" onClick={() => ToggleClass(1)}>
                    <li className={`${clickState === 1 ? "active" : ""}`}>
                      Dashboard
                    </li>
                  </Link>
                  <Link
                    to={`users/orders/allorders/${localStorage.getItem(
                      "LOGGED_IN_USER_ID"
                    )}`}
                    onClick={() => ToggleClass(2)}
                  >
                    <li className={`${clickState === 2 ? "active" : ""}`}>
                      Orders
                    </li>
                  </Link>
                  {/* <Link to='' onClick={() =>ToggleClass(3)}>
                                        <li className={`${clickState === 3 ? 'active' : ''}`}>
                                            Gift Cards
                                        </li>
                                    </Link> */}
                  <Link to="edit-account" onClick={() => ToggleClass(4)}>
                    <li className={`${clickState === 4 ? "active" : ""}`}>
                      Account Details
                    </li>
                  </Link>
                  <Link to="address" onClick={() => ToggleClass(6)}>
                    <li className={`${clickState === 6 ? "active" : ""}`}>
                      Addreases
                    </li>
                  </Link>
                  <Link to="/" onClick={logoutUser}>
                    <li className={`${clickState === 7 ? "active" : ""}`}>
                      Logout
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </Col>
          {/* Right bar */}
          <Col md={8} lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserContent;
