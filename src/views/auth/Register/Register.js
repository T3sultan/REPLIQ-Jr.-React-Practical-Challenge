import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import fb from "../../../assets/facebook.png";
import g from "../../../assets/google_.png";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  let errorMessage;

  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-2xl font-bold">Create an account</h2>
          <form>
            <div className="form-control w-full max-w-xs ml-7">
              <input
                type="text"
                placeholder="Your Name"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs ml-7">
              <input
                type="email"
                placeholder="Your Email"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs ml-7">
              <input
                type="password"
                placeholder="Your Password"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs ml-7">
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="mt-4 w-full max-w-xs border-b border-gray-300 focus:outline-none text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: " Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {errorMessage}
            <div className="mt-4">
              <input
                className="btn w-full  max-w-xs text-black bg-gray-200  rounded-sm  cursor-pointer"
                type="submit"
                value="Signup"
              />
            </div>
          </form>
          <p className="text-sm flex  mt-2 justify-center items-center">
            Already account ?{" "}
            <Link className=" text-red-400 " to="/login">
              Login
            </Link>{" "}
          </p>
          <div className="divider">Or</div>
         
            <div className="flex items-center   h-10  border cursor-pointer rounded-3xl  w-full max-w-xs ml-7">
              <img className="w-6 ml-2  rounded-xl " src={fb} alt="" />
              <div className="flex justify-center ">
                <h4 className="ml-10 text-sm ">Continue with Facebook</h4>
              </div>
            </div>
            <div
              // onClick={() => signInWithGoogle()}
              className="flex items-center h-10 border cursor-pointer rounded-3xl  w-full max-w-xs ml-7 my-4"
            >
              <img className="w-6 ml-2 " src={g} alt="" />
              <div className="flex justify-center ">
                <h4 className="ml-10 text-sm ">Continue with Google</h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
