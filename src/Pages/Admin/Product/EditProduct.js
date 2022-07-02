import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";
import Parse from "html-react-parser";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";
// import { UserContext } from "../../../App";

const EditProduct = () => {
  const productName = useRef();
  const productImage = useRef();
  const brandId = useRef();
  const productCategoryId = useRef();
  const productSubCategoryId = useRef();
  const shortDesc = useRef();
  const Description = useRef();
  const { id } = useParams();
  const productPrice = useRef();
  const productSku = useRef();

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

  // =================== Fetch Brands & Category Info ==========================
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);

  // Edited value set
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductImage, setEditedProductImage] = useState("");
  const [editedBrandDropdown, setEditedBrandDropdown] = useState("");
  const [editedCategoryDropdown, setEditedCategoryDropdown] = useState("");
  const [editedProductDesc, setEditedProductDesc] = useState("");
  const [editedProductShortDesc, setEditedProductShortDesc] = useState("");
  const [isNewcheckboxChecked, setEditedNewCheckeboxChecked] = useState(0);
  const [isNewpricecheckboxChecked, setEditedIsNewpricecheckboxChecked] =
    useState(0);
  const [editedPrice, setEditedPrice] = useState([]);
  const [editedSku, setEditedSku] = useState([]);

  const [editedUnitPrice1, setEditedUnitPrice1] = useState("");
  const [editedUnitPrice2, setEditedUnitPrice2] = useState("");
  const [editedUnitPrice3, setEditedUnitPrice3] = useState("");
  const [editedUnitPrice4, setEditedUnitPrice4] = useState("");
  const [editedUnitPrice5, setEditedUnitPrice5] = useState("");

  const [editedDiscountPrice2, setEditedDiscountPrice2] = useState("");
  const [editedDiscountPrice3, setEditedDiscountPrice3] = useState("");
  const [editedDiscountPrice4, setEditedDiscountPrice4] = useState("");
  const [editedDiscountPrice5, setEditedDiscountPrice5] = useState("");

  const [editedPackSize1, setEditedPackSize1] = useState("");
  const [editedPackSize2, setEditedPackSize2] = useState("");
  const [editedPackSize3, setEditedPackSize3] = useState("");
  const [editedPackSize4, setEditedPackSize4] = useState("");
  const [editedPackSize5, setEditedPackSize5] = useState("");

  const [editedVariantPrice1, setEditedVariantPrice1] = useState("");
  const [editedVariantPrice2, setEditedVariantPrice2] = useState("");
  const [editedVariantPrice3, setEditedVariantPrice3] = useState("");
  const [editedVariantPrice4, setEditedVariantPrice4] = useState("");
  const [editedVariantPrice5, setEditedVariantPrice5] = useState("");

  const [editedOldPrice1, setEditedOldPrice1] = useState("");
  const [editedOldPrice2, setEditedOldPrice2] = useState("");
  const [editedOldPrice3, setEditedOldPrice3] = useState("");
  const [editedOldPrice4, setEditedOldPrice4] = useState("");
  const [editedOldPrice5, setEditedOldPrice5] = useState("");

  const [editedFlagText1, setEditedFlagText1] = useState("");
  const [editedFlagText2, setEditedFlagText2] = useState("");
  const [editedFlagText3, setEditedFlagText3] = useState("");
  const [editedFlagText4, setEditedFlagText4] = useState("");
  const [editedFlagText5, setEditedFlagText5] = useState("");

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
          isNew,
          isNewPrice,
          price,
          packSize1,
          packSize2,
          packSize3,
          packSize4,
          packSize5,
          sku,
          discount2,
          discount3,
          discount4,
          discount5,
          unitPrice1,
          unitPrice2,
          unitPrice3,
          unitPrice4,
          unitPrice5,
          variantPrice1,
          variantPrice2,
          variantPrice3,
          variantPrice4,
          variantPrice5,
          oldPrice1,
          oldPrice2,
          oldPrice3,
          oldPrice4,
          oldPrice5,
          flagText1,
          flagText2,
          flagText3,
          flagText4,
          flagText5,
        } = res.data.editProduct;
        setEditedProductName(name);
        setEditedProductImage(image);
        setEditedBrandDropdown(brandId);
        setEditedCategoryDropdown(categoryId);
        setEditedProductShortDesc(shortDescription);
        setEditedProductDesc(description);
        setEditedPrice(price);
        setEditedSku(sku);

        setBrandData(res.data.allBrands);
        setCategoryData(res.data.allMainCategory);
        setSubCategoryData(res.data.subCategory);
        setEditedNewCheckeboxChecked(isNew);
        setEditedIsNewpricecheckboxChecked(isNewPrice);

        setEditedUnitPrice1(unitPrice1);
        setEditedUnitPrice2(unitPrice2);
        setEditedUnitPrice3(unitPrice3);
        setEditedUnitPrice4(unitPrice4);
        setEditedUnitPrice5(unitPrice5);

        setEditedDiscountPrice2(discount2);
        setEditedDiscountPrice3(discount3);
        setEditedDiscountPrice4(discount4);
        setEditedDiscountPrice5(discount5);

        setEditedPackSize1(packSize1);
        setEditedPackSize2(packSize2);
        setEditedPackSize3(packSize3);
        setEditedPackSize4(packSize4);
        setEditedPackSize5(packSize5);

        setEditedVariantPrice1(variantPrice1);
        setEditedVariantPrice2(variantPrice2);
        setEditedVariantPrice3(variantPrice3);
        setEditedVariantPrice4(variantPrice4);
        setEditedVariantPrice5(variantPrice5);

        setEditedOldPrice1(oldPrice1);
        setEditedOldPrice2(oldPrice2);
        setEditedOldPrice3(oldPrice3);
        setEditedOldPrice4(oldPrice4);
        setEditedOldPrice5(oldPrice5);

        setEditedFlagText1(flagText1);
        setEditedFlagText2(flagText2);
        setEditedFlagText3(flagText3);
        setEditedFlagText4(flagText4);
        setEditedFlagText5(flagText5);
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
    formdata.append("subCategoryId", productSubCategoryId.current.value);
    formdata.append("description", Description.current.value);
    formdata.append("shortDescription", shortDesc.current.value);
    formdata.append("price", productPrice.current.value);
    formdata.append("sku", productSku.current.value);

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

  const handleCategory = () => {
    const categoryId = productCategoryId.current.value;

    axios
      .post(`${BACKEND_BASE_URL}/api/admin/get-sub-categories/${categoryId}`)
      .then((res) => {
        setSubCategoryData(res.data.spesificSubCategories);
      });
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
    setUnitPrice2(PriceVal - (PriceVal * discountVal2) / 100);
  };

  const changeUnitPrice3 = () => {
    const discountVal3 = productDiscountPrice3.current.value;
    const PriceVal = productPrice.current.value;
    setUnitPrice3(PriceVal - (PriceVal * discountVal3) / 100);
  };

  const changeUnitPrice4 = () => {
    const discountVal4 = productDiscountPrice4.current.value;
    const PriceVal = productPrice.current.value;
    setUnitPrice4(PriceVal - (PriceVal * discountVal4) / 100);
  };

  const changeUnitPrice5 = () => {
    const discountVal5 = productDiscountPrice5.current.value;
    const PriceVal = productPrice.current.value;
    setUnitPrice5(PriceVal - (PriceVal * discountVal5) / 100);
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

                      <Form.Select
                        required
                        ref={productCategoryId}
                        onChange={() => {
                          handleCategory();
                        }}
                      >
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

                    {/* Product Sub-Category Dropdown */}
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustom01"
                      className="mb-3"
                    >
                      <Form.Label className="label fw-bold">
                        Select Sub-Category{" "}
                        <span className="text-danger">*</span>
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
                        min="0"
                        placeholder="Price"
                        name="price"
                        ref={productPrice}
                        defaultValue={editedPrice}
                      />
                      <Form.Control.Feedback type="invalid">
                        Title is required
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Product Price */}
                    <Form.Group
                      as={Col}
                      md="12"
                      className="mb-3"
                      controlId="validationCustom03"
                    >
                      <Form.Label className="label fw-bold">SKU</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        
                        name="sku"
                        ref={productSku}
                        defaultValue={editedSku}
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
                        Product Description
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
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th> Unit Price</th>
                        <th>Discount (%)</th>
                        <th> Pack Size</th>
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
                          {/*    Product Unit Price  */}
                          <Form.Group controlId="validationCustom02">
                            <Form.Control
                              disabled
                              type="text"
                              min="0"
                              name="unitPrice1"
                              placeholder="Unit Price"
                              ref={productUnitPrice1}
                              defaultValue={editedUnitPrice1}
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
                              defaultValue={editedPackSize1}
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
                              defaultValue={
                                VariantPrice1 == null
                                  ? editedVariantPrice1
                                  : VariantPrice1
                              }
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
                              defaultValue={editedOldPrice1}
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
                              defaultValue={editedFlagText1}
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
                                UnitPrice2 == null
                                  ? editedUnitPrice2
                                  : UnitPrice2
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
                              defaultValue={editedDiscountPrice2}
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
                              defaultValue={editedPackSize2}
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
                              defaultValue={
                                VariantPrice2 == null
                                  ? editedVariantPrice2
                                  : VariantPrice2
                              }
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
                              defaultValue={editedOldPrice2}
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
                              defaultValue={editedFlagText2}
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
                                UnitPrice3 == null
                                  ? editedUnitPrice3
                                  : UnitPrice3
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
                              defaultValue={editedDiscountPrice3}
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
                              defaultValue={editedPackSize3}
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
                              defaultValue={
                                VariantPrice3 == null
                                  ? editedVariantPrice3
                                  : VariantPrice3
                              }
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
                              defaultValue={editedOldPrice3}
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
                              defaultValue={editedFlagText3}
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
                                UnitPrice4 == null
                                  ? editedUnitPrice4
                                  : UnitPrice4
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
                              defaultValue={editedDiscountPrice4}
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
                              defaultValue={editedPackSize4}
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
                              defaultValue={
                                VariantPrice4 == null
                                  ? editedVariantPrice4
                                  : VariantPrice4
                              }
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
                              defaultValue={editedOldPrice4}
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
                              defaultValue={editedFlagText4}
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
                                UnitPrice5 == null
                                  ? editedUnitPrice5
                                  : UnitPrice5
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
                              defaultValue={editedDiscountPrice5}
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
                              defaultValue={editedPackSize5}
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
                              defaultValue={
                                VariantPrice5 == null
                                  ? editedVariantPrice5
                                  : VariantPrice5
                              }
                              // value={VariantPrice5}
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
                              defaultValue={editedOldPrice5}
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
                              defaultValue={editedFlagText5}
                            />
                            <Form.Control.Feedback type="invalid">
                              Title is required
                            </Form.Control.Feedback>
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
