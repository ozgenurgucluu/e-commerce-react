import React from "react";

const GiftIcon = ({ width = 17, height = 17 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="i-gift"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M4 14 L4 30 28 30 28 14 M2 9 L2 14 30 14 30 9 Z M16 9 C 16 9 14 0 8 3 2 6 16 9 16 9 16 9 18 0 24 3 30 6 16 9 16 9 M16 9 L16 30"
      />
    </svg>
  );
};

export default GiftIcon;
