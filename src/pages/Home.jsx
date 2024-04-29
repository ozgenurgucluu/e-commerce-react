import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductList from "../components/ProductList";
import BestSellersWidget from "../components/BestSellersWidget";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [grid, setGrid] = useState(6);
  const getProducts = () => {
    axios
      .get("http://localhost:3000/products?_embed=seller")
      .then((response) => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container flex flex-col  mx-auto gap-5  ">
      <BestSellersWidget />
      <ProductList product={products} />
    </div>
  );
};

export default Home;
