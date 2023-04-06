import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const { text, image,_id } = product;
  const navigate = useNavigate();

  const navigateDetails = _id => {
    navigate(`/product/${_id}`);
  };

  return (
    <div
      onClick={() => navigateDetails(_id)}
      className="card cursor-pointer bg-white border-gray-200 transition transform duration-500 hover:shadow-lg hover:scale-100 rounded relative"
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-40" />
      </figure>
      <div className="card-body items-center text-center -mt-3">
        <h2 className="card-title font-bold">{text}</h2>
      </div>
    </div>
  );
};

export default Products;
