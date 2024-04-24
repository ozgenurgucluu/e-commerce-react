import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Product = ({
  id,
  thumbnail,
  raiting,
  price,
  title,
  topSeller,
  sellerName,
}) => {
  const params = useParams();
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col border border-black/20 rounded-md relative"
    >
      <img className="rounded-t-md w-full " src={thumbnail} />
      {topSeller && (
        <img
          className="absolute top-2 left-2 "
          width={50}
          height={50}
          src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
        />
      )}

      <div className="p-1 text-sm text-black/75 ">
        {sellerName && (
          <span className=" font-semibold text-black ">{sellerName}</span>
        )}
        <span className=" text-ellipsis"> {title}</span>
      </div>

      <div className=" p-2 text-sm ">
        <p>
          {raiting} <span className="flex"></span>
        </p>
      </div>
      {price ? (
        <div className="p-2 text-sm my-2 font-bold text-orange-600">
          <p>{price.toFixed(2)} TL</p>
        </div>
      ) : (
        <div className="mx-auto bg-red-600 text-white rounded-sm px-2">
          <p>Tükendi</p>
        </div>
      )}
    </Link>
  );
};

export default Product;
