import React from "react";

function Items({ width = "24px", height = "24px" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4189 6V6.75M17.4189 9.75V10.5M17.4189 13.5V14.25M17.4189 17.25V18M8.41895 12.75H13.6689M8.41895 15H11.4189M4.29395 5.25C3.67295 5.25 3.16895 5.754 3.16895 6.375V9.401C3.62569 9.66398 4.00507 10.0427 4.26886 10.4989C4.53266 10.9552 4.67155 11.473 4.67155 12C4.67155 12.527 4.53266 13.0448 4.26886 13.5011C4.00507 13.9573 3.62569 14.336 3.16895 14.599V17.625C3.16895 18.246 3.67295 18.75 4.29395 18.75H21.5439C22.1649 18.75 22.6689 18.246 22.6689 17.625V14.599C22.2122 14.336 21.8328 13.9573 21.569 13.5011C21.3052 13.0448 21.1663 12.527 21.1663 12C21.1663 11.473 21.3052 10.9552 21.569 10.4989C21.8328 10.0427 22.2122 9.66398 22.6689 9.401V6.375C22.6689 5.754 22.1649 5.25 21.5439 5.25H4.29395Z"
        stroke="#1B201D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Items;
