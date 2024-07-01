import React from "react";
import { useState } from "react";
import Product from "../components/Product";
import classNames from "classnames";
import FiveIcon from "../icons/FiveIcon";
import SixIcon from "../icons/SixIcon";
import SevenIcon from "../icons/SevenIcon";

const ProductList = ({ product }) => {
  const [grid, setGrid] = useState(6);

  return (
    <div>
      <div className="flex items-center  justify-end mb-4 gap-1 text-sm  ">
        <button
          className={classNames("hover:text-orange-600 ", {
            "text-orange-600": grid == 5,
            "text-stone-600": grid != 5,
          })}
          onClick={() => setGrid(5)}
        >
          <FiveIcon />
        </button>
        <button
          className={classNames("hover:text-orange-600 ", {
            "text-orange-600": grid == 6,
            "text-stone-600": grid != 6,
          })}
          onClick={() => setGrid(6)}
        >
          <SixIcon />
        </button>
        <button
          className={classNames("hover:text-orange-600  ", {
            "text-orange-600": grid == 7,
            "text-stone-600": grid != 7,
          })}
          onClick={() => setGrid(7)}
        >
          <SevenIcon />
        </button>
      </div>
      <div
        className={classNames("grid gap-5 ", {
          "grid-cols-5 ": grid == 5,
          "grid-cols-6 text-orange-600 ": grid == 6,
          "grid-cols-7": grid == 7,
        })}
      >
        {product.map((product, index) => (
          <Product
            id={product.id}
            key={index}
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
