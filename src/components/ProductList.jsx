import React from "react";
import { useState } from "react";
import Product from "../components/Product";
import classNames from "classnames";

const ProductList = ({ product, productDetail }) => {
  const [grid, setGrid] = useState(6);

  return (
    <div>
      <div className="flex justify-end mb-4 gap-1  ">
        <button
          className={classNames("", {
            "font-bold": grid == 5,
          })}
          onClick={() => setGrid(5)}
        >
          5'li |
        </button>
        <button
          className={classNames("", {
            "font-bold": grid == 6,
          })}
          onClick={() => setGrid(6)}
        >
          6'lı |
        </button>
        <button
          className={classNames("", {
            "font-bold": grid == 7,
          })}
          onClick={() => setGrid(7)}
        >
          7'li
        </button>
      </div>
      <div
        className={classNames("grid gap-5 ", {
          "grid-cols-5": grid == 5,
          "grid-cols-6": grid == 6,
          "grid-cols-7": grid == 7,
        })}
      >
        {product.map((product) => (
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

export default ProductList;
