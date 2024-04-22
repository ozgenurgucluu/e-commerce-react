import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

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
    <div className="container flex flex-col  mx-auto gap-4">
      <h1 className="text-xl font-semibold my-4 ">Popüler Ürünler</h1>

      <div className="grid grid-cols-5 gap-8">
        {products.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            title={product.title}
            sellerName={product?.seller?.title}
            thumbnail={product.thumbnail}
            raiting={product.raiting}
            price={product?.price}
            topSeller={product.topSeller}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
