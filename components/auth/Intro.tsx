/* eslint-disable no-console */
"use client";
import { Button, Carousel } from "antd";
import React from "react";

const Intro = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const contentStyle: React.CSSProperties = {
    height: "476px",
    width: "304px",
    textAlign: "center",
    alignContent: "center",
    background: "#EEF6F1",
    borderRadius: "8px",
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="text-center font-bold mt-[19px]">Name Wallet</div>
      <div style={contentStyle} className="mt-[171px] font-barlow">
        <Carousel afterChange={onChange}>
          <div className="text-xl3 text-gray">
            <h3 style={contentStyle}> Title 1</h3>
          </div>
          <div className="text-xl3 text-gray">
            <h3 style={contentStyle}> Title 2</h3>
          </div>
          <div className="text-xl3 !text-gray">
            <h3 style={contentStyle}> Title 3</h3>
          </div>
          <div className="text-xl3 text-gray">
            <h3 style={contentStyle}> Title 4</h3>
          </div>
        </Carousel>
      </div>
      <div>
        <Button>はじめる</Button>
      </div>
    </div>
  );
};

export default Intro;
