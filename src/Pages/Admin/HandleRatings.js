import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../Components/GlobalVariables";

const HandleRatings = () => {
  const [newProductRating, setNewProductRating] = useState([]);
  const [allProductRatings, setAllProductRatings] = useState([]);

  const AllProductRating = () => {
    axios.get(`${BACKEND_BASE_URL}/api/admin/product/ratings`).then((res) => {
      setAllProductRatings(res.data.allProductRating);
    });
  };

  const NewProductRating = () => {
    axios
      .get(`${BACKEND_BASE_URL}/api/admin/product/ratings/new`)
      .then((res) => {
        setNewProductRating(res.data.newProductRatings);
      });
  };

  const statusUpdate = (id, status) => {
    axios
      .get(
        `${BACKEND_BASE_URL}/api/admin/product/ratings/new-rating/status-update/${id}/${status}`
      )
      .then((res) => {
        NewProductRating();
        AllProductRating();
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
        .delete(`${BACKEND_BASE_URL}/api/admin/product/ratings/delete/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
            confirmButtonColor: "#5eba86",
          });
          NewProductRating();
          AllProductRating();
        });
    }
  };

  useEffect(() => {
    AllProductRating();
    NewProductRating();
  }, []);

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
                  <div className="card-header my-2">
                    <h4>All Ratings</h4>
                    <hr />
                  </div>
                </div>
                <Row>
                  {" "}
                  <Col md={12}>
                    <h3 className="text-center my-2">
                      Pending Rating on Product
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col"> User Name</th>
                            <th scope="col">User Rating</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {newProductRating?.map((data, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{data.ratingUser}</td>
                              <td>{data.rating}</td>
                              <td>
                                {data.status == 0 ? (
                                  <div
                                    className="btn btn-warning btn-sm border-0 me-1"
                                    onClick={() =>
                                      statusUpdate(data.id, data.status)
                                    }
                                  >
                                    Approve
                                  </div>
                                ) : (
                                  ""
                                )}

                                <div
                                  className="btn btn-danger btn-sm border-0 "
                                  onClick={() => deleteData(data.id)}
                                >
                                  Delete
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                  <Col md={12}>
                    <h3 className="text-center my-2">
                      All Approved Rating on Product
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col"> User Name</th>
                            <th scope="col">User Rating</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allProductRatings?.map((data, index) => (
                            <tr key={index}>
                              <td> {index + 1}</td>
                              <td>{data.ratingUser}</td>
                              <td>{data.rating}</td>
                              <td>
                                <div
                                  className="btn btn-danger btn-sm border-0"
                                  onClick={() => deleteData(data.id)}
                                >
                                  Delete
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleRatings;
