import React from "react";
import CloseIcon from "../icons/CloseIcon";

const Modal = ({ show, children, title, onClose }) => {
  if (!show) return null;
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black/30">
      <div className=" flex flex-col w-[33vw] gap-3 bg-white rounded-md  ">
        <div className=" relative p-3 border border-t-1">
          <h1 className="absolute text-lg font-semibold text-black ">
            {title}
          </h1>
          <div className="flex justify-end   ">
            <button
              onClick={() => {
                onClose && onClose();
              }}
              className=" text-black/65  "
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
