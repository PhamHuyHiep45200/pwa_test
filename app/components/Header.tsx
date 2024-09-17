import Ring from "@/public/icons/ring";
import Setting from "@/public/icons/setting";
import React from "react";

const HeaderApp = () => {
  return (
    <div className="flex justify-between items-center p-4 py-5 fixed top-0 left-0 right-0">
      <div className="font-bold text-base">Wallet Name</div>
      <div className="flex items-center">
        <div className="ml-4">
          <Ring />
        </div>
        <div className="ml-4">
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
