import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import classNames from "classnames";

const Seller = () => {
  const [sellerDetail, setSellerDetail] = useState({});
  const [products, setProducts] = useState([]);
  const params = useParams();

  const getProductDetail = () => {
    axios
      .get(
        `http://localhost:3000/products?_embed=seller&sellerId=${params.sellerId}`
      )
      .then((response) => {
        setProducts(response.data);
        console.log("product verisi", response.data);
      });
  };

  const getSellerDetail = () => {
    axios
      .get(`http://localhost:3000/sellers/${params.sellerId}`)
      .then((response) => {
        setSellerDetail(response.data);
        console.log("seller datası", response.data);
      });
  };

  useEffect(() => {
    getProductDetail();
    getSellerDetail();
  }, [params.sellerId]);
  return (
    <div className="container mx-auto my-3">
      <div className="flex w-full bg-blue-400 rounded-md p-2.5">
        <img
          className="rounded-full p-2 ml-3"
          width={75}
          src={`http://localhost:3000/${sellerDetail.thumbnail}`}
        />
        <span className="my-auto mx-2 font-bold text-blue-950">
          {sellerDetail.title}
        </span>
        <span
          className={classNames(
            "my-auto p-0.5 px-3  rounded-md text-white  text-xs font-semibold",
            {
              "bg-red-500":
                sellerDetail.rating >= 1 && sellerDetail.rating <= 3,
              "bg-orange-600":
                sellerDetail.rating >= 4 && sellerDetail.rating <= 5,
              "bg-green-600":
                sellerDetail.rating >= 6 && sellerDetail.rating <= 10,
            }
          )}
        >
          {sellerDetail.rating}
        </span>
      </div>
      <div className=" grid grid-cols-5 my-5 gap-9 mx-auto">
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

export default Seller;
