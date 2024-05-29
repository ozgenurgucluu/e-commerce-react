import React from "react";

const ProductAttribute = ({ productDetail }) => {
  return (
    <div className="container mx-auto">
      <h6 className=" font-semibold text-xl ">Ürün Özellikleri</h6>
      <div className="grid grid-cols-2 my-4 gap-5">
        {productDetail.map((attribute) => (
          <div className="gap-2" key={attribute}>
            <div className="flex justify-between w-full bg-gray-100 p-4 text-sm gap-2 mx-auto items-start rounded-md">
              <span className="text-black/80 truncate max-w-full">
                {attribute.title}
              </span>
              <span className="text-black/90 font-semibold truncate max-w-full">
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
