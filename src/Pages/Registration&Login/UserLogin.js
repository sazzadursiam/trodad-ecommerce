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
  const [userLoginInfo, setUserLoginInfo] = useState(initialValues);
  const [formResponseData, setFormResponseData] = useState([])
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { authUser, setAuthUser } = useContext(UserContext);




  const navigate = useNavigate();
  const location = useLocation();


  let from = location.state?.from?.pathname || "/";


  const [feedbackMsg, setFeedbackMsg] = useState("");
  console.log(feedbackMsg);
  
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


        setAuthUser(response.data.loggedInUser);
        setFormResponseData(response.data)




        if (response.data.status === 1) {
          navigate(from, { replace: true });
        }


      });
    e.preventDefault();

  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

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

          {/* <h1>Log In</h1> */}
          <h1>
            {
              formResponseData.message?formResponseData.message:'Log In'
            }
          </h1>

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
              defaultValue={userLoginInfo.email}
              
              required
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
              defaultValue={userLoginInfo.password}
             
              required
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
