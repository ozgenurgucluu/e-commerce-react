import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import FavoriteIcon from "../icons/FavoriteIcon";
import BoxIcon from "../icons/BoxIcon";
import SellerWidgetList from "../components/SellerWidgetList";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState();
  const params = useParams();

  const getProductDetail = () => {
    axios
      .get(
        `http://localhost:3000/products/${params.productId}?_embed=seller&_embed=category`
      )
      .then((response) => {
        setProductDetail(response.data);
      });
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  console.log("ben çalıştım", productDetail);

  return (
    productDetail && (
      <div className="container flex flex-col">
        <div className="flex my-14  ">
          <ProductImage
            
            images={[productDetail.thumbnail,...productDetail.images]}
          />

          <div className="flex flex-col gap-8 w-[544px] -mx-3">
            <div>
              <div className="text-lg">
                {productDetail.seller && (
                  <span className="font-semibold">
                    {productDetail.seller?.title}
                  </span>
                )}
                <span className="mx-1"> {productDetail.title}</span>
              </div>
              <div>
                <span className="font-semibold">{productDetail.raiting}</span>
                yorumlar
              </div>
            </div>

            <div className="flex flex-col my-9">
              {productDetail.price ? (
                <div className="text-xl font-semibold text-orange-600">
                  <p>
                    {productDetail.price} <span className="mx-0.5">TL</span>
                  </p>
                </div>
              ) : (
                <div className="w-28 mx-auto text-white rounded-md px-2 bg-red-600 my-5">
                  <p className="flex justify-center">Tükendi</p>
                </div>
              )}

              <div className="flex my-5">
                {productDetail.price ? (
                  <div className="flex justify-center w-full bg-orange-600 rounded-md h-12 text-white font-semibold text-lg">
                    <button>Sepete Ekle</button>
                  </div>
                ) : (
                  <div className="flex justify-center w-full bg-black rounded-md h-12 text-white font-semibold text-lg">
                    <button>Sepete Ekle</button>
                  </div>
                )}

                <div className="mx-2 my-auto rounded-full border border-black/15 bg-white p-1 hover:text-orange-600 text-gray-400">
                  <FavoriteIcon width={32} height={32} />
                </div>
              </div>
            </div>
            <div className="flex bg-gray-200 rounded-md p-1.5 ">
              <BoxIcon />
              <p className="font-semibold mx-1 text-xs ">
                Tahmini Kargoya Teslim:
              </p>
              <p className="text-xs">7 gün içinde</p>
            </div>
            <div>
              <h7 className=" font-semibold text-sm ">Öne Çıkan Özellikler:</h7>
              <div className="grid grid-cols-4 my-4 gap-2">
                {productDetail.attributes.map((attribute) => (
                  <div className="gap-2">
                    <div className="flex flex-col bg-gray-100 p-3  ">
                      <span className="text-black/70 text-xs text-ellipsis truncate my-1">
                        {attribute.title}
                      </span>
                      <span className="text-black/90 text-xs font-semibold text-ellipsis truncate">
                        {attribute.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div><SellerWidgetList
          seller={productDetail.seller.title}
          rating={productDetail.seller.rating}
          price={productDetail.price}
          
          
          /></div>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold px-16 text-xl">Ürün Bilgileri</span>
          <div className="flex mx-14 p-9">
            <div className="max-w-[200px]">
              <img className="w-full" src={productDetail.thumbnail} />
            </div>
            <div className="px-3 mx-7">
              <span className="font-semibold text-base">
                {productDetail.title}
              </span>
              <p>{productDetail.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
