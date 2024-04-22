import React from "react";
import GiftIcon from "../icons/GiftIcon";
import ChatIcon from "../icons/ChatIcon";
import { Link } from "react-router-dom";
import InvoiceIcon from "../icons/InvoiceIcon";
import BoxIcon from "../icons/BoxIcon";
import classNames from "classnames";

const SellerWidgetList = ({ seller, rating, price, sellerId }) => {
  return (
    <div className="container flex flex-col gap-5 max-w-[210px]">
      <div className="flex flex-col gap-1 border p-3 border-black/25 rounded-md bg-blue-100">
        <div className="flex items-center gap-1">
          <InvoiceIcon />
          <span>Kurumsal Fatura</span>
        </div>
        <div className="text-xs text-black/85 items-center">
          Kurumsal Faturaya Uygun.<Link className="text-blue-600">İncele</Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex text-xs  text-black/55 font-semibold ">
          ÜRÜNÜN KAMPANYALARI
        </div>
        <div className="flex border border-black/25 rounded-md gap-1">
          <div className="p-3">
            <BoxIcon />
          </div>
          <div className="flex text-xs items-center font-semibold">
            200 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)
          </div>
        </div>
      </div>
      <div className="flex flex-col   p-3 border border-black/20 rounded-md gap-3">
        <div className="text-sm text-blue-500 font-semibold  bg-blue-100 rounded-sm">
          <Link to={`/seller/${sellerId}`}>{seller}</Link>
          <span
            className={classNames("mx-1  rounded-md text-xs text-white px-4", {
              "bg-red-500": rating >= 1 && rating <= 3,
              "bg-orange-600": rating >= 4 && rating <= 5,
              "bg-green-600": rating >= 6 && rating <= 10,
            })}
          >
            {rating}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 ">
          <span className="hover:text-orange-600 bg-gray-400 p-1 rounded-sm ">
            <GiftIcon />
          </span>
          Takip Et
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500  ">
          <span className="hover:text-orange-600 bg-gray-400 p-1 rounded-sm text-black">
            <ChatIcon />
          </span>
          Satıcıya Soru Sor
        </div>
        <div className="text-orange-600 text-base p-1">
          {price ? (
            <span className="flex font-bold gap-0.5">
              {price}
              <p>TL</p>
            </span>
          ) : (
            <span className="text-white rounded-md px-2 bg-red-500">
              Tükendi
            </span>
          )}
        </div>
      </div>
      <div className="flex border border-black/25 rounded-md p-2 bg-orange-100">
        <Link className="flex text-xs items-center gap-2 font-semibold ">
          <img src="https://cdn.dsmcdn.com/web/production/collection-icon.svg"></img>
          <p>Koleksiyona Ekle</p>
        </Link>
      </div>
    </div>
  );
};

export default SellerWidgetList;
