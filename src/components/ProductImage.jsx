import React, { useState } from "react";

const ProductImage = ({ thumbnail, images }) => {
  const [bigImage, setBigImage] = useState(thumbnail);

  return (
    <div className="flex flex-col px-10 gap-2">
      <div className="flex flex-col  items-center">
        <img
          src={bigImage}
          width={350}
          className="border border-black/20 rounded-md"
        />
      </div>
      <div className="grid grid-cols-7  items-center justify-center gap-2  ">
        {images.map((image, index) => (
          <div
            onClick={() => setBigImage(image)}
            onMouseOver={() => setBigImage(image)}

            key={index}
            className="border-2 border-black/220 hover:border-orange-600 rounded-md"
          >
            <img src={image} width={41} className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
