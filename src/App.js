import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./views/pages/Home/Home";
import Product from "./views/pages/Product/Product";
import { ToastContainer } from "react-toastify";
import Login from "./views/auth/Login/Login";
import Register from "./views/auth/Register/Register";
import Dashboard from "./views/pages/Dashboard/Dashboard";

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
