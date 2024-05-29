import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import CargoIcon from "../icons/CargoIcon";
import SaleIcon from "../icons/SaleIcon";
import classNames from "classnames";
import { Link } from "react-router-dom";

const CartItemsViewer = () => {
  const context = useContext(CartContext);
  const totalPrice =
    context.cart.length > 0
      ? context.cart.reduce((total, product) => total + product.price, 0)
      : 0;
  const cargoTotal = totalPrice + 34;
  console.log("total", totalPrice, 0);
  console.log("CartContext:", context);

  return (
    context && (
      <div className="container mx-auto my-2">
        {context.cart.length === 0 ? (
          <div className=" flex flex-col justify-center items-center h-screen my-auto gap-7 italic  text-black/85 ">
            <SaleIcon width={55} height={55} />
            <span>Sepetinizde Ürün bulunamadı</span>
          </div>
        ) : (
          <div className="flex gap-16 mx-auto ">
            <div className="flex flex-col flex-1 gap-4  ">
              <h1 className="text-xl font-semibold">
                Sepetim ({context.cart.length} Ürün)
              </h1>
              {context.cart.map((product, index) => (
                <div
                  key={index}
                  className="border border-black/25 flex flex-col rounded-md gap-2"
                >
                  <div className="p-3 px-6 flex gap-4 items-center">
                    <div className=" text-sm text-gray-600">Satıcı:</div>
                    <div className="flex font-semibold">
                      {product.seller.title}
                      {"  "}
                      <span
                        className={classNames(
                          "flex mx-2 my-auto p-0.5 px-2  rounded-md text-white  text-xs font-semibold",
                          {
                            "bg-red-500": product.seller.raiting <= 4,
                            "bg-orange-600":
                              product.seller.raiting >= 4 &&
                              product.seller.raiting <= 6,
                            "bg-green-600": product.seller.raiting >= 6,
                          }
                        )}
                      >
                        {product.seller.raiting}
                      </span>
                    </div>
                  </div>
                  <div className="flex p-4 px-6 gap-12 items-center border-t border-black/25 ">
                    <div className="">
                      <img className="h-auto w-20" src={product.thumbnail} />{" "}
                    </div>
                    <div className="flex-1  ">
                      <div className="flex flex-col">
                        <div className="flex text-sm">{product.title}</div>
                        <div className="text-sm flex gap-1 items-center">
                          <CargoIcon />{" "}
                          <span className="font-bold"> 10 saat 5 dakika</span>{" "}
                          içerisinde sipariş verirsen{" "}
                          <span className="font-bold"> en geç yarın </span>{" "}
                          kargoda!
                        </div>
                      </div>
                    </div>
                    <div className="text-orange-600 font-bold">
                      {product.price.toFixed(2)} TL
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col  w-[350px]  gap-4">
              <Link className="flex flex-col items-center border border-orange-600 bg-orange-600 rounded-md text-white font-semibold  ">
                Sepeti Onayla{" "}
                <span className="text-sm flex">1 Ürün Tükenmek Üzere</span>
              </Link>
              <div className="border border-green-200 rounded-md bg-green-100 flex">
                <div className="flex flex-col text-xs p-4 gap-2">
                  <img
                    className="w-28 h-auto"
                    src="https://cdn.dsmcdn.com/web/production/ty-pass-mweb-basket.png"
                  />
                  Sonraki alışverişlerin için 10'lu paketi satın al, ayrıca
                  kargo ücreti ödeme!
                  <button className="border border-green-400 rounded-md text-green-400 font-bold hover:bg-green-400 hover:text-white py-1.5 text-sm bg-white">
                    Sepete Ekle
                  </button>
                </div>
              </div>
              <div className="border border-black/25 rounded-md flex flex-col gap-3 p-4">
                <h1 className="text-lg font-semibold">Sipariş Özeti</h1>
                <div className="flex flex-col gap-1 text-sm text-black/75">
                  <div className="flex justify-between">
                    Ürünün Toplamı
                    <span>{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    Kargo Toplam
                    <span className="text-orange-600 font-semibold">34TL</span>
                  </div>
                </div>
                <div className="border-t border-black/25"></div>
                <div className="flex justify-between">
                  Toplam
                  <span className="text-orange-600 font-bold">
                    {cargoTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="border border-black/25 hover:border-orange-600 rounded-md text-sm py-2">
                İNDİRİM KODU GİR
              </button>
              <Link className="flex flex-col items-center border border-orange-600 bg-orange-600 rounded-md text-white font-semibold  ">
                Sepeti Onayla{" "}
                <span className="text-sm ">1 Ürün Tükenmek Üzere</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default CartItemsViewer;
