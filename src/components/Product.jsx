import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  thumbnail,
  raiting,
  price,
  title,
  topSeller,
  sellerName,
}) => {
  return (
    <Link className="flex flex-col border border-black/20 rounded-md relative">
      <img
        className="rounded-md py-1 px-5 mx-auto"
        width={200}
        height={60}
        src={thumbnail}
      />
      {topSeller && (
        <img
          className="absolute top-2 left-2 "
          width={50}
          height={50}
          src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
        />
      )}

      <div className="p-1">
        <p className=" max-h-16 block text-sm text-black/70 text-ellipsis">
          {sellerName && (
            <span className=" font-semibold text-black p-1">{sellerName}</span>
          )}
          {title}
        </p>
      </div>
      <div className="flex p-2 text-sm my-2">
        <p className="flex">{raiting} <span className="flex"></span> </p>
      </div>
      <div className="p-2 text-sm my-2 text-orange-600">
        <p>{price} TL</p>
      </div>
    </Link>
  );
};

export default Product;
