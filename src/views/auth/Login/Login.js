import React from "react";
import g from "../../../assets/google_.png";
import login from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid items-center h-full justify-items-center mt-20">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 mr-3"
        alt="Flowbite Logo"
      />
      <h3 className="font-bold">Login With</h3>
      <div
        // onClick={() => signInWithGoogle()}
        className="flex items-center h-10 mt-4 border cursor-pointer rounded-3xl w-72"
      >
        <img className="w-6 ml-2 " src={g} alt="" />
        <div className="flex justify-center ">
          <h4 className="ml-10 text-sm ">Continue with Google</h4>
        </div>
      </div>
      <p className="text-sm mt-2">
        Don't have an account?
        <Link to={"/register"}>
          <span className=" text-red-500 "> Create an account</span>
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
