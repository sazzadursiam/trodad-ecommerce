import axios from "axios";
import React, { useEffect, useState } from "react";

import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";
import Swal from "sweetalert2";

const AdminOrders = () => {
  //=================================== Fetch Table Data ===================================

  const [allOrders, setAllOrders] = useState([]);

  const renderAllBrands = async () => {
    try {
      await axios
        .get(`${BACKEND_BASE_URL}/api/admin/all-orders`)
        .then((res) => {
          setAllOrders(res.data.allOrders);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderAllBrands();
  }, []);

  // View Single Order
  const [singleOrderInfo, setSingleOrderInfo] = useState([]);

  // Edit value
  const [editedBrandName, setEditedBrandName] = useState();
  const [editedBrandImage, setEditedBrandImage] = useState();
  const [editedBrandDesc, setEditedBrandDesc] = useState();

  // ============================= form submit to backend ======================

  // ===================== View single image ===================================

  // ===================== Edit data ==========================================

  const [Id, setId] = useState();
  // const fetchDataForEdit = (modalValue, id) => {
  //   axios.get(`${BACKEND_BASE_URL}/api/admin/brands/edit/${id}`).then((res) => {
  //     const { id, brandName, brandImage, shortDesc } = res.data.editBrand;
  //     setId(id);
  //     setEditedBrandName(brandName);
  //     setEditedBrandImage(brandImage);
  //     setEditedBrandDesc(shortDesc);
  //   });
  // };

  // ===================== Updated data to backend ===============================

  // const updateImageGallery = (e) => {
  //   const UpdatedBrandImage = brandImage.current.files[0];

  //   const formdata = new FormData();
  //   formdata.append("_method", "PUT");
  //   formdata.append("brandName", brandName.current.value);
  //   if (UpdatedBrandImage) {
  //     formdata.append("brandImage", UpdatedBrandImage);
  //   }
  //   formdata.append("shortDesc", shortDesc.current.value);

  //   axios
  //     .post(`${BACKEND_BASE_URL}/api/admin/brands/update/${Id}`, formdata, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })

  //     .then((response) => {
  //       Swal.fire({
  //         icon: "success",
  //         text: response.data.message,
  //         confirmButtonColor: "#5eba86",
  //       });
  //       renderAllBrands();
  //     });

  //   e.preventDefault();
  // };

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
        .delete(`${BACKEND_BASE_URL}/api/admin/brands/delete/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
            confirmButtonColor: "#5eba86",
          });
          renderAllBrands();
        });
    }
  };

  return (
    <div className="main__container">
      <div className="content-wrapper">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Link to="/admin">Dashboard</Link>
            {/* <Link to="#" className="before">
              Add
            </Link> */}
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="p-2">
                  <div className="card-header">
                    <h5 className="form-title my-2 fw-bold ">All Orders</h5>
                    <hr />
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Total </th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrders.map((data, index) => (
                        <tr key={index}>
                          <td>{"# " + data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.created_at.toString().slice(0, 10)}</td>
                          <td>{data.orderStatus == 0 ? "Placed" : ""}</td>
                          <td>{data.paymentStatus}</td>
                          <td>{data.totalAmount}</td>
                          <td>
                            {/* view button */}
                            <Link
                              to={`${data.id}`}
                              className="py-1 px-2 bg-info border-0 rounded-3 me-1 mb-1"
                            >
                              <FaIcons.FaEye
                                style={{
                                  color: "white",
                                }}
                                title="View"
                                size="1.5em"
                              />{" "}
                            </Link>

                            {/* delete button */}
                            {/* <button
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
                            </button> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
