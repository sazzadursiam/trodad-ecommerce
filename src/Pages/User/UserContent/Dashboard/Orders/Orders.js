import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../../../Components/GlobalVariables";

const Orders = () => {
  const { userId } = useParams();

  const [userOrders, setUserOrder] = useState([]);

  const renderAllProducts = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}/api/users/orders/${userId}/view`)
      .then((res) => {
        setUserOrder(res.data.usersOrders);
        console.log(res.data);
      });
  };

  useEffect(() => {
    renderAllProducts();
  }, []);

  var total_qty = 0;

  return (
    <div>
      <div className="table-responsive ">
        <table className="table mb-0">
          <thead>
            <tr>
              <th scope="col">ORDER</th>
              <th scope="col">DATE</th>
              <th scope="col">STATUS</th>
              <th scope="col">TOTAL</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* table data */}
            {userOrders.map((data, i) => (
              <tr key={i}>
                <td>#{data.id}</td>

                <td>{data.created_at.toString().slice(0, 10)}</td>
                <td>{data.orderStatus == 0 ? "Placed" : ""}</td>
                {data.order_details.map((qty, i) => (
                  <span className="d-none" key={i}>
                    {(total_qty = total_qty + qty.qty)}
                  </span>
                ))}
                <td>
                  <span className="fw-bold me-3">{data.totalAmount} kr</span>
                  for <strong>{total_qty}</strong> items
                </td>

                <td>
                  <Link to={`orderdetails/${data.id}`}>
                    <Button className="border-0" variant="success">
                      View
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
