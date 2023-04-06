import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../hooks/CustomLink";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import analytics from "../../firebase.init";
import { Icon } from "@iconify/react";
import logo from "../../assets/repliq.png";

const Navbar = () => {
  const [user] = useAuthState(analytics);

  const handleSignOut = () => {
    signOut(analytics);
  };

  const menuItems = (
    <>
      <li>
        <CustomLink to="/home">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/product">Product</CustomLink>
      </li>
      <li>
        <CustomLink to="/addProduct">AddProduct</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}
      {user ? (
        <li>
          <CustomLink onClick={handleSignOut}>
            <Icon className="w-14 h-8 " icon="uil:signout" />
          </CustomLink>
        </li>
      ) : (
        <li>
          <CustomLink to="/login">Login</CustomLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar  bg-base-100  px-12">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52 "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/home">
          <img
            className=" w-2/6 hidden cursor-pointer sm:flex bg-gray-400  "
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-end  ">
        <div className=" hidden navbar-center lg:flex ">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label
          htmlFor="dashboard-sidebar"
          tabIndex={1}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
