import React from "react";

function Home({ width = "24px", height = "24px" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 12L11.204 3.045C11.644 2.606 12.356 2.606 12.795 3.045L21.75 12M4.5 9.75V19.875C4.5 20.496 5.004 21 5.625 21H9.75V16.125C9.75 15.504 10.254 15 10.875 15H13.125C13.746 15 14.25 15.504 14.25 16.125V21H18.375C18.996 21 19.5 20.496 19.5 19.875V9.75M8.25 21H16.5"
        stroke="#1B201D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Home;
