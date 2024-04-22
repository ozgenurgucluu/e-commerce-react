import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const Category = () => {
  const params = useParams();
  const [categoryDetail, setCategoryDetail] = useState();
  const [products, setProducts] = useState([]);

  const getCategoryProducts = () => {
    axios
      .get(
        `http://localhost:3000/products?_embed=categories&_embed=seller&categoryId=${params.categoryId}`
      )
      .then((response) => {
        setProducts(response.data);
      });
  };

  const getCategoryDetail = () => {
    axios
      .get(`http://localhost:3000/categories/${params.categoryId}`)
      .then((response) => {
        setCategoryDetail(response.data);
      });
  };

  useEffect(() => {
    getCategoryProducts();
    getCategoryDetail();
  }, [params.categoryId]);
  return (
    <div className="container mx-auto flex flex-col gap-3 my-2">
      <div className="flex">
        {categoryDetail && (
          <div className="font-semibold text-xl">
            <strong className="font-bold">"{categoryDetail.title}" </strong>
            kategorisi için{" "}
            <strong className="font-bold">{products.length} sonuç </strong>
            listeleniyor
          </div>
        )}
      </div>

      <div className=" grid grid-cols-5 my-5 gap-5 mx-auto">
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

export default Category;
