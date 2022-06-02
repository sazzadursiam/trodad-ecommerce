import React from "react";
import * as FaIcons from "react-icons/fa";
import "./admindashboard.css"

const AdminDashboard = () => {
  return (
    <div className="">
    <div className="body-wrapper">
      <div className="card-effect">
        <div className="dashboard">
          <b>Dashboard</b>
        </div>
      </div>
      <div className="">
        <div className="row py-3">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="widget">
                <div className="widget-icon">
                  <FaIcons.FaListAlt className="w-icon" />
                </div>
                <div className="widget-content">
                  <h6 className="text-uppercase text widget-title">
                    <strong>Mega Menu</strong>
                  </h6>
                  <h1 className=" text-dark font-weight-bold">2</h1>
                  <p>
                    <a href="#" className="btn">
                      View All
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="widget">
                <div className="widget-icon">
                  <FaIcons.FaWindowRestore className="w-icon" />
                </div>
                <div className="widget-content">
                  <h6 className="text-uppercase text widget-title">
                    <strong>Mega Menu</strong>
                  </h6>
                  <h1 className=" text-dark font-weight-bold">2</h1>
                  <p>
                    <a href="#" className="btn">
                      View All
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="widget">
                <div className="widget-icon">
                  <FaIcons.FaShoppingCart className="w-icon" />
                </div>
                <div className="widget-content">
                  <h6 className="text-uppercase text widget-title">
                    <strong>Mega Menu</strong>
                  </h6>
                  <h1 className=" text-dark font-weight-bold">2</h1>
                  <p>
                    <a href="#" className="btn">
                      View All
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="widget">
                <div className="widget-icon">
                  <FaIcons.FaUser className="w-icon" />
                </div>
                <div className="widget-content">
                  <h6 className="text-uppercase text widget-title">
                    <strong>Mega Menu</strong>
                  </h6>
                  <h1 className=" text-dark font-weight-bold">2</h1>
                  <p>
                    <a href="#" className="btn">
                      View All
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="widget">
                <div className="widget-icon">
                  <FaIcons.FaProductHunt className="w-icon" />
                </div>
                <div className="widget-content">
                  <h6 className="text-uppercase text widget-title">
                    <strong>Mega Menu</strong>
                  </h6>
                  <h1 className=" text-dark font-weight-bold">2</h1>
                  <p>
                    <a href="#" className="btn">
                      View All
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdminDashboard;
