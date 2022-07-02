import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { UserContext } from "../../../../../App";
import { BACKEND_BASE_URL } from "../../../../../Components/GlobalVariables";
import "../Dashboard.css"

const BillingAddress = () => {
  const { userInfo,setUserINfo } = useContext(UserContext);
  const userName = useRef();
  const editedUserCountry = useRef();
  const editedUserStreetAddress = useRef();
  const editedUserApartment = useRef();
  const editedUserCity = useRef();
  const editedUserDistrict = useRef();
  const editedUserPostCode = useRef();
  const editedUserPhone = useRef();

  const userAddressInfo = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("name", userName.current.value);
    formdata.append("country", editedUserCountry.current.value);
    formdata.append("city", editedUserCity.current.value);
    formdata.append("streetAddress", editedUserStreetAddress.current.value);
    formdata.append("apartmentAddress", editedUserApartment.current.value);
    formdata.append("district", editedUserDistrict.current.value);
    formdata.append("postCode", editedUserPostCode.current.value);
    formdata.append("phone", editedUserPhone.current.value);

    axios
      .post(
        `${BACKEND_BASE_URL}/api/user/update-address/${localStorage.getItem(
          "LOGGED_IN_USER_ID"
        )}`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )

      .then((response) => {
        if (response.data.status == 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          setUserINfo(response.data.userInfo);
        }
      });
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <div className="edit_details mb-5">
      <h5 className="fw-bold mb-4">Shipping address</h5>
      <Form onSubmit={userAddressInfo}>
        <Row>
          <Form.Group className="mb-3" as={Col} md="12">
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              readOnly
              type="text"
              ref={userName}
              defaultValue={userInfo.name}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>
            Country / Region <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            required
            type="text"
            ref={editedUserCountry}
            defaultValue={userInfo.country}
          />
        </Form.Group>
        <Row>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>
              Street address <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              ref={editedUserStreetAddress}
              defaultValue={userInfo.streetAddress}
            />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Apartment, suite, unit, etc (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment, suite, unit, etc (optional)"
              ref={editedUserApartment}
              defaultValue={userInfo.apartmentAddress}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>
            Town / City <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            required
            type="text"
            ref={editedUserCity}
            defaultValue={userInfo.city}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            District <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            required
            type="text"
            ref={editedUserDistrict}
            defaultValue={userInfo.district}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Postcode / ZIP (optional)</Form.Label>
          <Form.Control
            type="text"
            ref={editedUserPostCode}
            defaultValue={userInfo.postCode}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone (optional)</Form.Label>
          <Form.Control
            type="text"
            ref={editedUserPhone}
            defaultValue={userInfo.phone}
          />
        </Form.Group>

        <Button className="btn submit_btn" type="submit">
          Save Address
        </Button>
      </Form>
    </div>
  );
};

export default BillingAddress;
