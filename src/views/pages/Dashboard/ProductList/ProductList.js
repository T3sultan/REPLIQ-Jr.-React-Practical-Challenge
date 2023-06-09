import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../../components/Loading";
import DeleteModalService from "./DeleteModalService";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const [serviceDelete, setServiceDelete] = useState(null);
  const {
    data: manageServices,
    isLoading,
    refetch,
  } = useQuery("manage", () =>
    fetch(`https://repliqserver.onrender.com/manage`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bookingContainer min-h-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {manageServices?.map((service, index) => (
            <ProductDetails
              index={index}
              key={service._id}
              service={service}
              refetch={refetch}
              setServiceDelete={setServiceDelete}
            />
          ))}
        </tbody>
      </table>
      {serviceDelete && (
        <DeleteModalService
          refetch={refetch}
          serviceDelete={serviceDelete}
          setServiceDelete={setServiceDelete}
        />
      )}
    </div>
  );
};

export default ProductList;
