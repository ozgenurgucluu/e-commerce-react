import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import SaleIcon from "../icons/SaleIcon";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get("http://localhost:3000/products?topSeller=1").then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.length ? (
        <div className="container mx-auto flex flex-col gap-3 my-2">
          <div className="flex">
            {products && (
              <div className="font-semibold text-xl">
                <strong className="font-bold">Çok Satanlar </strong>
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

export default BestSellers;
