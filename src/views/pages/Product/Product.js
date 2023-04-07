import React, { useEffect, useState } from "react";
import Products from "./Products";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading] = useState(false);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 6)));
  }, []);
  return (
    <div className="max-w-screen-xl px-6 mx-auto my-12">
      <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <Products key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
