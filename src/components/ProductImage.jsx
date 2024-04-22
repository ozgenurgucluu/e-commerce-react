import classNames from "classnames";
import React, { useState } from "react";
import BackIcon from "../icons/BackIcon";
import { Link } from "react-router-dom";
import NextIcon from "../icons/NextIcon";

const ProductImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBackClick = () => {
    let _index = currentIndex - 1;
    setCurrentIndex(_index < 0 ? images.length - 1 : _index);
  };

  const handleNextClick = () => {
    let _index = currentIndex + 1;
    setCurrentIndex(_index > images.length - 1 ? 0 : _index);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex relative max-w-[410px] ">
        <img
          width="%100"
          src={images[currentIndex]}
          className="border border-black/20 rounded-md "
        />
        <button onClick={handleBackClick}>
          <div className="absolute top-1/2 -translate-y-1/2 left-1 rounded-full  bg-white p-1.5 hover:text-orange-600">
            <BackIcon />
          </div>
        </button>
        <button onClick={handleNextClick}>
          <div className=" absolute top-1/2 -translate-y-1/2 right-1 rounded-full bg-white p-1.5 hover:text-orange-600">
            <NextIcon />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-7 items-center justify-center gap-2  ">
        {images.map((image, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            onMouseOver={() => setCurrentIndex(index)}
            key={index}
            className={classNames(
              "border border-black/25 hover:border-orange-600 rounded-md",
              {
                "border-orange-600": currentIndex == index,
              }
            )}
          >
            <img src={image} width={42} className="rounded-md" />
          </div>
        ))}
      </div>
      <img src="https://cdn.dsmcdn.com/web/production/banners/3-or-6-installmentv2.png" />
    </div>
  );
};

export default ProductImage;
