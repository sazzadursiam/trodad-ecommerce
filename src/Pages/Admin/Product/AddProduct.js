import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const productName = useRef();
  const productImage = useRef();
  const brandId = useRef();
  const productCategoryId = useRef();
  const productDesc = useRef();
  const productShortDesc = useRef();
  const isNew = useRef();
  const isNewPrice = useRef();

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

  const [formValues, setFormValues] = useState([
    {
      quantity: "",
      packSize: "",
      unitPrice: "",
      price: "",
      oldPrice: "",
      flagText: "",
    },
  ]);

  // Fetch Table Data
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

  // ============================= form submit to backend ======================

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        quantity: "",
        packSize: "",
        unitPrice: "",
        price: "",
        oldPrice: "",
        flagText: "",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    const IsNew = checkboxChecked;

    const formdata = new FormData();
    formdata.append("name", productName.current.value);
    formdata.append("image", productImage.current.files[0]);
    formdata.append("brandId", brandId.current.value);
    formdata.append("categoryId", productCategoryId.current.value);
    formdata.append("description", productDesc.current.value);
    formdata.append("shortDescription", productShortDesc.current.value);
    // formdata.append("productAttrs", formValues);

    axios
      .post(`${BACKEND_BASE_URL}/api/admin/products/store`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          // renderAllBrands();
          // setChecked(false);
          event.target.reset();
          setDescValue("", "html");
          setShortDesc("", "html");
          // setModalShow(false);
        }
      });

    if (IsNew === true) {
      formdata.append("isHome", 1);
    } else {
      formdata.append("isHome", 0);
    }

    event.preventDefault();
    // alert(JSON.stringify(formValues));
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

  //   Jodit Desc
  const [descValue, setDescValue] = useState();
  const [shortDesc, setShortDesc] = useState();

  // Checkbox handle
  const [checkboxChecked, setCheckeboxChecked] = useState(false);
  const handleCheckbox = (e) => {
    setCheckeboxChecked(e.target.checked);
  };

  return (
    <div className="main__container">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            <Link to="#" className="before">
              Add
            </Link>
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="content-wrapper">
            <div className="card">
              <div className="card-body">
                <Row className="py-3">
                  {/* Product Name */}
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label fw-bold">
                      Product Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      // required
                      type="text"
                      name="name"
                      placeholder="product name"
                      ref={productName}
                    />
                    <Form.Control.Feedback type="invalid">
                      product name is required
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
                      Product Image <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      // required
                      type="file"
                      name="image"
                      ref={productImage}
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
                      Select Brand <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      // required
                      ref={brandId}
                    >
                      <option value="0">Select Brand</option>
                      {brandData.map((data, index) => {
                        return (
                          <option key={index} value={data.id}>
                            {data.brandName}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  {/* Product Category Dropdown */}
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label fw-bold">
                      Select Category <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      ref={productCategoryId}
                    >
                      <option value="0">Select Category</option>
                      {categoryData.map((data, index) => {
                        return (
                          <option key={index} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  {/* Product Description */}
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom02"
                    className="mb-3"
                  >
                    <Form.Label className="label fw-bold">
                      Product Description
                    </Form.Label>
                    <JoditEditor
                      ref={productDesc}
                      config={config}
                      tabIndex={1}
                      value={descValue}
                    />
                  </Form.Group>

                  {/* Product Short Description */}
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
                      ref={productShortDesc}
                      config={config}
                      tabIndex={1}
                      value={shortDesc}
                    />
                  </Form.Group>
                </Row>
                {/* <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th> Quantity</th>
                      <th> Pack Size</th>
                      <th> Unit Price</th>
                      <th> Price</th>
                      <th> Old Price </th>
                      <th> Flag Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formValues.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Form.Group controlId="validationCustom00">
                            <Form.Control
                              // required
                              type="number"
                              name="quantity"
                              placeholder="Quantity"
                              // ref={brandName}
                              value={data.quantity || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <Form.Control.Feedback type="invalid">
                              quantity is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>

                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              // required
                              type="number"
                              name="packSize"
                              placeholder="Pack Size"
                              //   ref={brandName}
                              value={data.packSize || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <Form.Control.Feedback type="invalid">
                              pack size is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                      
                          <Form.Group controlId="validationCustom02">
                            <Form.Control
                              required
                              type="number"
                              min="0"
                              name="unitPrice"
                              placeholder="Unit Price"
                              //   ref={brandName}
                              value={data.unitPrice || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <Form.Control.Feedback type="invalid">
                              unit price is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                         
                          <Form.Group controlId="validationCustom03">
                            <Form.Control
                              required
                              type="number"
                              min="0"
                              placeholder="Price"
                              name="price"
                              //   ref={brandName}
                              value={data.price || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                        
                          <Form.Group controlId="validationCustom04">
                            <Form.Control
                              // required
                              type="number"
                              min="0"
                              name="oldPrice"
                              placeholder="Old Price"
                              //   ref={brandName}
                              value={data.oldPrice || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                         
                          <Form.Group controlId="validationCustom05">
                            <Form.Control
                              // required
                              type="text"
                              name="flagText"
                              placeholder="Flag Text"
                              //   ref={brandName}
                              value={data.flagText || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                        
                          <Form.Group controlId="validationCustom06">
                            <div className="mt-2">
                              <Form.Check
                                type="checkbox"
                                label="isNew"
                                value="1"
                                ref={isNew}
                                onChange={handleCheckbox}
                              />
                            </div>


                            <div className="mt-1">
                              <Form.Check
                                type="checkbox"
                                label="isNewPrice"
                                value="1"
                                ref={isNewPrice}
                                onChange={handleCheckbox}
                              />
                            </div>
                          </Form.Group>
                        </td>

                        {index ? (
                          <td>
                            <Button
                              className="btn_danger "
                              onClick={() => removeFormFields(index)}
                            >
                              <AiIcons.AiOutlineClose size="1.2em" />
                            </Button>
                          </td>
                        ) : null}
                      </tr>
                    ))}
                  </tbody>
                </Table> */}

                {/* <div className="button-section">
                  <Button
                    variant="success"
                    size="sm"
                    className="border-0"
                    onClick={() => addFormFields()}
                  >
                    Add More &nbsp;
                    <span>
                      <BsIcons.BsPlusLg />
                    </span>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button
              className="btn_submit border-0 rounded-3 mt-4"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
