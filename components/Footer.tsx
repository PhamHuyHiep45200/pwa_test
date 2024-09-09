import { navbarItem } from "@/ts/configs/navbar";
import React from "react";

const FooterApp = () => {
  return (
    <div
      className={`flex mb-8 justify-between content-center px-10 font-sans font-bold`}
    >
      {navbarItem.map((item) => (
        <div key={item.key} className="flex flex-col items-center">
          <div className="text-xsm w-[71px] flex flex-col items-center">
            <div className="mb-1">
              <item.icon />
            </div>
            <span className="text-center">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterApp;
