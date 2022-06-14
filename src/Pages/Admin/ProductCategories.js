import {
  InputLabel,
} from "@mui/material";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import Parse from "html-react-parser";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";

const ProductCategories = () => {
  const CategoryName = useRef();
  const ParentCategoryId = useRef();
  const shortDesc = useRef();

  const [descValue, setDescValue] = useState();
  const [validated, setValidated] = useState(false);

  // Fetch Table Data
  const [tableData, setTableData] = useState([]);
  const [parentCategoryData, setParentCategoryData] = useState([]);
  const fetchData = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/product-categories`)
      .then((res) => {
        console.log(res.data);
        setTableData(res.data.allProductCategory);
        setParentCategoryData(res.data.allParrentCategory);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add new
  const addNewData = (modalValue) => {
    setModalSize("lg");
    setModalData(modalValue);
    setModalShow(true);
  };

  // ============================= View Single Data ==========================

  const [singleData, setSingleData] = useState([]);
  const showSingleData = (modalValue, id) => {
    setModalSize("");
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/product-categories/view/${id}`)
      .then((res) => {
        console.log(res.data);
        setModalSize("lg");
        setModalData(modalValue);
        setSingleData(res.data.viewCategory);
        // console.log(res.data.viewQualityWork);
        setModalShow(true);
      });
  };

  // ============================ Form submit to backend ======================
  const store = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    const formdata = new FormData();
    formdata.append("name", CategoryName.current.value);
    formdata.append("parrentCatId", ParentCategoryId.current.value);
    formdata.append("shortDesc", shortDesc.current.value);

    axios
      .post(
        `${BACKEND_BASE_URL}/api/admin/product-categories/store`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          e.target.reset();
          setDescValue("", "html");
          fetchData();
          setValidated(false);
          setModalShow(false);
        }
      });
    e.preventDefault();
  };

  // ============================= Edit data ================================
  const [Id, setId] = useState();

  const [editedCategoryName, setEditedCategoryName] = useState();
  const [editedCategoryDropdown, setEditedCategoryDropdown] = useState();
  const [editedShortDescription, setEditedShortDescription] = useState();

  const fetchDataForEdit = (modalValue, id) => {
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/product-categories/edit/${id}`)
      .then((res) => {
        const { id, name, parrentCatId, shortDesc } = res.data.editCategory;

        console.log("sffssdfsd", res.data.editCategory);
        setId(id);
        setEditedCategoryName(name);
        setEditedCategoryDropdown(parrentCatId);
        setEditedShortDescription(shortDesc);
        setModalData(modalValue);
        setModalSize("lg");
        setModalShow(true);
        // console.log("Set value to var", isChecked);
      });
  };

  // ============================ Updated data to backend =======================
  const updateData = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("name", CategoryName.current.value);
    formdata.append("parrentCatId", ParentCategoryId.current.value);
    formdata.append("shortDesc", shortDesc.current.value);

    axios
      .post(
        `${BACKEND_BASE_URL}/api/admin/product-categories/update/${Id}`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )

      .then((response) => {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        setModalShow(false);
        fetchData();
      });

    e.preventDefault();
  };

  const statusUpdate = (id, status) => {
    // console.log("In");
    axios
      .get(
        `${BACKEND_BASE_URL}/api/admin/product-categories/status-update/${id}/${status}`
      )
      .then((res) => {
        fetchData();
      });
  };

  // ================================== Delete Data ==================================
  const deleteData = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    if (isConfirm) {
      axios
        .delete(`${BACKEND_BASE_URL}/api/admin/product-categories/delete/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
            confirmButtonColor: "#5eba86",
          });
          fetchData();
        });
    }
  };

  // Modal Section Data
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState("");
  const [modalSize, setModalSize] = useState("lg");

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
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            <Link to="#" className="before">
              Add Product Category
            </Link>
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="card p-2">
                  <div className="card-header">
                    <Button
                      variant="success"
                      size="sm"
                      className="border-0"
                      onClick={() => addNewData("Add")}
                    >
                      Add &nbsp;
                      <span>
                        <AiIcons.AiOutlinePlusCircle />
                      </span>
                    </Button>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="table-responsive table_wrapper">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Category Name</th>
                      <th scope="col">Parent</th>
                      <th scope="col">Status</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td> {index + 1}</td>
                        <td>{data.name}</td>

                        <td>
                          {data.parent_category
                            ? data.parent_category.name
                            : "Main Category"}
                        </td>
                        <td>
                          {data.status == 1 ? (
                            <div
                              className="btn btn-success btn-sm border-0"
                              onClick={() => statusUpdate(data.id, data.status)}
                            >
                              Active
                            </div>
                          ) : (
                            <div
                              className="btn btn-danger btn-sm border-0"
                              onClick={() => statusUpdate(data.id, data.status)}
                            >
                              In-active
                            </div>
                          )}
                        </td>
                        <td>
                          {/* view button */}
                          <button
                            onClick={() => showSingleData("View", data.id)}
                            className="py-1 px-2 bg-info border-0 rounded-3 me-1 mb-1"
                          >
                            <FaIcons.FaEye
                              style={{
                                color: "white",
                              }}
                              title="View"
                              size="1.5em"
                            />{" "}
                          </button>
                          {/* edit button */}
                          <button
                            onClick={() => fetchDataForEdit("Edit", data.id)}
                            className="py-1 px-2 bg-warning border-0 rounded-3 me-1 mb-1"
                          >
                            <BiIcons.BiEdit
                              style={{
                                color: "white",
                              }}
                              title="Edit"
                              size="1.5em"
                            />
                          </button>
                          {/* delete button */}
                          <button
                            onClick={() => deleteData(data.id)}
                            className="py-1 px-2 bg-danger border-0 rounded-3 me-1 mb-1"
                          >
                            <MdIcons.MdDeleteForever
                              style={{
                                color: "white",
                              }}
                              title="Delete"
                              size="1.5em"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Modal
              show={modalShow}
              size={modalSize}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title
                  className="text-white"
                  id="contained-modal-title-vcenter"
                >
                  {modalData}
                </Modal.Title>
                <Button
                  className="p-0 border-0 bg-danger"
                  onClick={() => setModalShow(false)}
                >
                  <CgIcons.CgClose
                    style={{
                      fontSize: "26px",
                    }}
                  />
                </Button>
              </Modal.Header>
              <Modal.Body>
                {/* Add Modal section */}
                {modalData === "Add" && (
                  <div className="">
                    <Form onSubmit={store} noValidate validated={validated}>
                      <div className="content-wrapper">
                        <div className="card">
                          <div className="card-body">
                            <Row className="mb-3">
                              {/*=================== Category Name ================*/}
                              <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustom01"
                                className="mb-3"
                              >
                                <Form.Label className="label fw-bold">
                                  Category Name
                                </Form.Label>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="category name"
                                  ref={CategoryName}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Category name is required
                                </Form.Control.Feedback>
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

                                <Form.Select required ref={ParentCategoryId}>
                                  <option value="0">Main</option>
                                  {parentCategoryData.map((data, index) => {
                                    return (
                                      <option key={index} value={data.id}>
                                        {data.name}
                                      </option>
                                    );
                                  })}
                                </Form.Select>

                                <Form.Control.Feedback type="invalid">
                                  Category name is required
                                </Form.Control.Feedback>
                              </Form.Group>

                              {/* Short Desc */}
                              <Form.Group
                                as={Col}
                                md="12"
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
                                  value={descValue}
                                />
                              </Form.Group>
                            </Row>

                            <Button
                              type="submit"
                              className="btn-submit mt-5 rounded-3 border-0 d-flex justify-content-center"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}

                {/* Edit modal section */}
                {modalData === "Edit" && (
                  <Form onSubmit={updateData}>
                    <div className="content-wrapper">
                      <div className="card">
                        <div className="card-body">
                          <Row className="py-3">
                            {/* Category Name */}
                            <div className="col-md-6">
                              <div className="form-group mb-3">
                                <div>
                                  <InputLabel
                                    required
                                    className="label fw-bold"
                                  >
                                    Category Name
                                  </InputLabel>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                    ref={CategoryName}
                                    value={editedCategoryName}
                                    onChange={(e) => {
                                      setEditedCategoryName(e.target.value);
                                    }}
                                  />
                                  <div className="mt-2"></div>
                                </div>
                              </div>
                            </div>

                            {/* Category Dropdown */}
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom01"
                              className="mb-3"
                            >
                              <InputLabel
                                required
                                className="label fw-bold"
                                id="section-lebel"
                              >
                                Select Category
                              </InputLabel>
                              <Form.Select
                                aria-label="Default select example"
                                required
                                ref={ParentCategoryId}
                              >
                                <option value="0">Main</option>
                                {parentCategoryData.map((data, index) => {
                                  let selected =
                                    data.id == editedCategoryDropdown
                                      ? "selected"
                                      : "";
                                  return (
                                    <option
                                      selected={selected}
                                      key={index}
                                      value={data.id}
                                    >
                                      {data.name}
                                    </option>
                                  );
                                })}
                              </Form.Select>
                            </Form.Group>

                            {/* Category Description */}
                            <div className="col-md-12">
                              <div className="form-group mb-3">
                                <Form.Label className="label fw-bold">
                                  Description
                                </Form.Label>
                                <JoditEditor
                                  ref={shortDesc}
                                  config={config}
                                  tabIndex={1}
                                  value={editedShortDescription}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group"></div>
                            </div>
                            {/* Submit button */}
                            <button
                              type="submit"
                              className="btn-submit mt-5 rounded-3 border-0"
                            >
                              Update
                            </button>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}

                {/* View Modal section */}
                {modalData === "View" && (
                  <>
                    <h4>Name: {singleData.name}</h4>

                    <div className="mt-2">
                      {Parse(`${singleData.shortDesc}`)}
                    </div>
                  </>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => setModalShow(false)}
                  className="btn-danger"
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
