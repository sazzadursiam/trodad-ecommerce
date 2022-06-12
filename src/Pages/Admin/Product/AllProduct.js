import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";
import Parse from "html-react-parser";
import Swal from "sweetalert2";

const AllProduct = () => {
  let navigate = useNavigate();
  const handleClick = (navigateUrl) => {
    navigate(navigateUrl);
  };

  // Modal Section Data
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState("");
  const [modalSize, setModalSize] = useState("lg");

  //=================================== Fetch Table Data ===================================

  const [tableData, setTableData] = useState([]);

  const renderAllProducts = async () => {
    try {
      await axios.get(`${BACKEND_BASE_URL}/api/admin/products`).then((res) => {
        setTableData(res.data.allProducts);
        console.log(res.data.allProducts);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderAllProducts();
  }, []);

  // ===================== View single Product Data ===================================
  const [singleProductInfo, setSingleProductInfo] = useState([]);

  const showSingleProductData = (modalValue, id) => {
    setModalSize("");
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/products/view/${id}`)
      .then((res) => {
        setModalSize("sm");
        setModalData(modalValue);
        setSingleProductInfo(res.data.viewProduct);
        setModalShow(true);
      });
  };

  // =============================== Delete Data ===============================
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
        .delete(`${BACKEND_BASE_URL}/api/admin/products/delete/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
            confirmButtonColor: "#5eba86",
          });
          renderAllProducts();
        });
    }
  };

  return (
    <div className="main__container">
      <div className="content-wrapper">
        <div className="breadcrumb d-flex justify-content-between">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            <Link to="#" className="before">
              All Products
            </Link>
          </div>
          <div className="breadcrumb-item p-0">
            <Link to="add-new">Add New Product</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <span className="top-border"></span>
            <div className="py-2 mt-5">
              <Link to="add-new">
                <Button variant="success" size="sm" className="border-0">
                  Add &nbsp;
                  <span>
                    <AiIcons.AiOutlinePlusCircle />
                  </span>
                </Button>
              </Link>
              <hr />
              <h5 className="form-title">All Products</h5>
              <hr />
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td> {index + 1}</td>
                      <td>{data.name}</td>
                      <td>
                        <img
                          className="img-thumbnail"
                          width={80}
                          height={50}
                          src={`${BACKEND_BASE_URL}${data.image}`}
                          alt={data.name}
                        />
                      </td>

                      <td>
                        {/* view button */}
                        <button
                          onClick={() => showSingleProductData("View", data.id)}
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
                        <Link to={`edit/${data.id}`}>
                          <button className="py-1 px-2 bg-warning border-0 rounded-3 me-1 mb-1">
                            <BiIcons.BiEdit
                              style={{
                                color: "white",
                              }}
                              title="Edit"
                              size="1.5em"
                            />
                          </button>
                        </Link>
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
              {/* View Modal section */}
              {modalData === "View" && (
                <>
                  <h4>{singleProductInfo.name}</h4>
                  <img
                    className="img-thumbnail"
                    src={`${BACKEND_BASE_URL}/${singleProductInfo.image}`}
                    alt=""
                  />
                  <p>{Parse(`${singleProductInfo.shortDescription}`)}</p>
                  <p>{Parse(`${singleProductInfo.description}`)}</p>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
