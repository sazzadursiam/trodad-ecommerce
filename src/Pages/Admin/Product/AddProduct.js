import React, { useState } from "react";
import JoditEditor from "jodit-react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProduct = () => {
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

  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", image: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
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
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label fw-bold">
                      Product Name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="product name"
                      // ref={brandName}
                    />
                    <Form.Control.Feedback type="invalid">
                      product name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label fw-bold">
                      Product Image
                    </Form.Label>
                    <Form.Control
                      required
                      type="file"
                      name="image"
                      //   ref={brandImage}
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
                      //   ref={shortDesc}
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
                      //   ref={shortDesc}
                      config={config}
                      tabIndex={1}
                      value={descValue}
                    />
                  </Form.Group>
                </Row>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th> Pack Size</th>
                      <th> Unit Price</th>
                      <th> Price</th>
                      <th> Old Price </th>
                      <th> Flag Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formValues.map((data, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          {/* Pack Size */}
                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Pack Size"
                              //   ref={brandName}
                            />
                            <Form.Control.Feedback type="invalid">
                              pack size is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                          {/* Unit Price */}
                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Unit Price"
                              //   ref={brandName}
                            />
                            <Form.Control.Feedback type="invalid">
                              unit price is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                          {/* Price */}
                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Price"
                              //   ref={brandName}
                            />{" "}
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                          {/* Old Price */}
                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Old Price"
                              //   ref={brandName}
                            />
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                          {/* Flag Text */}
                          <Form.Group controlId="validationCustom01">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Flag Text"
                              //   ref={brandName}
                            />
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                        <td>
                          {/* isNew */}
                          <Form.Group controlId="validationCustom01">
                            <div className="mt-2">
                              <Form.Check type="checkbox" label="isNew" />
                            </div>
                            {/* isNewPrice */}

                            <div className="mt-1">
                              <Form.Check type="checkbox" label="isNewPrice" />
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
                </Table>

                <div className="button-section">
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
                </div>
              </div>
            </div>
          </div>
        </Form>
        <div className="text-center">
          <Button className="btn_submit border-0 rounded-3 mt-4" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
