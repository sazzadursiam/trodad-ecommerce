import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { UserContext } from "../../../../../App";
import { BACKEND_BASE_URL } from "../../../../../Components/GlobalVariables";
import "../Dashboard.css"

const AccDetails = () => {
  const { userInfo, setUserINfo } = useContext(UserContext);
  const userName = useRef();
  const userImage = useRef();
  const userEmail = useRef();
  const userCurrentPass = useRef();
  const userPass = useRef();
  const userConfirmPass = useRef();

  const [currPassError, setCurrPassError] = useState("");
  const [newPassError, setnewPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const handleUserInfo = (e) => {
    const formdata = new FormData();

    formdata.append("_method", "PUT");
    formdata.append("name", userName.current.value);
    if (userImage.current.files[0]) {
      formdata.append("profileImage", userImage.current.files[0]);
    }
    if (
      userCurrentPass.current.value != null ||
      userCurrentPass.current.value != ""
    ) {
      formdata.append("current_password", userCurrentPass.current.value);
      formdata.append("password", userPass.current.value);
      formdata.append("confirm_password", userConfirmPass.current.value);
    }

    axios
      .post(
        `${BACKEND_BASE_URL}/api/user/update-profile/${localStorage.getItem(
          "LOGGED_IN_USER_ID"
        )}`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )

      .then((response) => {
        
        if (response.data.status == 400) {
          setCurrPassError(response.data.currentPassError);
          setnewPassError(response.data.errors.password);
          setConfirmPassError(response.data.errors.confirm_password);
        }
        if (response.data.status == 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          
          setUserINfo(response.data.userInfo);
          setFile([]);
          setCurrPassError("");
          setnewPassError("");
          setConfirmPassError("");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  // Image Preview
  const [files, setFile] = useState([]);
  const handleImgPreview = (e) => {
    let allfiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    }
    if (allfiles.length > 0) {
      setFile(allfiles);
    }
  };

  return (
    <div className="edit_details mb-5">
      <Form onSubmit={handleUserInfo}>
        <Row>
          <Form.Group
            className="mb-3"
            as={Col}
            md="6"
            controlId="validationCustom02"
          >
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="name"
              defaultValue={userInfo.name}
              ref={userName}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="mb-3"
          >
            <Form.Label className="label fw-bold">Image </Form.Label>
            <Form.Control
              type="file"
              ref={userImage}
              onChange={handleImgPreview}
            />
            {files.map((file, key) => {
              return (
                <div key={key} className="Row">
                  <span className="Filename">
                    <img
                      width={80}
                      height={50}
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                    />
                  </span>
                </div>
              );
            })}
          </Form.Group>
        </Row>
        {/* <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>
            Display name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Tanver Mehede"
          />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>
            Email address <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            required
            readOnly
            type="email"
            defaultValue={userInfo.email}
            ref={userEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Current password (leave blank to leave unchanged)
          </Form.Label>
          <Form.Control type="password" ref={userCurrentPass} />
          <p className="text-danger">{currPassError ? currPassError : ""}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New password (leave blank to leave unchanged)</Form.Label>
          <Form.Control type="password" ref={userPass} />
          <p className="text-danger">{newPassError ? newPassError : ""}</p>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Confirm new password</Form.Label>
          <Form.Control type="password" ref={userConfirmPass} />
          <p className="text-danger">
            {confirmPassError ? confirmPassError : ""}
          </p>
        </Form.Group>

        <Button className="btn submit_btn" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AccDetails;
