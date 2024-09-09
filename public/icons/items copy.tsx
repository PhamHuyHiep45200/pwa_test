import React from "react";

function Items({ width = "16px", height = "16px" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3125 3.54785L14 8.23535M14 8.23535L9.3125 12.9229M14 8.23535L2.75 8.23535"
        stroke="#FBFDFB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Items;
