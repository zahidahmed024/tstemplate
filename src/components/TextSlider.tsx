"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import ic_currency from "../assets/icons/currency.png";

// live stats
export default function TextSlider() {
  return (
    <div className="items-stretch bg-indigo-500 self-stretch flex w-full flex-col justify-center py-px rounded max-md:max-w-full">
      <div className="items-stretch flex gap-0 px-5 py-2.5 max-md:max-w-full max-md:flex-wrap">
        <Marquee>
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
        </Marquee>
      </div>
    </div>
  );
}

const MarqueeItem = ({ text1 = "", text2 = "", text3 = "", text4 = "" }) => {
  return (
    <div className="flex gap-0 pl-4 pr-1 py-1 border-r-zinc-200 border-r border-solid items-start">
      <div className="self-stretch flex justify-between gap-2 pr-4 items-start">
        <Image
          alt="currency"
          src={ic_currency}
          className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-base font-bold font-jakarta self-stretch grow whitespace-nowrap">
          {text1}
        </div>
      </div>
      <div className="text-white text-base font-semibold font-jakarta">
        {text2}
      </div>
      <div className="items-stretch self-stretch flex justify-between gap-3 pr-2.5">
        <div className="justify-center text-teal-400 text-base font-jakarta font-medium grow whitespace-nowrap">
          {text3}
        </div>
        <div className="justify-center text-teal-400 text-base  font-jakarta font-medium grow whitespace-nowrap">
          {text4}
        </div>
      </div>
    </div>
  );
};
