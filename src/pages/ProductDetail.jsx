import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import FavoriteIcon from "../icons/FavoriteIcon";
import BoxIcon from "../icons/BoxIcon";
import SellerWidgetList from "../components/SellerWidgetList";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import classNames from "classnames";
import TrendyolLogoIcon from "../icons/TrendyolLogoIcon";
import ImportantIcon from "../icons/ImportantIcon";
import ProductAttribute from "../components/ProductAttribute";

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

  return (
    productDetail && (
      <div className="container mx-auto flex flex-col gap-3  ">
        <div className="flex">
          <Breadcrumbs
            steps={[
              {
                title: productDetail.category.title,
                to: `/category/${productDetail.categoryId}`,
              },
              {
                title: productDetail.title,
                to: `/product/${productDetail.id}`,
              },
            ]}
          />
        </div>

        <div className="flex gap-9">
          <ProductImage
            images={[productDetail.thumbnail, ...productDetail.images]}
          />

          <div className="flex flex-col flex-1 gap-2">
            <div className="text-lg">
              {productDetail.sellerId && (
                <Link
                  to={`/seller/${productDetail.sellerId}`}
                  className="font-semibold"
                >
                  {productDetail.seller?.title}
                </Link>
              )}
              <span className="mx-1"> {productDetail.title}</span>
              <span className="block font-semibold text-black/90 text-base">
                {productDetail.raiting} Puan
              </span>
            </div>
            <div className="flex flex-col my-8 gap-5">
              <div className="flex flex-col ">
                {productDetail.price ? (
                  <div>
                    <p className="text-xl font-semibold text-orange-600">
                      {productDetail.price} TL
                    </p>
                    <p className="flex bg-red-100 rounded-md p-2 items-center text-xs max-w-36">
                      Peşin Fiyatına 3 Taksit!
                    </p>
                  </div>
                ) : (
                  <p className="max-w-[100px] text-white rounded-md bg-red-600 flex justify-center">
                    Tükendi
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  className={classNames(
                    "flex justify-center items-center w-full  rounded-md h-12 text-white font-semibold text-[20px]",
                    {
                      "bg-orange-600": productDetail.price,
                      "bg-black": !productDetail.price,
                    }
                  )}
                >
                  Sepete Ekle
                </button>
                <div className="my-auto rounded-full border border-black/15 bg-white p-2 hover:text-orange-600 hover:border-black/35 text-gray-400">
                  <FavoriteIcon width={32} height={32} />
                </div>
              </div>
              <div className="flex bg-gray-200 rounded-md p-1.5 items-center text-xs ">
                <BoxIcon />
                <span className="font-bold mx-1  ">
                  Tahmini Kargoya Teslim:
                </span>
                7 gün içinde
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-sm">
                Ürününüz için uygun fiyatlara ek hizmet seçebilirsiniz.
              </h1>
              <div className="flex  border border-black/25 rounded-md max-w-[300px] p-5 gap-2 items-start ">
                <div className="flex my-2">
                  <input type="checkbox" name="value" id="value" />
                </div>
                <div className="flex flex-col">
                  <div className="flex ">
                    <TrendyolLogoIcon width={58} height={29} />
                    <span className="text-orange-600 mx-1 font-semibold">
                      sigorta
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    Kapsamlı Onarım Paketi <ImportantIcon />
                    <span className="text-orange-600 font-semibold">185TL</span>
                  </div>
                  <div className="flex text-xs gap-1 ">
                    <li className="">Ekran Tamiri</li>
                    <li>Kaza, sıvı teması onarımı</li>
                  </div>
                </div>
              </div>
            </div>
            <ProductAttribute productDetail={productDetail.attributes} />
          </div>

          <div>
            {productDetail.seller && (
              <SellerWidgetList
                sellerId={productDetail.seller.id}
                seller={productDetail.seller.title}
                rating={productDetail.seller.rating}
                price={productDetail.price}
              />
            )}
          </div>
        </div>

        <div className="container mx-auto flex flex-col gap-5">
          <span className="flex font-semibold text-xl p-3">Ürün Bilgileri</span>
          <div className="flex gap-9">
            <div className="max-w-[200px]">
              <img className="w-full" src={productDetail.thumbnail} />
            </div>
            <div className="">
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
