import React from "react";

const Modal = ({ show, children }) => {
  if (!show) return null;
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black/30">
      {children}
    </div>
  );
};

export default Modal;
