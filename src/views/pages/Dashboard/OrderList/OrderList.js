import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading] = useState(false);
  console.log(orders);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="bookingContainer min-h-full p-10 bg-gray-300">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {orders.map(book => (
          <div
            key={book?._id}
            className="card cursor-pointer bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded relative"
          >
            <div className="flex justify-between items-center pt-6">
              {book?._id && !book.phone && (
                <Link to={`/dashboard/payment/${book._id}`}>
                  <button className="w-20 mr-8 h-8 rounded bg-red-200">
                    Pending
                  </button>{" "}
                </Link>
              )}
              {book._id && book.phone && (
                <div className="flex  justify-center justify-items-center text-center  ">
                  <p>
                    {" "}
                    <span className="btn btn-xs btn-cyan">Done</span>
                  </p>
                  <p>
                    Transaction id:
                    <span className="btn btn-xs btn-cyan">
                      {book.productId}
                    </span>{" "}
                  </p>
                </div>
              )}
            </div>
            <div className="card-body grid justify-items-start  -mt-3">
              <h2 className="card-title font-bold  ">{book.product}</h2>
              <p className="text-sm text-gray-400">{book.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
