import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProductDetails = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://repliqserver.onrender.com/product/${productId}`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [productId]);
  const handle = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className=" justify-center mt-6 grid grid-cols-1 md:grid-cols-2">
      <div className=" mt-14 ml-36 ">
        <p className="text-2xl font-bold ">{details?.text}</p>
        <p className="mt-3 text-gray-400 text-sm">{details?.description}</p>
        <div className="mt-4 flex ml-60">
          <p className="text-2xl mr-3 font-bold">${details?.price}</p>
          <div className="border flex w-20 h-8 justify-center rounded-2xl ">
            <button onClick={handle} className="">
              <Icon className="mr-1" icon="ep:minus" />{" "}
            </button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
              <Icon className="ml-1" icon="ep:plus" />{" "}
            </button>
          </div>
        </div>
        <Link to={`/checkout/${productId}`}>
          <button className="ml-60 mt-9 border w-28 h-8 rounded-3xl bg-fuchsia-700 flex justify-center items-center">
            <Icon className="text-white" icon="ep:shopping-cart" />
            <h4 className="text-white ml-2">Add</h4>
          </button>
        </Link>
      </div>
      <div className="-mr-96  ">
        <img className=" w-2/5 " src={details?.image} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
