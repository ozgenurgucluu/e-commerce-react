import React, { useEffect, useState } from "react";
import axios from "axios";
import StarIcon from "../icons/StarIcon";

const ProductComment = ({ productId, raiting, sellerTitle }) => {
  const [productComments, setProductComments] = useState([]);
  const getComment = () => {
    axios
      .get(`http://localhost:3000/comments?productId=${productId} `)
      .then((response) => {
        setProductComments(response.data);
        console.log(productComments);
      });
  };

  useEffect(() => {
    getComment();
  }, [productId]);

  return (
    <div className="flex flex-col container mx-auto py-5 gap-3">
      <h1 className="text-lg font-semibold">Ürün Değerlendirmeleri</h1>
      <div className="border border-black/25 rounded-md ">
        <div className=" flex relative border border-b-black/25 p-6 items-center gap-4">
          <h1 className="font-semibold  text-xl">{raiting}</h1>
          <div className="w-full flex justify-center gap-4 ">
            {productComments.length === 0 && (
              <div className="flex items-center ">
                <span className="mx-5 text-orange-600">
                  <StarIcon />
                </span>
                Henüz Yorum Yazılmamış.
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col p-6 gap-4">
          <div className="flex mx-auto bg-gray-200 p-3 w-full rounded-md ">
            <h1 className="font-semibold mx-auto">
              Bu ürün <span className="font-bold">{sellerTitle}</span>{" "}
              tarafından gönderilecektir..
            </h1>
          </div>
          <div className="flex flex-col p-3 gap-2">
            {productComments.length > 0 &&
              productComments.map((comment) => (
                <div className="bg-gray-100 rounded-md gap-4 p-2">
                  <div className="flex gap-3  ">
                    <span className="font-semibold">{comment.raiting}</span>
                    <p className="italic">{comment.comment}</p>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-black/75">
                    <span>{comment.date}</span>|
                    <p className=" ">
                      <span className="font-bold text-blue-400">
                        {sellerTitle}
                      </span>{" "}
                      satıcısından alındı.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComment;
