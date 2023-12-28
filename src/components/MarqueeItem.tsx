import React from "react";
import Image from "next/image";
import ic_currency from "../assets/icons/currency.png";

interface MarqueeItemProps {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({
    text1 = "",
    text2 = "",
    text3 = "",
    text4 = "",
}) => {
    return (
        <div className="bg-indigo-500 flex gap-0 pl-4 pr-1 py-1 w-fit border-r-zinc-200 border-r border-solid items-start">
            <div className="flex justify-between gap-2 pr-4 items-start">
                <Image
                    alt="currency"
                    src={ic_currency}
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base font-bold font-jakarta grow whitespace-nowrap">
                    {text1}
                </div>
            </div>
            <div className="text-white text-base font-semibold font-jakarta">
                {text2}
            </div>
            <div className="items-stretch flex justify-between gap-3 pr-2.5">
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

export default MarqueeItem;
