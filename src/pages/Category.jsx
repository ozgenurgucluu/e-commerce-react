import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import SaleIcon from "../icons/SaleIcon";

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
    <div>
      {products.length ? (
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
          <ProductList product={products} />
        </div>
      ) : (
        <div className="container flex flex-col justify-center items-center h-screen my-auto gap-7 italic  text-black/85 ">
          <SaleIcon width={55} height={55} />
          <span>Bu Kategoriye Ait Ürün Bulunamadı</span>
        </div>
      )}
    </div>
  );
};

export default Category;
