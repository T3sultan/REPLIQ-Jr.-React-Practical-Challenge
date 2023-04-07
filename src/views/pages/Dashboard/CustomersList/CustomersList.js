import React from "react";
import Loading from "../../../../components/Loading";
import CustomerTable from "./CustomerTable";
import { useQuery } from "react-query";

const CustomersList = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" min-h-full  bookingContainer  ">

      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Title </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <CustomerTable
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersList;
