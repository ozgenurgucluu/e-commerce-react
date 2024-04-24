import React from "react";

const ProductAttribute = ({ productDetail }) => {
  return (
    <div>
      <h7 className=" font-semibold text-sm ">Öne Çıkan Özellikler:</h7>
      <div className="grid grid-cols-4 my-4 gap-5">
        {productDetail.map((attribute) => (
          <div className="gap-2" key={attribute}>
            <div className="flex flex-col w-32 bg-gray-200 p-4 text-xs gap-2 mx-auto items-start">
              <span className="text-black/80 truncate max-w-full">
                {attribute.title}
              </span>
              <span className="text-black/80 font-bold truncate max-w-full">
                {attribute.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAttribute;
