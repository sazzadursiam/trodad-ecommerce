import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";
import Parse from "html-react-parser";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";

const EditProduct = () => {
  const productName = useRef();
  const productImage = useRef();
  const brandId = useRef();
  const productCategoryId = useRef();
  const shortDesc = useRef();
  const Description = useRef();
  const { id } = useParams();

  // Edited value set
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductImage, setEditedProductImage] = useState("");
  const [editedBrandDropdown, setEditedBrandDropdown] = useState("");
  const [editedCategoryDropdown, setEditedCategoryDropdown] = useState("");
  const [editedProductDesc, setEditedProductDesc] = useState("");
  const [editedProductShortDesc, setEditedProductShortDesc] = useState("");

  // =================== Fetch Brands & Category Info ==========================
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const fetchData = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/products/get-cat-brand`)
      .then((res) => {
        console.log(res.data);
        setBrandData(res.data.getBrands);
        setCategoryData(res.data.getCategories);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ===================== Edit data ==========================================

  const fetchDataForEdit = async () => {
    setFile([]);
    await axios
      .get(`${BACKEND_BASE_URL}/api/admin/products/edit/${id}`)
      .then((res) => {
        const {
          name,
          image,
          categoryId,
          brandId,
          shortDescription,
          description,
        } = res.data.editProduct;
        setEditedProductName(name);
        setEditedProductImage(image);
        setEditedBrandDropdown(brandId);
        setEditedCategoryDropdown(categoryId);
        setEditedProductShortDesc(shortDescription);
        setEditedProductDesc(description);
      });
  };
  useEffect(() => {
    fetchDataForEdit();
  }, []);

  // ============================== Image Preview ==============================
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

  // ============================ Updated data to backend =======================

  const updateData = (e) => {
    const UpdatedBrandImage = productImage.current.files[0];
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("name", productName.current.value);
    if (UpdatedBrandImage) {
      formdata.append("brandImage", productImage.current.files[0]);
    }
    formdata.append("brandId", brandId.current.value);
    formdata.append("categoryId", productCategoryId.current.value);
    formdata.append("shortDescription", shortDesc.current.value);
    formdata.append("description", Description.current.value);

    axios
      .post(`${BACKEND_BASE_URL}/api/admin/products/update/${id}`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        fetchDataForEdit();
      });
    console.log("submit");
    e.preventDefault();
  };

  // jodit editor options
  const config = {
    buttons: [
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "table",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "symbol",
    ],
  };

  return (
    <div className="main__container">
      <div className="content-wrapper">
        <div className="breadcrumb d-flex justify-content-between">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            <Link to="#" className="before">
              Edit Product
            </Link>
          </div>
          <div className=" breadcrumb-item p-0">
            <Link to="/admin/products">All Product</Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <span className="top-border"></span>
            <div>
              <div className="mt-5">
                <Form onSubmit={updateData}>
                  <div className="py-2">
                    <h5 className="form-title">Edit Product</h5>
                    <hr />
                  </div>
                  <Row className="mb-3">
                    {/* Product Name */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom00"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Product Name
                      </Form.Label>

                      <Form.Control
                        required
                        type="text"
                        ref={productName}
                        defaultValue={editedProductName}
                        // onChange={(e) => {
                        //   setEditedProductName(e.target.value);
                        // }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose an image
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Product Image */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Image Link
                      </Form.Label>

                      <Form.Control
                        type="file"
                        ref={productImage}
                        onChange={handleImgPreview}
                      />

                      {files.map((file, key) => {
                        return (
                          <div key={key} className="Row">
                            <span className="Filename">
                              <img
                                className="img-thumbnail mt-1"
                                width={80}
                                height={50}
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                              />
                            </span>
                          </div>
                        );
                      })}
                      {files.length == 0 && (
                        <img
                          className="img-thumbnail mt-1"
                          width={80}
                          height={50}
                          src={`${BACKEND_BASE_URL}${editedProductImage}`}
                          alt={productName}
                          name="img"
                        />
                      )}

                      <Form.Control.Feedback type="invalid">
                        Please choose an image
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Brand Dropdown */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Select Brand
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        required
                        ref={brandId}
                        defaultValue="0"
                      >
                        <option value="0">Select Brand</option>;
                        {brandData.map((data, index) => {
                          return (
                            <option
                              key={index}
                              selected={
                                data.id == editedBrandDropdown ? "selected" : ""
                              }
                              value={data.id}
                            >
                              {data.brandName}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>

                    {/* ============== Category Dropdown ================= */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Select Category
                      </Form.Label>

                      <Form.Select required ref={productCategoryId}>
                        <option value="0">Main</option>
                        {categoryData.map((data, index) => {
                          return (
                            <option
                              key={index}
                              selected={
                                data.id == editedCategoryDropdown
                                  ? "selected"
                                  : ""
                              }
                              value={data.id}
                            >
                              {data.name}
                            </option>
                          );
                        })}
                      </Form.Select>

                      <Form.Control.Feedback type="invalid">
                        Category name is required
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Product Short Description */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom02"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Short Description
                      </Form.Label>
                      <JoditEditor
                        ref={shortDesc}
                        config={config}
                        tabIndex={1}
                        value={editedProductShortDesc}
                        // onChange={(e)=>{
                        //   setDescription(e.target.value);
                        // }}
                      />
                    </Form.Group>

                    {/* Product Description */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom02"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Description
                      </Form.Label>
                      <JoditEditor
                        ref={Description}
                        config={config}
                        tabIndex={1}
                        value={editedProductDesc}
                        // onChange={(e)=>{
                        //   setDescription(e.target.value);
                        // }}
                      />
                    </Form.Group>
                  </Row>

                  <Button
                    type="submit"
                    className="btn-submit mt-5 rounded-3 border-0 d-flex justify-content-center"
                  >
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
