import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import analytics from "../../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";


const Checkout = () => {
  const { productId } = useParams();
  const [user] = useAuthState(analytics);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://repliqserver.onrender.com/product/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [product]);

  const handleOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      product: product.text,
      productId: productId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("https://repliqserver.onrender.com/order", order).then(res => {
      const { data } = res;
      if (data.insertedId) {
        toast("Your order is Done");
        event.target.reset();
      }
    });
  };

  return (
    <div className="w-96 mx-auto mt-8">
      <form onSubmit={handleOrder}>
        <input
          value={user?.displayName}
          type="text"
          readOnly
          className="w-96 mb-3 border rounded-md  placeholder-gray-500 placeholder-py-4  focus:outline-none   h-12 w-160 pl-[10px]"
          name="name"
          placeholder="User Name"
          required
          disabled
        />{" "}
        <br />
        <input
          value={user?.email}
          type="email"
          readOnly
          className="w-96 mb-3 border rounded-md  placeholder-gray-500 placeholder-py-4  focus:outline-none   h-12 w-160 pl-[10px]"
          name="email"
          placeholder="Email"
          required
          disabled
        />{" "}
        <br />{" "}
        <input
          value={product.text}
          type="text"
          className="w-96 mb-3 border rounded-md  placeholder-gray-500 placeholder-py-4  focus:outline-none   h-12 w-160 pl-[10px]"
          name="product"
          placeholder="Product Name"
          required
        />{" "}
        <br />{" "}
        <input
          type="text"
          className="w-96 mb-3 border rounded-md  placeholder-gray-500 placeholder-py-4  focus:outline-none   h-12 w-160 pl-[10px]"
          name="address"
          placeholder="Address"
          required
          autoComplete="off"
        />{" "}
        <br />
        <input
          type="text"
          className="w-96 mb-3 border rounded-md  placeholder-gray-500 placeholder-py-4  focus:outline-none   h-12 w-160 pl-[10px]"
          name="phone"
          placeholder="phone"
          required
        />{" "}
        <br />
        <input
          className="bg-slate-500 w-96 rounded-lg text-white font-bold cursor-pointer h-12"
          type="submit"
          value="ORDER "
        />
      </form>
    </div>
  );
};

export default Checkout;
