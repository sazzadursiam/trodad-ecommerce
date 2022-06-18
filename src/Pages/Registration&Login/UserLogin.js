import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../App";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";
import "./customerRegForm.css";

const UserLoginForm = () => {
  const Email = useRef();
  const Password = useRef();

  const initialValues = {
    email: "",
    password: "",
  };
  const [message, setMessage] = useState();
  const [userEmailError, setUserEmailError] = useState("");
  const [userPassError, setUserPassError] = useState("");

  console.log(message);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append("email", Email.current.value);
    formdata.append("password", Password.current.value);

    axios
      .post(`${BACKEND_BASE_URL}/api/customer/login/process`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status == 400) {
          if (response.data.errors) {
          const { email, password } = response.data.errors;
          setUserEmailError(email);
          setUserPassError(password);
          // setMessage(response);
          }
        }
        const { message } = response.data;
          setMessage(message);

        if (response.data.status === 1) {
          localStorage.setItem("email", response.data?.loggedInUser?.email);
          localStorage.setItem(
            "LOGGED_IN_USER_ID",
            response.data?.loggedInUser?.id
          );
          navigate(from, { replace: true });
        }
      });
    e.preventDefault();
  };

  return (
    <div className="form_wrapper" style={{ backgroundColor: "#f9fafb" }}>
      <Container className="container">
        <Form id="form" className="form" onSubmit={handleSubmit}>
          {/* <h1>Log In</h1> */}
          <h1> {message ? message : "Log In"}</h1>

          {/* ================== Email =================== */}
          <Form.Group className="form_group">
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={Email}
              required
            />
            <small className="small_msg">{userEmailError}</small>
          </Form.Group>

          {/* ============== Password ===================== */}
          <Form.Group className="form_group">
            <Form.Label>
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              ref={Password}
              required
            />
            <small className="small_msg">{userPassError}</small>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserLoginForm;
