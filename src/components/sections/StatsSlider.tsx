import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeItem from "../MarqueeItem";

// live stats
const StatsSlider: React.FC = () => {
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
};

export default StatsSlider;
