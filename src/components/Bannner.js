import React from "react";
// import Button from "../../components/common/Button";
import bannerImage from "../assets/banner.png";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="hero min-h-fit banner px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="max-w-sm  rounded-lg shadow-2xl" />
        <div className=" lg:mr-20 ">
          <h1 className="text-5xl font-bold uppercase text-gray-800">
            E-Commerce
          </h1>
          <br />
          <h1 className="text-5xl font-bold uppercase text-gray-800">
            Platform
          </h1>
          <br />

          <p className="py-2 text-sm text-gray-500 indent-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
            <br /> In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="py-3">
            <Button title={"Get Shop"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
