import React from "react";
import img_graph from "../assets/images/graphs.png";
import ic_star2 from "@/assets/icons/star2.png";
import ic_design2 from "@/assets/icons/design2.png";
import ic_design1 from "@/assets/icons/design1.png";
import Image from "next/image";
import Button from "../Button";

export default function StellarChallengeSection() {
  return (
    <>
      <Image
        alt="design icon"
        src={ic_design1}
        className="aspect-[0.97] object-contain object-center w-[66px] fill-indigo-50 overflow-hidden max-w-full self-end"
      />
      <div className="justify-between self-center w-full max-w-[1240px] mt-14 max-md:max-w-full md:px-10 sm:px-10 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
              <div className="text-gray-900 text-5xl font-semibold font-clash leading-[54px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                Introducing FundedNext Stellar Challenge 🙌
              </div>{" "}
              <div className="items-center flex gap-2 mt-7">
                <Image
                  alt="star"
                  src={ic_star2}
                  className="aspect-square object-contain object-center w-4 fill-[linear-gradient(91deg,#3F68FF_0%,#CD63FF_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-gray-500 text-xl font-jakarta font-medium leading-8">
                  No Time Limit
                </div>
              </div>{" "}
              <div className="items-center self-stretch flex justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
                <Image
                  alt="star"
                  src={ic_star2}
                  className="aspect-square object-contain object-center w-4 fill-[linear-gradient(91deg,#3F68FF_0%,#CD63FF_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-gray-500 text-lg font-medium font-jakarta leading-7 self-stretch grow shrink basis-auto max-md:max-w-full">
                  Balance Based Drawdown
                </div>
              </div>{" "}
              <div className="items-center self-stretch flex justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
                <Image
                  alt="star"
                  src={ic_star2}
                  className="aspect-square object-contain object-center w-4 fill-[linear-gradient(91deg,#3F68FF_0%,#CD63FF_100%)] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-gray-500 text-xl font-medium font-jakarta leading-8 self-stretch grow shrink basis-auto max-md:max-w-full">
                  15% Profit Share from Challenge Phase
                </div>
              </div>{" "}
              <div className="my-5">
                <Button text="Learn More" />
              </div>
              {/* <div className="text-white text-right text-lg font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-indigo-500 mt-10 px-5 py-4 rounded-xl">
                Learn More
              </div> */}
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
            <Image alt="graph" src={img_graph} />
          </div>
        </div>
      </div>{" "}
      <Image
        alt="design icon"
        src={ic_design2}
        className="aspect-[1.03] object-contain object-center w-40 fill-indigo-50 overflow-hidden max-w-full ml-3 mt-7 self-start max-md:ml-2.5"
      />
    </>
  );
}
