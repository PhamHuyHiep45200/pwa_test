/* eslint-disable no-console */
"use client";
import { Carousel } from "antd";
import React from "react";

const Intro = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const contentStyle: React.CSSProperties = {
    // margin: 0,
    height: "476px",
    width: "304px",
    color: "#000000",
    lineHeight: "160px",
    textAlign: "center",
    alignContent: "center",
    background: "#EEF6F1",
    borderRadius: "8px",
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="text-center font-bold mt-[19px]">Name Wallet</div>
      <div style={contentStyle} className="mt-[171px]">
        <Carousel afterChange={onChange}>
          <div className="font-barlow text-xs justify-center">
            <h3>（アニメーションを想定）</h3>
          </div>
          <div>
            <h3>（アニメーションを想定）</h3>
          </div>
          <div>
            <h3>（アニメーションを想定）</h3>
          </div>
          <div>
            <h3>（アニメーションを想定）</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Intro;
