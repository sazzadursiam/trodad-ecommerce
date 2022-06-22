import axios from "axios";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../Components/GlobalVariables";

import "./admindashboard.css";

const AdminDashboard = () => {
  const [customerCount, setCustomerCount] = useState([]);
  const [productCount, setProductCount] = useState([]);
  const [brandsCount, setBrandsCount] = useState([]);
  const [productCategoryCount, setProductCategoryCount] = useState([]);
  const [ordersCount, setOrdersCount] = useState([]);
  const DashboardInfo = async () => {
    await axios.get(`${BACKEND_BASE_URL}/api/admin/all-counts`).then((res) => {
      setCustomerCount(res.data.numOfCustomers);
      setProductCount(res.data.numOfProducts);
      setBrandsCount(res.data.numOfBrands);
      setProductCategoryCount(res.data.numOfProductCategory);
      setOrdersCount(res.data.numOfOrders);
    });
  };

  useEffect(() => {
    DashboardInfo();
  }, []);

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
                    <FaIcons.FaWindowRestore className="w-icon" />
                  </div>
                  <div className="widget-content">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Orders</strong>
                    </h6>
                    <h1 className=" text-dark font-weight-bold">
                      {ordersCount}
                    </h1>
                    <p>
                      <Link to="all-orders" className="btn">
                        View All
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card mb-3">
                <div className="widget">
                  <div className="widget-icon">
                    <FaIcons.FaListAlt className="w-icon" />
                  </div>
                  <div className="widget-content">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Product Category</strong>
                    </h6>
                    <h1 className=" text-dark font-weight-bold">
                      {productCategoryCount}
                    </h1>
                    <p>
                      <Link to="categories" className="btn">
                        View All
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card mb-3">
                <div className="widget">
                  <div className="widget-icon">
                    <SiIcons.SiBrandfolder className="w-icon" />
                  </div>
                  <div className="widget-content">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Brands</strong>
                    </h6>
                    <h1 className=" text-dark font-weight-bold">
                      {brandsCount}
                    </h1>
                    <p>
                      <Link to="brands" className="btn">
                        View All
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card mb-3">
                <div className="widget">
                  <div className="widget-icon">
                    <MdIcons.MdGroups className="w-icon" />
                  </div>
                  <div className="widget-content">
                    <h6 className="text-uppercase text widget-title">
                      <strong>All Customers</strong>
                    </h6>
                    <h1 className=" text-dark font-weight-bold">
                      {customerCount}
                    </h1>
                    <p>
                      <Link to="all-customers" className="btn">
                        View All
                      </Link>
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
                      <strong>Products</strong>
                    </h6>
                    <h1 className=" text-dark font-weight-bold">
                      {productCount}
                    </h1>
                    <p>
                      <Link to="products" className="btn">
                        View All
                      </Link>
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
