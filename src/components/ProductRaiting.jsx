import React from "react";
import Star from "./Star";

const ProductRaiting = ({ raiting }) => {
  return (
    <div className="flex justify-center items-center  ">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star raiting={raiting - i >= 1 ? 1 : raiting - i} key={i}>
          {i}
        </Star>
      ))}
    </div>
  );
};

export default ProductRaiting;
