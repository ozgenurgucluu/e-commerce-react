import React from "react";

const ChatIcon = ({width=17,height=17}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
    width={width}
    height={height}
    >
      <title />
      <g id="Chat">
        <path fill="currentColor" d="M24,17H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" />
        <path fill="currentColor" d="M24,7H8A1,1,0,0,0,8,9H24a1,1,0,0,0,0-2Z" />
        <path fill="currentColor" d="M24,12H8a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" />
        <path fill="currentColor" d="M25,2H7A5,5,0,0,0,2,7V27.11a3,3,0,0,0,3,3,3,3,0,0,0,1.75-.56l6.81-4.87A3,3,0,0,1,15.45,24H25a5,5,0,0,0,5-5V7A5,5,0,0,0,25,2Zm3,17a3,3,0,0,1-3,3H15.45a4.94,4.94,0,0,0-3.11,1.09L5.58,27.92a1,1,0,0,1-1,.08A1,1,0,0,1,4,27.11V7A3,3,0,0,1,7,4H25a3,3,0,0,1,3,3Z" />
      </g>
    </svg>
  );
};

export default ChatIcon;
