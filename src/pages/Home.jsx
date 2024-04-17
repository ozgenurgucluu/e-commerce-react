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
    <div className="container flex p-7">
      <div className="mx-auto">
        <div>
          <h1 className="flex text-lg font-semibold  my-3 ">Popüler Ürünler</h1>
        </div>
        <Link>
          <div className=" grid grid-cols-5 my-5 gap-5">
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
        </Link>
      </div>
    </div>
  );
};

export default Home;
