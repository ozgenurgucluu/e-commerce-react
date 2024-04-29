import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import NextIcon from "../icons/NextIcon";

const BestSellersWidget = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("http://localhost:3000/products?topSeller=1&_start=0&_limit=6")
      .then((response) => {
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex flex-col gap-4 border border-black/15 rounded-md p-4 bg-red-100/35">
      <div className="flex font-bold justify-between">
        <h1 className="flex justify-start">Çok Satan Ürünler</h1>
        <Link
          to={"http://localhost:5173/category/cok-satanlar"}
          className="flex justify-end "
        >
          Tüm Ürünler
          <span className="flex items-center">
            {" "}
            <NextIcon />{" "}
          </span>
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-6 gap-5 bg-slate-50  ">
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

export default BestSellersWidget;
