"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import image_background2 from "../assets/images/image_background2.svg";

interface BoxItemProps {
    icon?: StaticImageData | string;
    text1: string;
    text2: string;
    className?: string;
}

const BoxItem: React.FC<BoxItemProps> = ({
    icon = "",
    text1 = "",
    text2 = "",
    className = "",
  }) => {
    return (
      <div
        className={`bg-white ${className} relative flex flex-col mt-5 px-5 py-8 rounded-2xl items-start max-md:pr-5`}
      >
        <Image
          alt="background"
          src={image_background2}
          className="absolute top-0 right-0"
        />
        <Image
          alt="icon"
          src={icon}
          className="aspect-square object-contain object-center w-[54px] overflow-hidden max-w-full"
        />
        <div
          className={`self-stretch ${
            className ? "text-white" : "text-gray-900"
          } text-xl font-semibold font-clash leading-7 tracking-tight mt-8`}
        >
          {text1}
        </div>{" "}
        <div
          className={`self-stretch ${
            className ? "text-white" : "text-gray-900"
          }  text-opacity-80 font-jakarta text-base leading-7 mt-3`}
        >
          {text2}
        </div>
      </div>
    );
  };

  export default BoxItem