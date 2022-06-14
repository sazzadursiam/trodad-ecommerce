import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";
import "./customerRegForm.css";

const UserRegForm = () => {
  const Name = useRef();
  const Email = useRef();
  const Password = useRef();
  const ContactNo = useRef();

  const initialValues = {
    userName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  };
  const [userRegInfo, setUserRegInfo] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegInfo({ ...userRegInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(userRegInfo));
    setIsSubmit(true);

    const formdata = new FormData();
    formdata.append("name", Name.current.value);
    formdata.append("email", Email.current.value);
    formdata.append("phone", ContactNo.current.value);
    formdata.append("password", Password.current.value);

    axios
      .post(`${BACKEND_BASE_URL}/api/customer/registration/store`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          setUserRegInfo(initialValues);
          e.target.reset();
        }
      });
    e.preventDefault();

    // const newRecord = { ...userRegistration };
    console.log(userRegInfo);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userRegInfo);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;
    if (!values.userName) {
      errors.userName = "Name is required";
    }
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

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password is not matched";
    }
    return errors;
  };

  return (
    <div className="form_wrapper" style={{ backgroundColor: "#f9fafb" }}>
      <Container className="container">
        <Form id="form" className="form" onSubmit={handleSubmit}>
          <h1>Register With Us</h1>
          {/* =============== User Name ================= */}
          <Form.Group className="form_group">
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="userName"
              placeholder="Enter username"
              name="userName"
              ref={Name}
              value={userRegInfo.userName}
              onChange={handleInput}
            />
            <small className="small_msg">{formErrors.userName}</small>
          </Form.Group>
          {/* ================== Email =================== */}
          <Form.Group className="form_group">
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={Email}
              value={userRegInfo.email}
              onChange={handleInput}
            />
            <small className="small_msg"></small>
          </Form.Group>
          {/* ============== Phone No ===================== */}
          <Form.Group className="form_group">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              id="phone"
              placeholder="Enter contact number"
              name="phoneNo"
              ref={ContactNo}
              value={userRegInfo.phoneNo}
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
              value={userRegInfo.password}
              onChange={handleInput}
            />
            <small className="small_msg">{formErrors.password}</small>
          </Form.Group>
          {/* ================= Confirm Password ========== */}
          <Form.Group className="form_group">
            <Form.Label>
              Confirm Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              id="retype-password"
              placeholder="Retype password"
              name="confirmPassword"
              value={userRegInfo.confirmPassword}
              onChange={handleInput}
            />
            <small className="small_msg">{formErrors.confirmPassword}</small>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserRegForm;
