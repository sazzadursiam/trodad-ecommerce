import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";
// import "../Registration&Login/customRefForm.css";

const AdminLoginForm = () => {
  const AdminEmail = useRef();
  const AdminPassword = useRef();

  const [message, setMessage] = useState("");
  const [adminEmailError, setAdminEmailError] = useState("");
  const [adminPassError, setAdminPassError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append("email", AdminEmail.current.value);
    formdata.append("password", AdminPassword.current.value);

    axios
      .post(`${BACKEND_BASE_URL}/api/admin/login/process`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        console.log(response.data);
        if (response.data.status === "400") {
          if (response.data.errors) {
            const { email, password } = response.data.errors;
            setAdminEmailError(email);
            setAdminPassError(password);
          }
          const { message } = response.data;
          setMessage(message);
        }
        if (response.data.status === 1) {

          localStorage.setItem("adminemail", response.data?.loggedInAdmin?.email);
          localStorage.setItem(
            "LOGGED_IN_ADMIN_ID",
            response.data?.loggedInAdmin?.id
          );
          navigate(from, { replace: true });

          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          // setUserLoginInfo(initialValues);
          setAdminEmailError("");
          setAdminPassError("");
          e.target.reset();
        }
      });
    e.preventDefault();

    // const newRecord = { ...userRegistration };
  };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /\S+@\S+\.\S+/;
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "Email address is not valid";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 12) {
  //     errors.password = "Password cannot exceed more than 12 characters";
  //   }

  //   return errors;
  // };

  return (
    <div className="form_wrapper" style={{ backgroundColor: "#f9fafb" }}>
      <Container className="container">
        <Form id="form" className="form" onSubmit={handleSubmit}>
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
              ref={AdminEmail}
            />
            <small className="small_msg">
              {adminEmailError && adminEmailError}
            </small>
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
              ref={AdminPassword}
            />
            <small className="small_msg">
              {adminPassError && adminPassError}
            </small>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AdminLoginForm;
