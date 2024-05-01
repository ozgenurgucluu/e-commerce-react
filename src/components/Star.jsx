import React from "react";

const Star = ({ raiting }) => {
  const calcRaiting = raiting < 0 ? 0 : raiting;
  return (
    <div className=" relative ">
      <div className=" w-5 h-5 bg-[url('/star-grey.svg')] bg-no-repeat bg-center "></div>

      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{
          maxWidth: `${calcRaiting * 100}%`,
        }}
      >
        <div className="  w-5 h-5 bg-[url('/star-orange.svg')] bg-no-repeat bg-center "></div>
      </div>
    </div>
  );
};

export default Star;
