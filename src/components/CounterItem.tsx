import React from "react";
import Image from "next/image";
import ic_vertical from "../assets/icons/vertical_divider.png";
interface CounterItemProps {
  countValue: string;
  countText: string;
  isLast?: boolean;
  bgColor?: string;
}

const CounterItem: React.FC<CounterItemProps> = ({
  countValue="",
  countText="",
  isLast = false,
  bgColor = ""
}) => {
  return (
    <>
      <div className={`items-stretch w-fit self-stretch flex justify-between gap-2.5`}
      style={{backgroundColor:bgColor}}
      >
        <div className="text-white text-4xl font-clash font-medium leading-[62px] grow whitespace-nowrap">
          {countValue}
        </div>
        <div className="text-white text-sm font-jakarta leading-5 self-center my-auto whitespace-pre-line">
          {countText}
        </div>
      </div>
      {!isLast && (
        <Image
          alt="vertical_divider"
          src={ic_vertical}
          className="aspect-[0.39] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
        />
      )}
    </>
  );
};

export default CounterItem;
