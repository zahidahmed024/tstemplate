"use client";
import React from "react";
import ic_commission from "../assets/icons/commission.png";
import ic_profit from "../assets/icons/profit.png";
import ic_performance from "../assets/icons/perform.png";
import ic_timer from "../assets/icons/timer.png";
import ic_star from "../assets/icons/star.png";
import users from "../assets/images/users.png";
import Image from "next/image";

export default function InfoSection1() {
  return (
    <div className="bg-indigo-50 self-stretch flex w-full flex-col items-stretch pl-16 pr-20 py-12 max-md:max-w-full max-md:px-5">
      <div className="mr-5 mt-14 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-gray-900 text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                What Makes FundedNext Different?{" "}
              </div>
              <div className="text-gray-800 text-opacity-80 text-xl leading-8 mt-5 max-md:max-w-full">
                FundedNext offers no time limits in its funding challenges.
              </div>
              <div className="flex flex-row items-center gap-3 justify-start mt-9 max-md:max-w-full max-md:flex-wrap">
                <Image
                  src={users}
                  className="items-start w-[166px] overflow-hidden rounded-full"
                />
                <div className="flex grow basis-[0%] flex-col pb-1.5">
                  <div className="text-gray-900 text-lg font-semibold leading-7">
                    Our Happy Traders
                  </div>
                  <div className="flex flex-row">
                    <Image
                      src={ic_star}
                      className="items-start w-6 overflow-hidden"
                    />
                    <p>(1.5k Reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* box section  */}
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-5">
              <BoxItem
                icon={ic_profit}
                className="bg-[linear-gradient(91deg,#3F68FF_0%,#CD63FF_100%)]"
                text1="15% Profit Sharing from Challenge Phase"
                text2="FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make"
              />
              <BoxItem
                icon={ic_commission}
                text1="15% Profit Sharing from Challenge Phase"
                text2="FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make"
              />
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-10">
              <BoxItem
                icon={ic_performance}
                text1="15% Profit Sharing from Challenge Phase"
                text2="FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make"
              />
              <BoxItem
                icon={ic_timer}
                text1="15% Profit Sharing from Challenge Phase"
                text2="FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a29d852efe01c03baadc09ba495ed04d99b61d47342f787be4e885d02affed3f?apiKey=877f25baca7641bea0898fac94c96e97&"
        className="aspect-[0.97] object-contain object-center w-[66px] fill-white fill-opacity-70 overflow-hidden max-w-full self-start"
      />
    </div>
  );
}

const BoxItem = ({ icon = "", text1 = "", text2 = "", className = "" }) => {
  return (
    <div
      className={`bg-white ${className} flex flex-col mt-5 px-5 py-8 rounded-2xl items-start max-md:pr-5`}
    >
      <Image
        src={icon}
        className="aspect-square object-contain object-center w-[54px] overflow-hidden max-w-full"
      />
      <div
        className={`self-stretch ${className ? "text-white" : "text-gray-900"
          } text-xl font-semibold leading-7 tracking-tight mt-8`}
      >
        {text1}
      </div>{" "}
      <div
        className={`self-stretch ${className ? "text-white" : "text-gray-900"
          }  text-opacity-80 text-base leading-7 mt-3`}
      >
        {text2}
      </div>
    </div>
  );
};
