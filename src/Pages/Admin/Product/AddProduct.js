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

  const productDiscountPrice1 = useRef();
  const productDiscountPrice2 = useRef();
  const productDiscountPrice3 = useRef();
  const productDiscountPrice4 = useRef();
  const productDiscountPrice5 = useRef();

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

  // const isNew = useRef();
  // const isNewPrice = useRef();

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

  // =================== Fetch Brands , Category, Sub Category Info ==========================
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
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategory = () => {
    const categoryId = productCategoryId.current.value;

    axios
      .post(`${BACKEND_BASE_URL}/api/admin/get-sub-categories/${categoryId}`)
      .then((res) => {
        setSubCategoryData(res.data.spesificSubCategories);
      });
  };

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

    formdata.append(
      "unitPrice1",
      Number(productUnitPrice1.current.value).toFixed(2)
    );
    formdata.append(
      "unitPrice2",
      Number(productUnitPrice2.current.value).toFixed(2)
    );
    formdata.append(
      "unitPrice3",
      Number(productUnitPrice3.current.value).toFixed(2)
    );
    formdata.append(
      "unitPrice4",
      Number(productUnitPrice4.current.value).toFixed(2)
    );
    formdata.append(
      "unitPrice5",
      Number(productUnitPrice5.current.value).toFixed(2)
    );

    formdata.append("discount1", productDiscountPrice1.current.value);

    productDiscountPrice2.current.value
      ? formdata.append("discount2", productDiscountPrice2.current.value)
      : formdata.append("discount2", 0);

    productDiscountPrice3.current.value
      ? formdata.append("discount3", productDiscountPrice3.current.value)
      : formdata.append("discount3", 0);

    productDiscountPrice4.current.value
      ? formdata.append("discount4", productDiscountPrice4.current.value)
      : formdata.append("discount4", 0);

    productDiscountPrice5.current.value
      ? formdata.append("discount5", productDiscountPrice5.current.value)
      : formdata.append("discount5", 0);

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

  const handleCheckbox = (e) => {
    setCheckeboxChecked(e.target.checked);
  };
  const handleCheckbox1 = (e) => {
    setIsNewpricecheckboxChecked(e.target.checked);
  };

  // ================= price === unit price ========================
  const [pValue, setPValue] = useState({
    price: "",
    unitPrice1: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setPValue((prevValue) => {
      if (name === "price") {
        return {
          price: value,
          unitPrice1: prevValue.unitPrice1,
        };
      } else if (name === "unitPrice1") {
        return {
          price: prevValue.value,
          unitPrice1: value,
        };
      }
    });
    return value;
  };

  const [VariantPrice1, setVariantPrice1] = useState();
  const [VariantPrice2, setVariantPrice2] = useState();
  const [VariantPrice3, setVariantPrice3] = useState();
  const [VariantPrice4, setVariantPrice4] = useState();
  const [VariantPrice5, setVariantPrice5] = useState();

  const SetVariantPrice1 = (e) => {
    e.preventDefault();
    const unitPriceVal1 = productUnitPrice1.current.value;

    const PackSize1 = e.target.value;
    const Variant1 = unitPriceVal1 * PackSize1;
    setVariantPrice1(Variant1);
  };

  const SetVariantPrice2 = (e) => {
    e.preventDefault();
    const unitPriceVal2 = productUnitPrice2.current.value;

    let PackSize2 = productPackSize2.current.value;
    if (PackSize2 === "" || PackSize2 == null) {
      PackSize2 = 1;
    }
    const Variant2 = Number(unitPriceVal2 * PackSize2).toFixed(2);
    setVariantPrice2(Variant2);
  };

  const SetVariantPrice3 = (e) => {
    e.preventDefault();
    const unitPriceVal3 = productUnitPrice3.current.value;

    let PackSize3 = productPackSize3.current.value;
    if (PackSize3 === "" || PackSize3 == null) {
      PackSize3 = 1;
    }
    const Variant3 = Number(unitPriceVal3 * PackSize3).toFixed(2);
    setVariantPrice3(Variant3);
  };

  const SetVariantPrice4 = (e) => {
    e.preventDefault();
    const unitPriceVal4 = productUnitPrice4.current.value;

    let PackSize4 = productPackSize4.current.value;
    if (PackSize4 === "" || PackSize4 == null) {
      PackSize4 = 1;
    }
    const Variant4 = Number(unitPriceVal4 * PackSize4).toFixed(2);
    setVariantPrice4(Variant4);
  };

  const SetVariantPrice5 = (e) => {
    e.preventDefault();
    const unitPriceVal5 = productUnitPrice5.current.value;

    let PackSize5 = productPackSize5.current.value;
    if (PackSize5 === "" || PackSize5 == null) {
      PackSize5 = 1;
    }
    const Variant5 = Number(unitPriceVal5 * PackSize5).toFixed(2);
    setVariantPrice5(Variant5);
  };

  const [UnitPrice2, setUnitPrice2] = useState();
  const [UnitPrice3, setUnitPrice3] = useState();
  const [UnitPrice4, setUnitPrice4] = useState();
  const [UnitPrice5, setUnitPrice5] = useState();

  const changeUnitPrice2 = () => {
    const discountVal2 = productDiscountPrice2.current.value;
    const PriceVal = productPrice.current.value;
    const unitPrice2 = PriceVal - (PriceVal * discountVal2) / 100;
    setUnitPrice2(Number(unitPrice2).toFixed(2));
    setVariantPrice2(
      Number(unitPrice2 * productPackSize2.current.value).toFixed(2)
    );
  };

  const changeUnitPrice3 = () => {
    const discountVal3 = productDiscountPrice3.current.value;
    const PriceVal = productPrice.current.value;
    const unitPrice3 = PriceVal - (PriceVal * discountVal3) / 100;
    setUnitPrice3(Number(unitPrice3).toFixed(2));
    setVariantPrice3(
      Number(unitPrice3 * productPackSize3.current.value).toFixed(2)
    );
  };

  const changeUnitPrice4 = () => {
    const discountVal4 = productDiscountPrice4.current.value;
    const PriceVal = productPrice.current.value;
    const unitPrice4 = PriceVal - (PriceVal * discountVal4) / 100;
    setUnitPrice4(Number(unitPrice4).toFixed(2));
    setVariantPrice4(
      Number(unitPrice4 * productPackSize4.current.value).toFixed(2)
    );
  };

  const changeUnitPrice5 = () => {
    const discountVal5 = productDiscountPrice5.current.value;
    const PriceVal = productPrice.current.value;
    const unitPrice5 = PriceVal - (PriceVal * discountVal5) / 100;
    setUnitPrice5(Number(unitPrice5).toFixed(2));
    setVariantPrice5(
      Number(unitPrice5 * productPackSize5.current.value).toFixed(2)
    );
  };

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
                      onChange={() => {
                        handleCategory();
                      }}
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
                      <option value="0">Sub-Category</option>

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
                  {/* <Form.Group
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
                  </Form.Group> */}

                  {/* Product Price */}
                  <Form.Group
                    as={Col}
                    md="6"
                    className="mb-3"
                    controlId="validationCustom03"
                  >
                    <Form.Label className="label fw-bold">Price</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Price"
                      name="price"
                      ref={productPrice}
                      onChange={handleInput}
                      value={pValue.price}
                    />
                    <Form.Control.Feedback type="invalid">
                      Title is required
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
                      ref={productShortDesc}
                      config={config}
                      tabIndex={1}
                      value={shortDesc}
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
                      Product Description
                    </Form.Label>
                    <JoditEditor
                      ref={productDesc}
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
                      <th> Unit Price</th>
                      <th>Discount (%)</th>
                      <th> Pack Size</th>
                      <th>Variant Price</th>
                      <th> Old Price </th>
                      <th> Flag Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ========================= ROW 1 ========================= */}
                    <tr>
                      <td>1</td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="unitPrice1"
                            placeholder="Unit Price"
                            ref={productUnitPrice1}
                            value={pValue.price}
                            // onChange={handleInput}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Discount Percentage */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="discountPrice1"
                            placeholder="Discount Percentage"
                            ref={productDiscountPrice1}
                            value="0"
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="text"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize1}
                            // value=""
                            onChange={SetVariantPrice1}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>

                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="variantPrice"
                            placeholder="variant price"
                            ref={productVariantPrice1}
                            value={VariantPrice1}
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
                            type="text"
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
                    </tr>
                    {/* ========================= ROW 2 ========================= */}
                    <tr>
                      <td>2</td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="unitPrice2"
                            placeholder="Unit Price"
                            ref={productUnitPrice2}
                            defaultValue={
                              UnitPrice2 == null ? pValue.price : UnitPrice2
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Discount Percentage */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="text"
                            min="0"
                            name="discountPrice2"
                            placeholder="discount percentage"
                            ref={productDiscountPrice2}
                            // value={}
                            onChange={changeUnitPrice2}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="text"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize2}
                            // value={}
                            onChange={SetVariantPrice2}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>

                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="variantPrice2"
                            placeholder="variant price"
                            ref={productVariantPrice2}
                            value={VariantPrice2}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        {/* Product Old Price */}
                        <Form.Group controlId="validationCustom04">
                          <Form.Control
                            type="text"
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
                    </tr>
                    {/* ========================= ROW 3 ========================= */}
                    <tr>
                      <td>3</td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="unitPrice3"
                            placeholder="Unit Price"
                            ref={productUnitPrice3}
                            defaultValue={
                              UnitPrice3 == null ? pValue.price : UnitPrice3
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Discount Percentage */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="text"
                            min="0"
                            name="discountPrice3"
                            placeholder="discount percentage"
                            ref={productDiscountPrice3}
                            // value={}
                            onChange={changeUnitPrice3}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="text"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize3}
                            // value={}
                            onChange={SetVariantPrice3}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>

                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="variantPrice3"
                            placeholder="variant price"
                            ref={productVariantPrice3}
                            value={VariantPrice3}
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
                            type="text"
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
                    </tr>
                    {/* ========================= ROW 4 ========================= */}
                    <tr>
                      <td>4</td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="unitPrice4"
                            placeholder="Unit Price"
                            ref={productUnitPrice4}
                            defaultValue={
                              UnitPrice4 == null ? pValue.price : UnitPrice4
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Discount Percentage */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="text"
                            min="0"
                            name="discountCount4"
                            placeholder="discount percentage"
                            ref={productDiscountPrice4}
                            // value={}
                            onChange={changeUnitPrice4}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="text"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize4}
                            // value={}
                            onChange={SetVariantPrice4}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>

                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="variantPrice4"
                            placeholder="variant price"
                            ref={productVariantPrice4}
                            value={VariantPrice4}
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
                            type="text"
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
                    </tr>
                    {/* ========================= ROW 5 ========================= */}
                    <tr>
                      <td>5</td>
                      <td>
                        {/*    Product Unit Price  */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="unitPrice5"
                            placeholder="Unit Price"
                            ref={productUnitPrice5}
                            defaultValue={
                              UnitPrice5 == null ? pValue.price : UnitPrice5
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Discount Percentage */}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            type="text"
                            min="0"
                            name="discountCount5"
                            placeholder="discount percentage"
                            ref={productDiscountPrice5}
                            onChange={changeUnitPrice5}
                          />
                          <Form.Control.Feedback type="invalid">
                            unit price is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/*    Product PackSize  */}
                        <Form.Group controlId="validationCustom01">
                          <Form.Control
                            type="text"
                            name="packSize"
                            placeholder="Pack Size"
                            ref={productPackSize5}
                            // value={}
                            onChange={SetVariantPrice5}
                          />
                          <Form.Control.Feedback type="invalid">
                            pack size is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        {/* Variant Price*/}
                        <Form.Group controlId="validationCustom02">
                          <Form.Control
                            disabled
                            type="text"
                            min="0"
                            name="variantPrice5"
                            placeholder="variant price"
                            ref={productVariantPrice5}
                            value={VariantPrice5}
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
                            type="text"
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
