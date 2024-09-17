import { navbarItem } from "@/app/ts/configs/navbar";
import React from "react";

const FooterApp = () => {
  return (
    <div
      className={`flex justify-between py-4 content-center px-10 font-sans font-bold fixed bottom-0 left-0 right-0`}
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
