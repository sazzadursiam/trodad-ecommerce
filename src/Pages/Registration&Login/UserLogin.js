import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";
import "./customerRegForm.css";

const UserLoginForm = () => {
  const Email = useRef();
  const Password = useRef();

  const initialValues = {
    email: "",
    password: "",
  };
  const [userLoginInfo, setUserLoginInfo] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const [records, setRecords] = useState([]);

  const [feedbackMsg, setFeedbackMsg] = useState("");
  console.log(feedbackMsg);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLoginInfo({ ...userLoginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(userLoginInfo));
    setIsSubmit(true);

    const formdata = new FormData();
    formdata.append("email", Email.current.value);
    formdata.append("password", Password.current.value);

    axios
      .post(`${BACKEND_BASE_URL}/api/customer/login/process`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        setFeedbackMsg(response.data.status);
      });
    e.preventDefault();

    // const newRecord = { ...userRegistration };
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address is not valid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }

    return errors;
  };

  return (
    <div className="form_wrapper" style={{ backgroundColor: "#f9fafb" }}>
      <Container className="container">
        <Form id="form" className="form" onSubmit={handleSubmit}>
          <h1>Log In</h1>

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
              value={userLoginInfo.email}
              onChange={handleInput}
            />
            <small className="small_msg"></small>
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
              value={userLoginInfo.password}
              onChange={handleInput}
            />
            <small className="small_msg">{formErrors.password}</small>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserLoginForm;
