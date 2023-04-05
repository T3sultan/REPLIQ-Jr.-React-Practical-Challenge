import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./views/pages/Home/Home";
import Product from "./views/pages/Product/Product";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
