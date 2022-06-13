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
  const [productId, setProductId] = useState(0);

  const productName = useRef();
  const productImage = useRef();
  const brandId = useRef();
  const productCategoryId = useRef();
  const productSubCategoryId = useRef();
  const productDesc = useRef();
  const productShortDesc = useRef();
  const productPrice = useRef();

  const productPackSize1 = useRef();
  const productPackSize2 = useRef();
  const productPackSize3 = useRef();
  const productPackSize4 = useRef();
  const productPackSize5 = useRef();

  const productUnitPrice1 = useRef();
  const productUnitPrice2 = useRef();
  const productUnitPrice3 = useRef();
  const productUnitPrice4 = useRef();
  const productUnitPrice5 = useRef();

  const productVariantPrice1 = useRef();
  const productVariantPrice2 = useRef();
  const productVariantPrice3 = useRef();
  const productVariantPrice4 = useRef();
  const productVariantPrice5 = useRef();

  const productOldPrice1 = useRef();
  const productOldPrice2 = useRef();
  const productOldPrice3 = useRef();
  const productOldPrice4 = useRef();
  const productOldPrice5 = useRef();

  const flagText1 = useRef();
  const flagText2 = useRef();
  const flagText3 = useRef();
  const flagText4 = useRef();
  const flagText5 = useRef();

  const isNew = useRef();
  // const isNew2 = useRef();
  // const isNew3 = useRef();
  // const isNew4 = useRef();
  // const isNew5 = useRef();

  const isNewPrice = useRef();
  // const isNewPrice2 = useRef();
  // const isNewPrice3 = useRef();
  // const isNewPrice4 = useRef();
  // const isNewPrice5 = useRef();

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

  // const [formValues, setFormValues] = useState([
  //   {
  //     quantity: "",
  //     packSize: "",
  //     unitPrice: "",
  //     price: "",
  //     oldPrice: "",
  //     flagText: "",
  //   },
  // ]);

  // =================== Fetch Brands Info ==========================
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const fetchData = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/products/get-cat-brand`)
      .then((res) => {
        console.log(res.data);
        setBrandData(res.data.getBrands);
        setCategoryData(res.data.getCategories);
        setSubCategoryData(res.data.getSubCategories);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ============================= form submit to backend ======================

  let handleSubmit = (event) => {
    const IsNew = isNewcheckboxChecked;
    const IsNewPrice = isNewpricecheckboxChecked;
    // const IsNew2 = isNewcheckboxChecked2;
    // const IsNewPrice2 = isNewpricecheckboxChecked2;
    // const IsNew3 = isNewcheckboxChecked3;
    // const IsNewPrice3 = isNewpricecheckboxChecked3;
    // const IsNew4 = isNewcheckboxChecked4;
    // const IsNewPrice4 = isNewpricecheckboxChecked4;
    // const IsNew5 = isNewcheckboxChecked5;
    // const IsNewPrice5 = isNewpricecheckboxChecked5;

    const formdata = new FormData();
    formdata.append("name", productName.current.value);
    formdata.append("image", productImage.current.files[0]);
    formdata.append("brandId", brandId.current.value);
    formdata.append("categoryId", productCategoryId.current.value);
    formdata.append("subCategoryId", productSubCategoryId.current.value);
    formdata.append("description", productDesc.current.value);
    formdata.append("shortDescription", productShortDesc.current.value);
    formdata.append("price", productPrice.current.value);

    formdata.append("packSize1", productPackSize1.current.value);
    formdata.append("packSize2", productPackSize2.current.value);
    formdata.append("packSize3", productPackSize3.current.value);
    formdata.append("packSize4", productPackSize4.current.value);
    formdata.append("packSize5", productPackSize5.current.value);

    formdata.append("unitPrice1", productUnitPrice1.current.value);
    formdata.append("unitPrice2", productUnitPrice2.current.value);
    formdata.append("unitPrice3", productUnitPrice3.current.value);
    formdata.append("unitPrice4", productUnitPrice4.current.value);
    formdata.append("unitPrice5", productUnitPrice5.current.value);

    formdata.append("variantPrice1", productVariantPrice1.current.value);
    formdata.append("variantPrice2", productVariantPrice2.current.value);
    formdata.append("variantPrice3", productVariantPrice3.current.value);
    formdata.append("variantPrice4", productVariantPrice4.current.value);
    formdata.append("variantPrice5", productVariantPrice5.current.value);

    formdata.append("oldPrice1", productOldPrice1.current.value);
    formdata.append("oldPrice2", productOldPrice2.current.value);
    formdata.append("oldPrice3", productOldPrice3.current.value);
    formdata.append("oldPrice4", productOldPrice4.current.value);
    formdata.append("oldPrice5", productOldPrice5.current.value);

    formdata.append("flagText1", flagText1.current.value);
    formdata.append("flagText2", flagText2.current.value);
    formdata.append("flagText3", flagText3.current.value);
    formdata.append("flagText4", flagText4.current.value);
    formdata.append("flagText5", flagText5.current.value);

    if (IsNew === true) {
      formdata.append("isNew", 1);
    } else {
      formdata.append("isNew", 0);
    }

    if (IsNewPrice === true) {
      formdata.append("isNewPrice", 1);
    } else {
      formdata.append("isNewPrice", 0);
    }

    // if (IsNew2 === true) {
    //   formdata.append("isNew2", 1);
    // } else {
    //   formdata.append("isNew2", 0);
    // }

    // if (IsNewPrice2 === true) {
    //   formdata.append("isNewPrice2", 1);
    // } else {
    //   formdata.append("isNewPrice2", 0);
    // }

    // if (IsNew3 === true) {
    //   formdata.append("isNew3", 1);
    // } else {
    //   formdata.append("isNew3", 0);
    // }

    // if (IsNewPrice3 === true) {
    //   formdata.append("isNewPrice3", 1);
    // } else {
    //   formdata.append("isNewPrice3", 0);
    // }

    // if (IsNew4 === true) {
    //   formdata.append("isNew4", 1);
    // } else {
    //   formdata.append("isNew4", 0);
    // }

    // if (IsNewPrice4 === true) {
    //   formdata.append("isNewPrice4", 1);
    // } else {
    //   formdata.append("isNewPrice4", 0);
    // }
    // if (IsNew5 === true) {
    //   formdata.append("isNew5", 1);
    // } else {
    //   formdata.append("isNew5", 0);
    // }

    // if (IsNewPrice5 === true) {
    //   formdata.append("isNewPrice5", 1);
    // } else {
    //   formdata.append("isNewPrice5", 0);
    // }

    axios
      .post(`${BACKEND_BASE_URL}/api/admin/products/store`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
          setProductId(response.data.product.id);
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          // renderAllBrands();
          // setChecked(false);

          // event.target.reset();
          // setDescValue("", "html");
          // setShortDesc("", "html");
          // setModalShow(false);
        }
      });

    event.preventDefault();
    // alert(JSON.stringify(formValues));
  };

  // ============================= Edit data ================================
  const [Id, setId] = useState();

  const fetchDataForEdit = () => {
    console.log("Add More", productId);
    if (productId != 0) {
      axios
        .get(
          `${BACKEND_BASE_URL}/api/admin/products/product-attr-add/${productId}`
        )
        .then((res) => {
          // const productAttrData = res.data.productInfo.product_attrs;
          // setProductAttrData(res.data)

          console.log("Add More", res.data);
        });
      console.log("Add More", productId);
    }
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
  const [isNewcheckboxChecked, setCheckeboxChecked] = useState(false);
  const [isNewpricecheckboxChecked, setIsNewpricecheckboxChecked] =
    useState(false);
  // const [isNewcheckboxChecked2, setCheckeboxChecked2] = useState(false);
  // const [isNewpricecheckboxChecked2, setIsNewpricecheckboxChecked2] =
  //   useState(false);
  // const [isNewcheckboxChecked3, setCheckeboxChecked3] = useState(false);
  // const [isNewpricecheckboxChecked3, setIsNewpricecheckboxChecked3] =
  //   useState(false);
  // const [isNewcheckboxChecked4, setCheckeboxChecked4] = useState(false);
  // const [isNewpricecheckboxChecked4, setIsNewpricecheckboxChecked4] =
  //   useState(false);
  // const [isNewcheckboxChecked5, setCheckeboxChecked5] = useState(false);
  // const [isNewpricecheckboxChecked5, setIsNewpricecheckboxChecked5] =
  //   useState(false);

  const handleCheckbox = (e) => {
    setCheckeboxChecked(e.target.checked);
  };
  const handleCheckbox1 = (e) => {
    setIsNewpricecheckboxChecked(e.target.checked);
  };

  // const handleCheckbox2 = (e) => {
  //   setCheckeboxChecked2(e.target.checked);
  //   setIsNewpricecheckboxChecked2(e.target.checked);
  // };
  // const handleCheckbox3 = (e) => {
  //   setCheckeboxChecked3(e.target.checked);
  //   setIsNewpricecheckboxChecked3(e.target.checked);
  // };
  // const handleCheckbox4 = (e) => {
  //   setCheckeboxChecked4(e.target.checked);
  //   setIsNewpricecheckboxChecked4(e.target.checked);
  // };
  // const handleCheckbox5 = (e) => {
  //   setCheckeboxChecked5(e.target.checked);
  //   setIsNewpricecheckboxChecked5(e.target.checked);
  // };

  return (
    <div className="main__container">
      <div className="content-wrapper">
        <div className="breadcrumb d-flex justify-content-between">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            <Link to="#" className="before">
              Add New Product
            </Link>
          </div>
          <div className="breadcrumb-item p-0">
            <Link to="/admin/products">All Product</Link>
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

                  {/* Product Sub-Category Dropdown */}
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mb-3"
                  >
                    <Form.Label className="label fw-bold">
                      Select Sub-Category <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      required
                      ref={productSubCategoryId}
                    >
                      <option value="0">Select Sub-Category</option>
                      {subCategoryData.map((data, index) => {
                        return (
                          <option key={index} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  {/* Checkbox */}
                  <Form.Group
                    as={Col}
                    md="6"
                    className="mb-3"
                    controlId="validationCustom06"
                  >
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
                        onChange={handleCheckbox1}
                      />
                    </div>
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

                  {/* Product Price */}
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom03"
                  >
                    <Form.Label className="label fw-bold">Price</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      min="0"
                      placeholder="Price"
                      name="price"
                      ref={productPrice}
                      // value={}
                    />
                    <Form.Control.Feedback type="invalid">
                      Title is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>

                      <th> Pack Size</th>
                      <th> Unit Price</th>
                      <th>Varient Price</th>
                      <th> Old Price </th>
                      <th> Flag Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ========================= ROW 1 ========================= */}
                    <tr>
                      <td>1</td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="number"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize1}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="unitPrice"
                            placeholder="Unit Price"
                            ref={productUnitPrice1}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="variantPrice"
                            placeholder="variant price"
                            ref={productVariantPrice1}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Product Old Price */}
                        <Form.Group controlId="validationCustom04">
                          <Form.Control
                            type="number"
                            min="0"
                            name="oldPrice"
                            placeholder="Old Price"
                            ref={productOldPrice1}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*  Product Flag Size */}
                        <Form.Group controlId="validationCustom05">
                          <Form.Control
                            // required
                            type="text"
                            name="flagText"
                            placeholder="Flag Text"
                            ref={flagText1}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Checkbox */}
                        {/* <Form.Group controlId="validationCustom06">
                          <div className="mt-2">
                            <Form.Check
                              type="checkbox"
                              label="isNew"
                              value="1"
                              ref={isNew1}
                              onChange={handleCheckbox1}
                            />
                          </div>

                          <div className="mt-1">
                            <Form.Check
                              type="checkbox"
                              label="isNewPrice"
                              value="1"
                              ref={isNewPrice1}
                              onChange={handleCheckbox1}
                            />
                          </div>
                        </Form.Group> */}
                      </td>
                    </tr>
                    {/* ========================= ROW 2 ========================= */}
                    <tr>
                      <td>2</td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="number"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize2}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="unitPrice"
                            placeholder="Unit Price"
                            ref={productUnitPrice2}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="variantPrice"
                            placeholder="variant price"
                            ref={productVariantPrice2}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Product Old Price */}
                        <Form.Group controlId="validationCustom04">
                          <Form.Control
                            type="number"
                            min="0"
                            name="oldPrice"
                            placeholder="Old Price"
                            ref={productOldPrice2}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*  Product Flag Size */}
                        <Form.Group controlId="validationCustom05">
                          <Form.Control
                            // required
                            type="text"
                            name="flagText"
                            placeholder="Flag Text"
                            ref={flagText2}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Checkbox */}
                        {/* <Form.Group controlId="validationCustom06">
                          <div className="mt-2">
                            <Form.Check
                              type="checkbox"
                              label="isNew"
                              value="1"
                              ref={isNew2}
                              onChange={handleCheckbox2}
                            />
                          </div>

                          <div className="mt-1">
                            <Form.Check
                              type="checkbox"
                              label="isNewPrice"
                              value="1"
                              ref={isNewPrice2}
                              onChange={handleCheckbox2}
                            />
                          </div>
                        </Form.Group> */}
                      </td>
                    </tr>
                    {/* ========================= ROW 3 ========================= */}
                    <tr>
                      <td>3</td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="number"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize3}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="unitPrice"
                            placeholder="Unit Price"
                            ref={productUnitPrice3}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="variantPrice"
                            placeholder="variant price"
                            ref={productVariantPrice3}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Product Old Price */}
                        <Form.Group controlId="validationCustom04">
                          <Form.Control
                            type="number"
                            min="0"
                            name="oldPrice"
                            placeholder="Old Price"
                            ref={productOldPrice3}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*  Product Flag Size */}
                        <Form.Group controlId="validationCustom05">
                          <Form.Control
                            // required
                            type="text"
                            name="flagText"
                            placeholder="Flag Text"
                            ref={flagText3}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Checkbox */}
                        {/* <Form.Group controlId="validationCustom06">
                          <div className="mt-2">
                            <Form.Check
                              type="checkbox"
                              label="isNew"
                              value="1"
                              ref={isNew3}
                              onChange={handleCheckbox3}
                            />
                          </div>

                          <div className="mt-1">
                            <Form.Check
                              type="checkbox"
                              label="isNewPrice"
                              value="1"
                              ref={isNewPrice3}
                              onChange={handleCheckbox3}
                            />
                          </div>
                        </Form.Group> */}
                      </td>
                    </tr>
                    {/* ========================= ROW 4 ========================= */}
                    <tr>
                      <td>4</td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="number"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize4}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="unitPrice"
                            placeholder="Unit Price"
                            ref={productUnitPrice4}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="variantPrice"
                            placeholder="variant price"
                            ref={productVariantPrice4}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Product Old Price */}
                        <Form.Group controlId="validationCustom04">
                          <Form.Control
                            type="number"
                            min="0"
                            name="oldPrice"
                            placeholder="Old Price"
                            ref={productOldPrice4}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*  Product Flag Size */}
                        <Form.Group controlId="validationCustom05">
                          <Form.Control
                            // required
                            type="text"
                            name="flagText"
                            placeholder="Flag Text"
                            ref={flagText4}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Checkbox */}
                        {/* <Form.Group controlId="validationCustom06">
                          <div className="mt-2">
                            <Form.Check
                              type="checkbox"
                              label="isNew"
                              value="1"
                              ref={isNew4}
                              onChange={handleCheckbox4}
                            />
                          </div>

                          <div className="mt-1">
                            <Form.Check
                              type="checkbox"
                              label="isNewPrice"
                              value="1"
                              ref={isNewPrice4}
                              onChange={handleCheckbox4}
                            />
                          </div>
                        </Form.Group> */}
                      </td>
                    </tr>
                    {/* ========================= ROW 5 ========================= */}
                    <tr>
                      <td>5</td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="number"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize5}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="unitPrice"
                            placeholder="Unit Price"
                            ref={productUnitPrice5}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="number"
                            min="0"
                            name="variantPrice"
                            placeholder="variant price"
                            ref={productVariantPrice5}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Product Old Price */}
                        <Form.Group controlId="validationCustom04">
                          <Form.Control
                            // required
                            type="number"
                            min="0"
                            name="oldPrice"
                            placeholder="Old Price"
                            ref={productOldPrice5}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*  Product Flag Size */}
                        <Form.Group controlId="validationCustom05">
                          <Form.Control
                            // required
                            type="text"
                            name="flagText"
                            placeholder="Flag Text"
                            ref={flagText5}
                            // value={}
                          />
                          <Form.Control.Feedback type="invalid">
                            Title is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Checkbox */}
                        {/* <Form.Group controlId="validationCustom06">
                          <div className="mt-2">
                            <Form.Check
                              type="checkbox"
                              label="isNew"
                              value="1"
                              ref={isNew5}
                              onChange={handleCheckbox5}
                            />
                          </div>

                          <div className="mt-1">
                            <Form.Check
                              type="checkbox"
                              label="isNewPrice"
                              value="1"
                              ref={isNewPrice5}
                              onChange={handleCheckbox5}
                            />
                          </div>
                        </Form.Group> */}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="text-center  mb-5">
            <Button
              className="btn_submit border-0 rounded-3 mt-4"
              type="submit"
              // onClick={fetchDataForEdit}
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
